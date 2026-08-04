import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search as SearchIcon,
  ArrowUpRight,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  FileText,
  Settings2,
  HelpCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { searchGrouped, highlightParts } from "@/lib/search";
import { typeLabels, type SearchType } from "@/lib/searchIndex";
import { events as allEvents } from "@/data/events";

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
        <mark key={i} className="bg-primary/20 text-primary px-0.5">
          {p.text}
        </mark>
      ) : (
        <span key={i}>{p.text}</span>
      ),
    )}
  </>
);

// Concert card matching the Programm page style
const ConcertCard = ({
  eventId,
  query,
}: {
  eventId: number;
  query: string;
}) => {
  const event = allEvents.find((e) => e.id === eventId);
  if (!event) return null;
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between py-8 border-b border-border">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 flex-1">
        <div className="w-full md:w-[260px] lg:w-[300px] h-[180px] flex-shrink-0 bg-muted">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-4 text-foreground text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>
            <div className="w-5 h-px bg-primary" />
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>{event.time} Uhr</span>
            </div>
            <div className="w-5 h-px bg-primary" />
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{event.location}</span>
            </div>
          </div>
          <h3 className="text-primary text-2xl md:text-3xl font-normal">
            <Highlight text={event.title} query={query} />
          </h3>
          <p className="text-foreground text-lg font-normal">
            <Highlight text={event.artist} query={query} />
          </p>
          <p className="text-foreground text-sm md:text-base font-light">
            <Highlight text={event.description} query={query} />
          </p>
        </div>
      </div>
      <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-[180px]">
        <Button
          asChild
          variant="outline"
          className="flex-1 lg:w-[180px] h-[48px] text-base text-primary border-primary hover:bg-primary/10 bg-transparent"
        >
          <Link to={`/event/${event.id}`}>Details</Link>
        </Button>
        <div className="flex flex-col items-center">
          <Button className="w-full lg:w-[180px] h-[48px] px-8 text-base bg-primary hover:bg-primary/90 text-black">
            Tickets
          </Button>
          {event.externalTicketing && (
            <span className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
              <ExternalLink size={14} aria-hidden />
              Externer Veranstalter
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

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

  const visibleTypes: SearchType[] =
    filter === "all"
      ? (Object.keys(groups) as SearchType[]).filter((k) => groups[k].length > 0)
      : [filter];

  return (
    <div className="min-h-screen bg-background theme-light">
      <Navigation />
      <div className="h-24" />
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-16">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <h1 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-normal">
              Suchergebnisse
            </h1>
          </div>

          {/* Filter chips */}
          {query.trim() && total > 0 && (
            <div className="flex flex-wrap items-center mb-12">
              {filters.map((f) => {
                const count = f.id === "all" ? total : groups[f.id].length;
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    disabled={f.id !== "all" && count === 0}
                    className={`px-8 py-4 text-base transition-all ${
                      active
                        ? "bg-primary text-black"
                        : "bg-transparent text-foreground hover:text-primary"
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                  >
                    {f.label}
                    <span className="ml-2 opacity-60 font-normal text-sm">{count}</span>
                  </button>
                );
              })}
            </div>
          )}

          {query.trim() && (
            <p className="text-sm text-muted-foreground mb-10 font-light">
              {total} {total === 1 ? "Treffer" : "Treffer"} für „{query}"
            </p>
          )}

          {/* Empty query */}
          {!query.trim() && (
            <div className="max-w-2xl py-12">
              <p className="text-2xl font-light text-foreground mb-3">
                Geben Sie einen Suchbegriff ein.
              </p>
              <p className="text-muted-foreground font-light">
                Suchen Sie nach Konzerten, Künstlern, Räumen oder Fragen.
              </p>
            </div>
          )}

          {/* No results */}
          {query.trim() && total === 0 && (
            <div className="max-w-2xl py-12">
              <p className="text-2xl font-light text-foreground mb-3">
                Keine Treffer für „{query}".
              </p>
              <p className="text-muted-foreground font-light mb-6">
                Versuche andere Begriffe oder schau ins Programm:
              </p>
              <div className="flex gap-3">
                <Link
                  to="/programm"
                  className="px-5 py-3 bg-black text-white text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Zum Programm
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
                    <div className="flex items-center gap-3 mb-5 pb-2 border-b border-border">
                      <Icon className="w-4 h-4 text-primary" />
                      <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
                        {typeLabels[type]}
                        <span className="ml-2 text-muted-foreground">({items.length})</span>
                      </h2>
                    </div>

                    {type === "event" && (
                      <div>
                        {items.map(({ item }) => {
                          const id = Number(item.id.replace("event-", ""));
                          return (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ConcertCard eventId={id} query={query} />
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {type === "faq" && (
                      <Accordion type="single" collapsible className="w-full">
                        {items.map(({ item }) => (
                          <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-b border-border"
                          >
                            <AccordionTrigger className="text-left text-lg font-normal text-foreground hover:text-primary hover:no-underline py-5">
                              <Highlight text={item.title} query={query} />
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground font-light pb-5">
                              <p className="mb-3">
                                <Highlight text={item.description ?? ""} query={query} />
                              </p>
                              <Link
                                to={item.url}
                                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                              >
                                Zur Antwort <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    )}

                    {(type === "seite" || type === "ausstattung") && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map(({ item }) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link
                              to={item.url}
                              className="group flex items-start gap-4 p-5 border border-border hover:border-primary hover:bg-black/[0.02] transition-colors h-full"
                            >
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt=""
                                  className="w-20 h-20 object-cover shrink-0"
                                  loading="lazy"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-normal text-foreground group-hover:text-primary transition-colors">
                                  <Highlight text={item.title} query={query} />
                                </h3>
                                {item.subtitle && (
                                  <p className="text-sm text-muted-foreground font-light mt-1">
                                    <Highlight text={item.subtitle} query={query} />
                                  </p>
                                )}
                                {item.description && (
                                  <p className="text-sm text-muted-foreground font-light mt-2 line-clamp-2">
                                    <Highlight text={item.description} query={query} />
                                  </p>
                                )}
                              </div>
                              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <OrangeBarsTransition />
      <Footer sectionAbove="white" />
    </div>
  );
};

export default Suche;