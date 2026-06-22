import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, RotateCcw, Sparkles, Pencil, RefreshCw, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import { Button } from "@/components/ui/button";
import {
  INTENT_OPTIONS,
  generateAdaptiveUi,
  getEventById,
  type AdaptiveResult,
  type IntentId,
} from "@/lib/adaptiveUi";

type ViewState = "idle" | "loading" | "ready" | "error";

const Entdecken = () => {
  const [selectedIntent, setSelectedIntent] = useState<IntentId | null>(null);
  const [view, setView] = useState<ViewState>("idle");
  const [result, setResult] = useState<AdaptiveResult | null>(null);
  const [editing, setEditing] = useState(false);

  const intent = useMemo(
    () => INTENT_OPTIONS.find((i) => i.id === selectedIntent) ?? null,
    [selectedIntent],
  );

  const handleGenerate = (intentId: IntentId | null = selectedIntent) => {
    if (!intentId) return;
    setEditing(false);
    setView("loading");
    setResult(null);
    // Simulated processing delay for UX rhythm.
    window.setTimeout(() => {
      try {
        const next = generateAdaptiveUi(intentId);
        setResult(next);
        setView("ready");
      } catch {
        setView("error");
      }
    }, 450);
  };

  const handleReset = () => {
    setSelectedIntent(null);
    setResult(null);
    setEditing(false);
    setView("idle");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[500px] bg-black text-white flex items-end overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full bg-[#CF3D11]/20 blur-3xl"
        />
        <div className="relative container mx-auto px-6 md:px-16 pb-24">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-primary mb-6 font-light">
            Adaptive Empfehlung · Besuch planen
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] max-w-4xl">
            Entdecke das Konzert,
            <br />
            das zu deinem Abend passt.
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-light text-white/80">
            Wähle einen Anlass — wir stellen dir passende Konzerte aus unserem
            Programm zusammen. Keine erfundenen Inhalte, nur reale Termine im
            Sendesaal.
          </p>
        </div>
        {/* Concave bottom arc */}
        <div
          aria-hidden="true"
          className="absolute -bottom-px left-0 right-0 h-16 bg-white"
          style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}
        />
      </section>

      <OrangeBarsTransition />

      {/* Intent Picker */}
      <section className="bg-white pt-20 pb-16">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-[#CF3D11]" />
            <h2 className="text-2xl md:text-3xl font-light">
              {view === "ready" && !editing
                ? "Dein Intent"
                : "Was möchtest du erleben?"}
            </h2>
          </div>

          {view === "ready" && !editing && intent ? (
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-sm font-light">
                {intent.label}
              </span>
              <Button
                variant="outline"
                className="rounded-none border-black text-black hover:bg-black hover:text-white"
                onClick={() => setEditing(true)}
              >
                <Pencil className="w-4 h-4" /> Intent ändern
              </Button>
              <Button
                variant="outline"
                className="rounded-none border-[#CF3D11] text-[#CF3D11] hover:bg-[#CF3D11] hover:text-white"
                onClick={() => handleGenerate(intent.id)}
              >
                <RefreshCw className="w-4 h-4" /> Neu generieren
              </Button>
              <Button
                variant="ghost"
                className="rounded-none text-black/60 hover:text-black"
                onClick={handleReset}
              >
                <RotateCcw className="w-4 h-4" /> Zurücksetzen
              </Button>
            </div>
          ) : (
            <>
              <p className="text-black/60 font-light mb-8 max-w-2xl">
                Wähle einen Anlass. Du kannst deine Auswahl jederzeit ändern,
                neu generieren oder zurücksetzen.
              </p>
              <div className="flex flex-wrap gap-3">
                {INTENT_OPTIONS.map((opt) => {
                  const active = selectedIntent === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedIntent(opt.id)}
                      className={`px-5 py-3 text-sm font-light transition-colors border ${
                        active
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-black/20 hover:border-black"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
              {intent && (
                <p className="mt-6 text-sm text-black/60 font-light">
                  {intent.hint}
                </p>
              )}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  disabled={!selectedIntent || view === "loading"}
                  className="rounded-none bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white px-8 py-6 h-auto text-base font-light disabled:opacity-40"
                  onClick={() => handleGenerate()}
                >
                  <Sparkles className="w-4 h-4" />
                  {view === "loading" ? "Wird generiert…" : "Empfehlungen generieren"}
                </Button>
                {(selectedIntent || result) && (
                  <Button
                    variant="ghost"
                    onClick={handleReset}
                    className="rounded-none text-black/60 hover:text-black"
                  >
                    <RotateCcw className="w-4 h-4" /> Zurücksetzen
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-6 md:px-16">
          {view === "idle" && (
            <EmptyState />
          )}

          {view === "loading" && <LoadingState />}

          {view === "error" && (
            <ErrorState onRetry={() => handleGenerate()} />
          )}

          {view === "ready" && result && (
            <Results result={result} onRetry={() => handleGenerate()} />
          )}
        </div>
      </section>

      <Footer variant="dark" sectionAbove="white" />
    </div>
  );
};

const EmptyState = () => (
  <div className="border border-dashed border-black/20 p-10 md:p-16 text-center">
    <p className="uppercase tracking-[0.25em] text-xs text-black/50 mb-3">
      Bereit, wenn du es bist
    </p>
    <h3 className="text-2xl md:text-3xl font-light mb-4">
      Wähle einen Intent, um zu starten.
    </h3>
    <p className="text-black/60 font-light max-w-xl mx-auto">
      Die Empfehlungen basieren ausschließlich auf unserem aktuellen Programm.
    </p>
  </div>
);

const LoadingState = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className="border border-black/10 p-6 animate-pulse">
        <div className="h-44 bg-black/5 mb-6" />
        <div className="h-4 bg-black/10 w-1/3 mb-3" />
        <div className="h-6 bg-black/10 w-3/4 mb-2" />
        <div className="h-4 bg-black/10 w-2/3" />
      </div>
    ))}
  </div>
);

const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="border border-[#CF3D11]/30 bg-[#CF3D11]/5 p-10 text-center">
    <h3 className="text-2xl font-light mb-3">Etwas ist schiefgelaufen.</h3>
    <p className="text-black/60 font-light mb-6">
      Bitte versuche es noch einmal.
    </p>
    <Button
      onClick={onRetry}
      className="rounded-none bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white"
    >
      <RefreshCw className="w-4 h-4" /> Erneut versuchen
    </Button>
  </div>
);

const Results = ({
  result,
  onRetry,
}: {
  result: AdaptiveResult;
  onRetry: () => void;
}) => {
  if (result.status === "fallback" || result.recommendations.length === 0) {
    return (
      <div className="border border-black/15 p-10 text-center">
        <h3 className="text-2xl font-light mb-3">{result.message}</h3>
        <p className="text-black/60 font-light mb-8">
          Vielleicht hilft dir ein Blick ins gesamte Programm.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-none bg-black text-white hover:bg-black/80"
          >
            <Link to="/programm">Zum Programm</Link>
          </Button>
          <Button
            variant="outline"
            onClick={onRetry}
            className="rounded-none border-black"
          >
            <RefreshCw className="w-4 h-4" /> Neu generieren
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-black/50 mb-8">
        {result.message}
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {result.recommendations.map((rec) => {
          const event = getEventById(rec.eventId);
          if (!event) return null;
          return (
            <article
              key={rec.eventId}
              className="group border border-black/15 hover:border-black transition-colors flex flex-col"
            >
              <Link to={`/event/${event.id}`} className="block overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-black/50 mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </span>
                </div>
                <h3 className="text-2xl font-light leading-tight mb-1">
                  <Link
                    to={`/event/${event.id}`}
                    className="hover:text-[#CF3D11] transition-colors"
                  >
                    {event.title}
                  </Link>
                </h3>
                <p className="text-sm text-black/70 font-light mb-4">
                  {event.artist}
                </p>
                <p className="text-sm text-black/60 font-light mb-5 flex-1">
                  {event.description}
                </p>
                {rec.reasons.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {rec.reasons.map((reason, i) => (
                      <span
                        key={i}
                        className="text-[11px] uppercase tracking-wider bg-black/5 px-2.5 py-1 text-black/70"
                      >
                        {reason}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3 mt-auto">
                  <Button
                    asChild
                    className="rounded-none bg-black text-white hover:bg-black/80 flex-1"
                  >
                    <Link to={`/event/${event.id}`}>Details</Link>
                  </Button>
                  {event.externalTicketing && (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-none border-[#CF3D11] text-[#CF3D11] hover:bg-[#CF3D11] hover:text-white"
                    >
                      <a
                        href="https://tickets.sendesaal-bremen.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tickets <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Structured JSON (collapsed for transparency) */}
      <details className="mt-12 border border-black/10">
        <summary className="cursor-pointer px-5 py-4 text-sm uppercase tracking-[0.2em] text-black/60 hover:bg-black/5">
          Strukturierte Antwort (JSON)
        </summary>
        <pre className="text-xs bg-black text-white p-6 overflow-x-auto font-mono">
{JSON.stringify(result, null, 2)}
        </pre>
      </details>
    </div>
  );
};

export default Entdecken;