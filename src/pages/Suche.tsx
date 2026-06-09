import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search as SearchIcon, ArrowUpRight, Calendar, FileText, Settings2, HelpCircle, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import { searchGrouped, highlightParts } from "@/lib/search";
import { typeLabels, type SearchType } from "@/lib/searchIndex";

const filters: Array<{ id: "all" | SearchType; label: string }> = [
  { id: "all", label: "Alle" },
  { id: "event", label: "Veranstaltungen" },
  { id: "seite", label: "Seiten" },
  { id: "ausstattung", label: "Ausstattung" },
  { id: "faq", label: "FAQ" },
];

const iconFor: Record<SearchType, React.ComponentType<{ className?: string }>> = {
  event: Calendar,
  seite: FileText,
  ausstattung: Settings2,
  faq: HelpCircle,
};

const Highlight = ({ text, query }: { text: string; query: string }) => (
  <>
    {highlightParts(text, query).map((p, i) =>
      p.match ? (
        <mark key={i} className="bg-[#CF3D11]/20 text-[#CF3D11] px-0.5">
          {p.text}
        </mark>
      ) : (
        <span key={i}>{p.text}</span>
      ),
    )}
  </>
);

const Suche = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [filter, setFilter] = useState<"all" | SearchType>("all");

  useEffect(() => {
    setQuery(params.get("q") ?? "");
  }, [params]);

  const groups = useMemo(() => searchGrouped(query, 50), [query]);
  const total = (Object.keys(groups) as SearchType[]).reduce(
    (sum, k) => sum + groups[k].length,
    0,
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setParams(query.trim() ? { q: query.trim() } : {});
  };

  const visibleTypes: SearchType[] =
    filter === "all"
      ? (Object.keys(groups) as SearchType[]).filter((k) => groups[k].length > 0)
      : [filter];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-16">
          {/* Watermark + Header */}
          <div className="relative mb-10">
            <span
              aria-hidden
              className="pointer-events-none select-none absolute -top-8 left-0 text-[18vw] md:text-[12vw] leading-none font-light text-black/[0.04] tracking-tighter"
            >
              SUCHE
            </span>
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-light text-black tracking-tight mb-6">
                Suche
              </h1>
              <form onSubmit={onSubmit} className="flex items-center border-b-2 border-black max-w-2xl">
                <SearchIcon className="w-5 h-5 text-black/60 mr-3 shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Wonach suchst du?"
                  className="flex-1 py-4 bg-transparent outline-none text-lg font-light text-black placeholder:text-black/40"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setParams({});
                    }}
                    className="text-black/50 hover:text-black p-1"
                    aria-label="Zurücksetzen"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </form>
              {query.trim() && (
                <p className="text-sm text-black/60 mt-3 font-light">
                  {total} {total === 1 ? "Treffer" : "Treffer"} für „{query}"
                </p>
              )}
            </div>
          </div>

          {/* Filter chips */}
          {query.trim() && total > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {filters.map((f) => {
                const count = f.id === "all" ? total : groups[f.id].length;
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    disabled={f.id !== "all" && count === 0}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      active
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black hover:bg-black hover:text-white"
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                  >
                    {f.label}
                    <span className="ml-2 opacity-60">{count}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Empty query → suggestions */}
          {!query.trim() && (
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-black/50 mb-4">Beliebte Suchen</p>
              <div className="flex flex-wrap gap-2">
                {["Jazz", "Klassik", "Mieten", "Steinway", "Aufnahme", "Barrierefrei", "Gutschein"].map(
                  (s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setQuery(s);
                        setParams({ q: s });
                      }}
                      className="px-4 py-2 border border-black text-sm font-light hover:bg-black hover:text-white transition-colors"
                    >
                      {s}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}

          {/* No results */}
          {query.trim() && total === 0 && (
            <div className="max-w-2xl py-12">
              <p className="text-2xl font-light text-black mb-3">
                Keine Treffer für „{query}".
              </p>
              <p className="text-black/60 font-light mb-6">
                Versuche andere Begriffe oder entdecke unsere Empfehlungen:
              </p>
              <div className="flex gap-3">
                <Link
                  to="/programm"
                  className="px-5 py-3 bg-black text-white text-sm hover:bg-[#CF3D11] transition-colors"
                >
                  Zum Programm
                </Link>
                <Link
                  to="/entdecken"
                  className="px-5 py-3 border border-black text-sm hover:bg-black hover:text-white transition-colors"
                >
                  Empfehlungen entdecken
                </Link>
              </div>
            </div>
          )}

          {/* Results */}
          {query.trim() && total > 0 && (
            <div className="space-y-12">
              {visibleTypes.map((type) => {
                const items = groups[type];
                if (items.length === 0) return null;
                const Icon = iconFor[type];
                return (
                  <section key={type}>
                    <div className="flex items-center gap-3 mb-5 pb-2 border-b border-black/10">
                      <Icon className="w-4 h-4 text-[#CF3D11]" />
                      <h2 className="text-xs uppercase tracking-widest text-black/70">
                        {typeLabels[type]}
                        <span className="ml-2 text-black/40">({items.length})</span>
                      </h2>
                    </div>
                    <ul className="divide-y divide-black/10">
                      {items.map(({ item }) => (
                        <li key={item.id}>
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link
                              to={item.url}
                              className="group flex items-start gap-4 py-5 hover:bg-black/[0.02] -mx-3 px-3 transition-colors"
                            >
                              {item.image && type === "event" && (
                                <img
                                  src={item.image}
                                  alt=""
                                  className="w-20 h-20 object-cover shrink-0"
                                  loading="lazy"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-normal text-black group-hover:text-[#CF3D11] transition-colors">
                                  <Highlight text={item.title} query={query} />
                                </h3>
                                {item.subtitle && (
                                  <p className="text-sm text-black/70 font-light mt-1">
                                    <Highlight text={item.subtitle} query={query} />
                                  </p>
                                )}
                                {item.description && (
                                  <p className="text-sm text-black/50 font-light mt-2 line-clamp-2">
                                    <Highlight text={item.description} query={query} />
                                  </p>
                                )}
                                {item.date && (
                                  <p className="text-xs text-black/50 mt-2 uppercase tracking-wider">
                                    {item.date}
                                  </p>
                                )}
                              </div>
                              <ArrowUpRight className="w-5 h-5 text-black/40 group-hover:text-[#CF3D11] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <OrangeBarsTransition />
      <Footer />
    </div>
  );
};

export default Suche;