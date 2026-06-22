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
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md animate-in fade-in duration-200"
        onClick={() => searchPalette.close()}
        aria-hidden
      />

      {/* Suggestion sheet, anchored below the nav */}
      <div
        className="fixed left-0 right-0 top-[88px] z-40 animate-in fade-in slide-in-from-top-2 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto px-6 md:px-16">
          <div className="theme-light bg-background shadow-xl py-8 max-h-[70vh] overflow-y-auto">
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                Beliebte Konzerte
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {popularConcerts.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => goConcert(c.id)}
                    className="group flex items-center gap-3 px-4 py-3 border border-border hover:border-primary hover:bg-muted transition-colors"
                  >
                    <img
                      src={c.image}
                      alt=""
                      className="w-12 h-12 object-cover shrink-0"
                      loading="lazy"
                    />
                    <div className="flex flex-col min-w-0 text-left">
                      <span className="text-sm font-medium text-foreground truncate">
                        {c.title}
                      </span>
                      <span className="text-xs text-muted-foreground truncate">
                        {c.weekday}. {c.date.split(",")[1]?.trim()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                Beliebte Themen
              </p>
              <div className="flex flex-wrap gap-2">
                {popularTopics.map((t) => (
                  <button
                    key={t}
                    onClick={() => goSearch(t)}
                    className="px-4 py-2 border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPaletteHost;