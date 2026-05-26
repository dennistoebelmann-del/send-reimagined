import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ways = [
  {
    title: "Mitglied werden",
    description:
      "Als Vereinsmitglied tragen Sie die Zukunft des Sendesaals dauerhaft mit. Ab 60 € jährlich.",
    bullets: ["Exklusive Einladungen", "Mitgliederrabatte", "Mitgestaltung"],
    cta: "Zum Mitgliedsformular",
    href: "#mitglied",
    highlight: true,
    badge: "WIRKSAMSTER WEG",
  },
  {
    title: "Spenden",
    description:
      "Direkte finanzielle Unterstützung für Programm, Erhalt und Technik. Spendenquittung auf Wunsch.",
    bullets: ["IBAN sichtbar", "Gemeinnützig", "Steuerlich absetzbar"],
    cta: "Jetzt spenden",
    href: "#direkt-spenden",
  },
  {
    title: "Ehrenamtlich helfen",
    description:
      "Helfen Sie bei Konzerten, im Service oder in der Öffentlichkeitsarbeit. Über 50 Engagierte sind dabei.",
    bullets: ["Flexibel einteilbar", "Gemeinschaft", "Konzerterlebnisse"],
    cta: "Mitmachen",
    href: "/mieten#kontakt",
  },
  {
    title: "Firmenmitgliedschaft",
    description:
      "Verbinden Sie Ihr Unternehmen mit Kultur auf Weltklasse-Niveau. Sichtbarkeit und Networking.",
    bullets: ["Ticketkontingent", "Eventfläche", "Markenpräsenz"],
    cta: "Anfrage stellen",
    href: "/mieten#kontakt",
  },
];

const stats = [
  { value: "2006", label: "Gründungsjahr", dark: true },
  { value: "200+", label: "Mitglieder", dark: false },
  { value: "50+", label: "Ehrenamtliche", dark: false },
  { value: "18", label: "Jahre aktiv", dark: false },
];

const Unterstuetzen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    anfragetyp: "spenden",
    nachricht: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section – schwarz, ohne Bild */}
      <section className="relative h-[75vh] bg-black overflow-hidden flex items-center">
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05]"
          >
            Ein Saal
            <br />
            braucht Sie.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-start gap-4 max-w-2xl"
          >
            <div className="w-10 h-px bg-primary mt-3 flex-shrink-0" />
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed">
              Werden Sie Teil eines der bedeutendsten Konzertorte Deutschlands. Vier Wege,
              den Sendesaal zu unterstützen.
            </p>
          </motion.div>
        </div>

        {/* Concave white ellipse */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-48 rounded-[50%] bg-white" />
      </section>

      <main className="bg-white">
        {/* Vier Wege zu helfen */}
        <section className="pt-20 pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-black">Vier Wege zu helfen</h2>
              <div className="mt-4 flex items-center justify-center gap-6">
                <div className="w-10 h-px bg-primary" />
                <p className="text-black/70 text-lg md:text-xl font-light">
                  Jeder Beitrag zählt — egal ob Zeit, Geld oder Engagement.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
              {ways.map((way, index) => (
                <motion.div
                  key={way.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 flex flex-col h-full ${
                    way.highlight
                      ? "border-2 border-primary bg-white"
                      : "border border-black/10 bg-white"
                  }`}
                >
                  {way.badge && (
                    <span className="inline-block self-start bg-primary text-white text-[11px] font-bold tracking-wider px-3 py-1 mb-5">
                      {way.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-normal text-black mb-3">{way.title}</h3>
                  <p className="text-black/70 text-sm font-light leading-relaxed mb-6">
                    {way.description}
                  </p>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {way.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-black/80 font-light">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={way.href}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold transition-colors ${
                      way.highlight
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "border border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {way.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Direkt spenden — IBAN */}
        <section id="direkt-spenden" className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f4f4f2] p-10 md:p-16 max-w-[1200px] mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-px bg-primary" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-light text-black mb-6">Direkt spenden</h2>
                  <p className="text-black/70 text-base md:text-lg font-light leading-relaxed">
                    Jeder Beitrag hilft — einmalig oder regelmäßig. Spendenquittungen senden
                    wir auf Anfrage zu.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-8 py-2">
                  <dl className="space-y-5 font-light">
                    <div>
                      <dt className="text-[11px] tracking-wider text-black/50 uppercase mb-1">Empfänger</dt>
                      <dd className="text-black text-lg">Sendesaal Bremen e.V.</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-wider text-black/50 uppercase mb-1">IBAN</dt>
                      <dd className="text-black text-lg font-mono">DE00 0000 0000 0000 0000 00</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-wider text-black/50 uppercase mb-1">BIC</dt>
                      <dd className="text-black text-lg font-mono">XXXXDEXXX</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-wider text-black/50 uppercase mb-1">Verwendungszweck</dt>
                      <dd className="text-black text-base">
                        Spende Sendesaal + ggf. Adresse für Spendenquittung
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Förderverein + Stats */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-px bg-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
                  Förderverein Sendesaal e.V.
                </h2>
                <p className="text-black/70 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                  Seit 2006 erhalten Bürgerinnen und Bürger diesen einzigartigen Konzertort am
                  Leben — als gemeinnütziger Verein, getragen von Mitgliedern und Ehrenamt.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-10 text-center ${
                      stat.dark ? "bg-black text-white" : "bg-primary text-white"
                    }`}
                  >
                    <div className="text-5xl md:text-6xl font-light mb-2">{stat.value}</div>
                    <div className="text-sm font-light tracking-wide opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA – schwarzer Block */}
        <section className="bg-black py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-6 md:px-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Sie wollen mehr erfahren?
            </h2>
            <p className="text-white/70 text-base md:text-lg font-light max-w-2xl mx-auto mb-10">
              Wir beraten Sie gerne persönlich zu Mitgliedschaft, Spende oder Engagement im
              Sendesaal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 h-auto text-base"
              >
                <Link to="/mieten#kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 h-auto text-base"
              >
                <a href="#newsletter">Newsletter abonnieren</a>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer variant="light" sectionAbove="black" />
    </div>
  );
};

export default Unterstuetzen;