import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, FileText, Settings2, HelpCircle, Search as SearchIcon, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { searchGrouped } from "@/lib/search";
import { typeLabels, type SearchType, type SearchItem } from "@/lib/searchIndex";

const iconFor: Record<SearchType, React.ComponentType<{ className?: string }>> = {
  event: Calendar,
  seite: FileText,
  ausstattung: Settings2,
  faq: HelpCircle,
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchPalette = ({ open, onOpenChange }: Props) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const groups = useMemo(() => searchGrouped(query), [query]);
  const flat: SearchItem[] = useMemo(
    () =>
      (Object.keys(groups) as SearchType[]).flatMap((k) => groups[k].map((r) => r.item)),
    [groups],
  );
  const hasResults = flat.length > 0;

  const go = (url: string) => {
    onOpenChange(false);
    if (url.startsWith("/")) navigate(url);
    else window.location.href = url;
  };

  const seeAll = () => {
    if (!query.trim()) return;
    onOpenChange(false);
    navigate(`/suche?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 rounded-none border-2 border-black bg-white">
        {/* Input */}
        <div className="flex items-center border-b-2 border-black px-5">
          <SearchIcon className="w-5 h-5 text-black/60 mr-3 shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (flat[0]) go(flat[0].url);
                else seeAll();
              }
            }}
            placeholder="Konzerte, Künstler, Räume, FAQ durchsuchen …"
            className="flex-1 py-5 bg-transparent outline-none text-lg font-light text-black placeholder:text-black/40"
          />
          <kbd className="hidden sm:inline-block text-xs text-black/50 border border-black/20 px-2 py-0.5 ml-2">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {!query.trim() && (
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-black/50 mb-3">Beliebte Suchen</p>
              <div className="flex flex-wrap gap-2">
                {["Jazz", "Klassik", "Mieten", "Tickets", "Steinway", "Barrierefrei"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-3 py-1.5 border border-black text-sm font-light hover:bg-black hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && !hasResults && (
            <div className="p-8 text-center">
              <p className="text-black/60 font-light">
                Keine Treffer für <span className="text-black">„{query}"</span>.
              </p>
              <p className="text-sm text-black/40 mt-2">
                Versuche andere Begriffe oder schau ins{" "}
                <button onClick={() => go("/programm")} className="underline hover:text-[#CF3D11]">
                  Programm
                </button>
                .
              </p>
            </div>
          )}

          {query.trim() && hasResults && (
            <div className="py-2">
              {(Object.keys(groups) as SearchType[]).map((type) => {
                const items = groups[type];
                if (items.length === 0) return null;
                const Icon = iconFor[type];
                return (
                  <div key={type} className="py-2">
                    <div className="px-5 py-1 text-[11px] uppercase tracking-widest text-black/50">
                      {typeLabels[type]}
                    </div>
                    {items.map(({ item }) => (
                      <button
                        key={item.id}
                        onClick={() => go(item.url)}
                        className="w-full flex items-start gap-3 px-5 py-3 text-left hover:bg-black hover:text-white transition-colors group"
                      >
                        <Icon className="w-4 h-4 mt-1 shrink-0 opacity-70" />
                        <div className="flex-1 min-w-0">
                          <div className="font-normal truncate">{item.title}</div>
                          {item.subtitle && (
                            <div className="text-sm text-black/60 group-hover:text-white/70 truncate font-light">
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                        {item.date && (
                          <span className="text-xs text-black/50 group-hover:text-white/60 whitespace-nowrap font-light">
                            {item.date.split(",")[1]?.trim() ?? item.date}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {query.trim() && (
          <button
            onClick={seeAll}
            className="flex items-center justify-between border-t-2 border-black px-5 py-3 text-sm font-light hover:bg-[#CF3D11] hover:text-white transition-colors"
          >
            <span>
              Alle Ergebnisse für <span className="font-normal">„{query}"</span> anzeigen
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchPalette;