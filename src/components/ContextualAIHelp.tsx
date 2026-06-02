import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Sparkles, X, HelpCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type AITip = {
  title: string;
  tooltip: string;
  expanded_help: string;
  suggested_action: string;
  confidence?: string;
};

type HelpContext = {
  product_name: string;
  current_screen: string;
  page_title: string;
  section_name: string;
  element_label: string;
  element_type: string;
  nearby_text: string;
  current_value: string;
  error_message: string;
  device_type: string;
  trigger_type: "hover" | "click";
  recent_actions: string[];
};

const PRODUCT_NAME = "Sendesaal Bremen";

function getNearbyText(el: Element): string {
  const section = el.closest("section, header, footer, main, article, form, nav");
  const text = (section?.textContent ?? "").trim().replace(/\s+/g, " ");
  return text.slice(0, 320);
}

function getSectionName(el: Element): string {
  const section = el.closest("section, header, footer, main, article, form, nav");
  if (!section) return "";
  const heading = section.querySelector("h1, h2, h3");
  return (heading?.textContent ?? section.getAttribute("aria-label") ?? section.tagName).trim();
}

function getElementLabel(el: Element): string {
  const aria = el.getAttribute("aria-label");
  if (aria) return aria;
  const title = (el as HTMLElement).title;
  if (title) return title;
  const text = (el.textContent ?? "").trim().replace(/\s+/g, " ");
  if (text) return text.slice(0, 80);
  const placeholder = (el as HTMLInputElement).placeholder;
  if (placeholder) return placeholder;
  return el.tagName.toLowerCase();
}

function buildContext(el: Element, trigger: "hover" | "click", recent: string[]): HelpContext {
  const tag = el.tagName.toLowerCase();
  const role = el.getAttribute("role") ?? "";
  const input = el as HTMLInputElement;
  return {
    product_name: PRODUCT_NAME,
    current_screen: window.location.pathname,
    page_title: document.title,
    section_name: getSectionName(el),
    element_label: getElementLabel(el),
    element_type: role || tag,
    nearby_text: getNearbyText(el),
    current_value: typeof input.value === "string" ? input.value : "",
    error_message: el.closest("[data-error], [aria-invalid='true']")?.getAttribute("data-error") ?? "",
    device_type: window.innerWidth < 768 ? "mobile" : "desktop",
    trigger_type: trigger,
    recent_actions: recent.slice(-5),
  };
}

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "[role='button']",
  "[role='link']",
  "[data-help]",
  "article",
  "section h1",
  "section h2",
  "section h3",
  ".card",
].join(",");

function isHelpTargetable(el: Element | null): el is HTMLElement {
  if (!el || !(el instanceof HTMLElement)) return false;
  if (el.closest("[data-ai-help-ui]")) return false;
  return el.matches(INTERACTIVE_SELECTOR) || !!el.closest(INTERACTIVE_SELECTOR);
}

function nearestTarget(el: Element | null): HTMLElement | null {
  if (!el || !(el instanceof HTMLElement)) return null;
  if (el.closest("[data-ai-help-ui]")) return null;
  if (el.matches(INTERACTIVE_SELECTOR)) return el;
  const closest = el.closest(INTERACTIVE_SELECTOR);
  return closest instanceof HTMLElement ? closest : null;
}

const ContextualAIHelp = () => {
  const [active, setActive] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hoverRect, setHoverRect] = useState<DOMRect | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [tip, setTip] = useState<AITip | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pinned, setPinned] = useState(false);
  const cacheRef = useRef<Map<string, AITip>>(new Map());
  const hoverTimerRef = useRef<number | null>(null);
  const recentRef = useRef<string[]>([]);
  const currentTargetRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  // Reset on route change
  useEffect(() => {
    setTip(null);
    setAnchorRect(null);
    setHoverRect(null);
    setPinned(false);
  }, [location.pathname]);

  const fetchTip = useCallback(async (ctx: HelpContext) => {
    const key = `${ctx.current_screen}|${ctx.element_label}|${ctx.element_type}`;
    const cached = cacheRef.current.get(key);
    if (cached) {
      setTip(cached);
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    setTip(null);
    try {
      const { data, error: fnErr } = await supabase.functions.invoke("contextual-help", {
        body: { context: ctx },
      });
      if (fnErr) throw fnErr;
      const result = data as AITip;
      if (!result?.title) throw new Error("invalid");
      cacheRef.current.set(key, result);
      setTip(result);
    } catch (e) {
      setError("fallback");
      setTip({
        title: ctx.element_label || "Element",
        tooltip: "Hier siehst du, was dieses Element macht.",
        expanded_help: ctx.nearby_text.slice(0, 140) || "Klicke das Element für mehr Informationen.",
        suggested_action: "Probiere es einfach aus.",
        confidence: "low",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleTarget = useCallback(
    (target: HTMLElement, trigger: "hover" | "click") => {
      currentTargetRef.current = target;
      const rect = target.getBoundingClientRect();
      setAnchorRect(rect);
      setHoverRect(rect);
      const ctx = buildContext(target, trigger, recentRef.current);
      recentRef.current.push(`${trigger}:${ctx.element_label}`);
      fetchTip(ctx);
    },
    [fetchTip],
  );

  // Mouse + click handlers
  useEffect(() => {
    if (!active) return;

    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      if (pinned) return;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const target = nearestTarget(el);
      if (target && target !== currentTargetRef.current) {
        setHoverRect(target.getBoundingClientRect());
        if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = window.setTimeout(() => {
          handleTarget(target, "hover");
        }, 350);
      } else if (!target) {
        if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
        if (!currentTargetRef.current) setHoverRect(null);
      }
    };

    const onClick = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el?.closest("[data-ai-help-ui]")) return;
      e.preventDefault();
      e.stopPropagation();
      const target = nearestTarget(el);
      if (target) {
        setPinned(true);
        handleTarget(target, "click");
      } else {
        setPinned(false);
        setTip(null);
        setAnchorRect(null);
        currentTargetRef.current = null;
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (pinned || tip) {
          setPinned(false);
          setTip(null);
          setAnchorRect(null);
          currentTargetRef.current = null;
        } else {
          setActive(false);
        }
      }
    };

    const onScroll = () => {
      if (currentTargetRef.current) {
        setAnchorRect(currentTargetRef.current.getBoundingClientRect());
        setHoverRect(currentTargetRef.current.getBoundingClientRect());
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick, true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    };
  }, [active, handleTarget, pinned, tip]);

  // Hide native cursor while active
  useEffect(() => {
    if (active) {
      document.documentElement.classList.add("ai-help-active");
    } else {
      document.documentElement.classList.remove("ai-help-active");
      setTip(null);
      setAnchorRect(null);
      setHoverRect(null);
      setPinned(false);
      currentTargetRef.current = null;
    }
    return () => document.documentElement.classList.remove("ai-help-active");
  }, [active]);

  const cardPosition = useMemo(() => {
    if (!anchorRect) return null;
    const cardW = 320;
    const cardH = 200;
    const gap = 16;
    let left = anchorRect.right + gap;
    let top = anchorRect.top;
    let side: "right" | "left" | "below" | "above" = "right";
    if (left + cardW > window.innerWidth - 16) {
      left = anchorRect.left - cardW - gap;
      side = "left";
      if (left < 16) {
        left = Math.max(16, anchorRect.left);
        top = anchorRect.bottom + gap;
        side = "below";
        if (top + cardH > window.innerHeight - 16) {
          top = anchorRect.top - cardH - gap;
          side = "above";
        }
      }
    }
    if (top + cardH > window.innerHeight - 16) top = window.innerHeight - cardH - 16;
    if (top < 16) top = 16;
    return { left, top, side };
  }, [anchorRect]);

  return (
    <div data-ai-help-ui>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setActive((v) => !v)}
        aria-label={active ? "Hilfe-Modus beenden" : "AI Hilfe-Modus aktivieren"}
        className={`fixed bottom-6 right-6 z-[9998] flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium backdrop-blur-md transition-all shadow-lg ${
          active
            ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-purple-500/40"
            : "bg-black/70 text-white hover:bg-black/85 border border-white/15"
        }`}
      >
        {active ? <X className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-purple-300" />}
        <span>{active ? "Hilfe beenden" : "AI Hilfe"}</span>
      </button>

      {active && (
        <>
          {/* Glow cursor */}
          <div
            className="ai-help-cursor"
            style={{ left: cursor.x, top: cursor.y }}
            aria-hidden
          >
            <Sparkles className="w-3 h-3 text-white drop-shadow" />
          </div>

          {/* Hover highlight */}
          {hoverRect && (
            <div
              className="ai-help-highlight"
              aria-hidden
              style={{
                left: hoverRect.left - 6,
                top: hoverRect.top - 6,
                width: hoverRect.width + 12,
                height: hoverRect.height + 12,
              }}
            />
          )}

          {/* Status banner */}
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9998] px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-purple-400/30 text-white text-xs flex items-center gap-2 shadow-lg shadow-purple-500/20">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>Hilfe-Modus aktiv – {pinned ? "Element angeheftet" : "bewege oder klicke ein Element"}</span>
            <kbd className="ml-1 px-1.5 py-0.5 rounded bg-white/10 text-[10px]">Esc</kbd>
          </div>

          {/* Tip card */}
          {anchorRect && cardPosition && (
            <div
              role="dialog"
              aria-label="Kontextuelle Hilfe"
              className="fixed z-[9999] w-80 ai-help-card animate-in fade-in zoom-in-95 duration-200"
              style={{ left: cardPosition.left, top: cardPosition.top }}
            >
              <div className="rounded-xl border border-purple-400/30 bg-black/85 backdrop-blur-xl text-white p-4 shadow-2xl shadow-purple-500/30">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <h3 className="text-sm font-medium truncate">
                      {loading ? "Hilfe wird generiert…" : tip?.title ?? "Hilfe"}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setPinned(false);
                      setTip(null);
                      setAnchorRect(null);
                      currentTargetRef.current = null;
                    }}
                    className="text-white/50 hover:text-white shrink-0"
                    aria-label="Schließen"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {loading ? (
                  <div className="flex items-center gap-2 text-xs text-white/70 py-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Kontextuelle Hilfe wird generiert…
                  </div>
                ) : tip ? (
                  <div className="space-y-2 text-xs leading-relaxed text-white/85">
                    <p>{tip.expanded_help || tip.tooltip}</p>
                    {tip.suggested_action && (
                      <p className="pt-2 border-t border-white/10 text-white/70">
                        <span className="text-purple-300 font-medium">Tipp: </span>
                        {tip.suggested_action}
                      </p>
                    )}
                    {error && (
                      <p className="text-[10px] text-white/40 italic">Offline-Modus</p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContextualAIHelp;