import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Sparkles, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Tip {
  title: string;
  tooltip: string;
  expanded_help?: string;
  suggested_action?: string;
  confidence?: string;
}

interface TipState {
  tip: Tip | null;
  loading: boolean;
  error: string | null;
  rect: DOMRect | null;
  pinned: boolean;
}

const INTERACTIVE_SELECTOR =
  'button, a, input, textarea, select, [role="button"], [role="link"], [role="tab"], .card, article, h1, h2, h3';

function buildContext(el: HTMLElement, pathname: string) {
  const rect = el.getBoundingClientRect();
  const nearby = (el.closest("section, article, header, footer, main, [data-section]") as HTMLElement | null)?.innerText?.slice(0, 240) ?? "";
  const sectionName =
    (el.closest("[data-section]") as HTMLElement | null)?.dataset.section ??
    (el.closest("section") as HTMLElement | null)?.querySelector("h1,h2,h3")?.textContent?.trim() ??
    "";
  return {
    product_name: "Sendesaal Bremen",
    current_screen: pathname,
    page_title: document.title,
    section_name: sectionName,
    element_label: el.getAttribute("aria-label") || el.innerText?.trim().slice(0, 120) || el.getAttribute("placeholder") || "",
    element_type: el.tagName.toLowerCase(),
    nearby_text: nearby,
    current_value: (el as HTMLInputElement).value ?? "",
    trigger_type: "click",
    viewport: { w: window.innerWidth, h: window.innerHeight },
    position: { x: rect.x, y: rect.y },
  };
}

const ContextualAIHelp = () => {
  const [active, setActive] = useState(false);
  const [hoverEl, setHoverEl] = useState<HTMLElement | null>(null);
  const [tipState, setTipState] = useState<TipState>({ tip: null, loading: false, error: null, rect: null, pinned: false });
  const cursorRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<Map<string, Tip>>(new Map());
  const location = useLocation();

  // toggle body class for cursor suppression
  useEffect(() => {
    if (active) document.body.classList.add("ai-help-active");
    else document.body.classList.remove("ai-help-active");
    return () => document.body.classList.remove("ai-help-active");
  }, [active]);

  // close on route change
  useEffect(() => {
    setTipState({ tip: null, loading: false, error: null, rect: null, pinned: false });
    setHoverEl(null);
  }, [location.pathname]);

  // custom cursor follow
  useEffect(() => {
    if (!active) return;
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [active]);

  // hover detection + highlight
  useEffect(() => {
    if (!active) return;
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (target.closest("[data-ai-help-ui]")) return;
      const match = target.closest(INTERACTIVE_SELECTOR) as HTMLElement | null;
      if (match && match !== hoverEl) {
        if (hoverEl) hoverEl.classList.remove("ai-help-highlight");
        match.classList.add("ai-help-highlight");
        setHoverEl(match);
      }
    };
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mouseover", onOver);
      if (hoverEl) hoverEl.classList.remove("ai-help-highlight");
    };
  }, [active, hoverEl]);

  // escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (tipState.pinned) {
          setTipState({ tip: null, loading: false, error: null, rect: null, pinned: false });
        } else if (active) {
          setActive(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, tipState.pinned]);

  const fetchTip = useCallback(async (el: HTMLElement) => {
    const ctx = buildContext(el, location.pathname);
    const key = `${ctx.current_screen}::${ctx.element_label}::${ctx.element_type}`;
    const cached = cacheRef.current.get(key);
    const rect = el.getBoundingClientRect();
    if (cached) {
      setTipState({ tip: cached, loading: false, error: null, rect, pinned: true });
      return;
    }
    setTipState({ tip: null, loading: true, error: null, rect, pinned: true });
    try {
      const { data, error } = await supabase.functions.invoke("contextual-help", {
        body: { context: ctx },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      cacheRef.current.set(key, data as Tip);
      setTipState({ tip: data as Tip, loading: false, error: null, rect, pinned: true });
    } catch (e: any) {
      const msg = e?.message?.includes("429")
        ? "Zu viele Anfragen – bitte kurz warten."
        : e?.message?.includes("402")
        ? "KI-Guthaben aufgebraucht."
        : "Tipp konnte nicht geladen werden.";
      setTipState({ tip: null, loading: false, error: msg, rect, pinned: true });
    }
  }, [location.pathname]);

  // click pins a tip
  useEffect(() => {
    if (!active) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-ai-help-ui]")) return;
      const match = target.closest(INTERACTIVE_SELECTOR) as HTMLElement | null;
      if (!match) return;
      e.preventDefault();
      e.stopPropagation();
      fetchTip(match);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [active, fetchTip]);

  // position card
  const cardStyle: React.CSSProperties = (() => {
    if (!tipState.rect) return { display: "none" };
    const cardW = 320;
    const cardH = 200;
    let left = tipState.rect.right + 12;
    let top = tipState.rect.top;
    if (left + cardW > window.innerWidth - 16) left = Math.max(16, tipState.rect.left - cardW - 12);
    if (top + cardH > window.innerHeight - 16) top = Math.max(16, window.innerHeight - cardH - 16);
    return { left, top, width: cardW };
  })();

  return (
    <>
      {/* Toggle button */}
      <button
        data-ai-help-ui
        onClick={() => {
          setActive((a) => !a);
          setTipState({ tip: null, loading: false, error: null, rect: null, pinned: false });
        }}
        aria-label={active ? "AI-Hilfe beenden" : "AI-Hilfe aktivieren"}
        className={`fixed bottom-6 right-6 z-[9998] flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all shadow-lg ${
          active
            ? "bg-primary text-primary-foreground"
            : "bg-black text-white hover:bg-primary hover:text-primary-foreground"
        }`}
        style={{ borderRadius: 0 }}
      >
        {active ? <X size={16} /> : <Sparkles size={16} />}
        {active ? "AI-Hilfe beenden" : "AI-Hilfe"}
      </button>

      {/* Custom cursor */}
      {active && (
        <div
          ref={cursorRef}
          data-ai-help-ui
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-[10001] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="ai-help-cursor">
            <Sparkles size={14} className="text-white relative z-10" />
          </div>
        </div>
      )}

      {/* Tip card */}
      {active && tipState.rect && (
        <div
          data-ai-help-ui
          className="fixed z-[10000] bg-white shadow-2xl border border-black/10 p-5 ai-help-card"
          style={{ ...cardStyle, pointerEvents: "auto" }}
        >
          <button
            onClick={() => setTipState({ tip: null, loading: false, error: null, rect: null, pinned: false })}
            className="absolute top-1 right-1 p-2 text-black/60 hover:text-primary transition-colors"
            aria-label="Schließen"
          >
            <X size={16} />
          </button>
          {tipState.loading && (
            <div className="flex items-center gap-2 text-sm text-black/70">
              <Loader2 size={16} className="animate-spin" /> KI denkt nach...
            </div>
          )}
          {tipState.error && (
            <div className="text-sm text-primary">{tipState.error}</div>
          )}
          {tipState.tip && !tipState.loading && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-medium">
                <Sparkles size={12} /> Tipp
              </div>
              <h4 className="text-base font-medium text-black leading-tight pr-6">{tipState.tip.title}</h4>
              {tipState.tip.expanded_help && (
                <p className="text-sm text-black/70 leading-snug">{tipState.tip.expanded_help}</p>
              )}
              {tipState.tip.suggested_action && (
                <p className="text-xs text-black/60 border-t border-black/10 pt-2 mt-2">
                  → {tipState.tip.suggested_action}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ContextualAIHelp;