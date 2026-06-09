import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchPalette, useSearchPalette } from "@/lib/useSearchPalette";
import { events } from "@/data/events";

const popularConcerts = events.slice(0, 5);
const popularTopics = ["Jazz", "Klassik", "Mieten", "Steinway", "Barrierefrei"];

const SearchPaletteHost = () => {
  const { open } = useSearchPalette();
  const navigate = useNavigate();

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  const goConcert = (id: number) => {
    searchPalette.close();
    navigate(`/event/${id}`);
  };

  const goSearch = (q: string) => {
    searchPalette.close();
    navigate(`/suche?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      {/* Backdrop blur over page content (under nav, nav has z-50) */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md animate-in fade-in duration-200"
        onClick={() => searchPalette.close()}
        aria-hidden
      />

      {/* Suggestion chips panel, anchored below the nav */}
      <div
        className="fixed left-0 right-0 top-[88px] z-40 animate-in fade-in slide-in-from-top-2 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto px-6 md:px-16">
          <div className="bg-white border border-black/10 shadow-2xl p-6 md:p-8 max-h-[70vh] overflow-y-auto">
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-widest text-black/50 mb-3">
                Beliebte Konzerte
              </p>
              <div className="flex flex-wrap gap-2">
                {popularConcerts.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => goConcert(c.id)}
                    className="group flex items-center gap-2 border border-black px-3 py-2 hover:bg-black hover:text-white transition-colors"
                  >
                    <img
                      src={c.image}
                      alt=""
                      className="w-8 h-8 object-cover"
                      loading="lazy"
                    />
                    <span className="text-sm font-light">{c.title}</span>
                    <span className="text-xs text-black/50 group-hover:text-white/60 hidden sm:inline">
                      {c.weekday}. {c.date.split(",")[1]?.trim()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest text-black/50 mb-3">
                Beliebte Themen
              </p>
              <div className="flex flex-wrap gap-2">
                {popularTopics.map((t) => (
                  <button
                    key={t}
                    onClick={() => goSearch(t)}
                    className="px-3 py-1.5 border border-black/30 text-sm font-light hover:bg-black hover:text-white transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-black/40 mt-6 font-light">
              Drücke <kbd className="border border-black/20 px-1.5 py-0.5">Enter</kbd> für alle Ergebnisse · <kbd className="border border-black/20 px-1.5 py-0.5">ESC</kbd> zum Schließen
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPaletteHost;