import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import aboutHero from "@/assets/ueber-uns-hero.jpg";

const sections = [
  { id: "historie", label: "Historie" },
  { id: "team", label: "Team" },
  { id: "verein", label: "Der Verein" },
  { id: "partner", label: "Partner" },
];

const timelineEvents = [
  {
    year: "1952", title: "Gründung", side: "left",
    description: "Radio Bremen errichtet den Sendesaal als\nmodernsten Rundfunksaal der Welt.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop",
    details: "1952 errichtete Radio Bremen den Sendesaal als seinerzeit modernsten Rundfunksaal der Welt. Architektur und Akustik wurden gemeinsam mit führenden Tonmeistern entwickelt, um optimale Bedingungen für Musikaufnahmen und Live-Übertragungen zu schaffen. Schon kurz nach der Eröffnung galt der Saal international als Referenz für Aufnahmequalität.",
  },
  {
    year: "1962", title: "Goldene Ära", side: "right",
    description: "Internationale Künstler entdecken die einzigartige\nAkustik für Aufnahmen.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&h=800&fit=crop",
    details: "In den 1960er Jahren wurde der Sendesaal zu einem Sehnsuchtsort der internationalen Klassik- und Jazzszene. Solisten und Ensembles aus aller Welt reisten an, um die einzigartige Akustik für ihre Aufnahmen zu nutzen. Viele dieser Einspielungen prägen bis heute den Klangkanon des 20. Jahrhunderts.",
  },
  {
    year: "1999", title: "Wendepunkt", side: "left",
    description: "Radio Bremen gibt den Saal auf.\nDie Zukunft ist ungewiss.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
    details: "Wirtschaftliche Zwänge führten Ende der 1990er Jahre dazu, dass Radio Bremen den Sendesaal aufgeben musste. Plötzlich stand das einzigartige Kulturdenkmal vor einer unsicheren Zukunft – Abriss und Umnutzung wurden ernsthaft diskutiert.",
  },
  {
    year: "2006", title: "Rettung", side: "right",
    description: "Engagierte Bürger gründen den Förderverein\nzur Erhaltung.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop",
    details: "Eine Initiative engagierter Bremer Bürger gründete 2006 den Förderverein Sendesaal e.V. Ziel war und ist es, den Saal als lebendigen Konzertort zu erhalten und seine architektonische sowie akustische Einzigartigkeit für kommende Generationen zu bewahren.",
  },
  {
    year: "2010", title: "Wiedereröffnung", side: "left",
    description: "Der Sendesaal öffnet als unabhängiger\nKonzertsaal seine Türen.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=800&fit=crop",
    details: "Nach umfangreichen Sanierungs- und Umbauarbeiten öffnete der Sendesaal 2010 als unabhängiger Konzertsaal seine Türen. Damit begann ein neues Kapitel: Konzerte, Aufnahmen und Veranstaltungen unter eigener Regie – getragen von einem breiten zivilgesellschaftlichen Engagement.",
  },
  {
    year: "Heute", title: "Lebendiges Denkmal", side: "right",
    description: "Über 100 Konzerte jährlich machen den Saal\nzu einem kulturellem Zentrum.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&h=800&fit=crop",
    details: "Heute finden im Sendesaal über 100 Konzerte pro Jahr statt – von Klassik über Jazz bis zu zeitgenössischer Musik. Der Saal ist zugleich Aufnahmeort, Konzerthaus und kulturelles Zentrum und damit ein lebendiges Denkmal in der Bremer Kulturlandschaft.",
  },
];

const teamMembers = [
  { name: "Dr. Klaus Bernbacher", role: "Künstlerischer Leiter", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Sabine Mertens", role: "Geschäftsführung", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Thomas Weber", role: "Technische Leitung", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Anna Schulz", role: "Marketing & Presse", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "Michael Koch", role: "Veranstaltungsmanagement", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { name: "Lisa Braun", role: "Ehrenamtskoordination", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" },
];

const UeberUns = () => {
  const [activeSection, setActiveSection] = useState("historie");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "Unterstützung Sendesaal",
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + timelineEvents.length) % timelineEvents.length));
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % timelineEvents.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src={aboutHero}
          alt="Sendesaal Bremen Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-light"
          >
            Mehr als nur ein Saal.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 bg-black px-4 py-2 inline-flex"
          >
            <span className="text-white text-lg md:text-xl font-light">
              Ein Weltklasse-Studio. Ein lebendiges Denkmal. Ein Zuhause für die Musik.
            </span>
          </motion.div>
        </div>

        {/* Concave white ellipse */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-48 rounded-[50%] bg-white" />
      </section>

      {/* Sticky Sub-Navigation - Floating Pill */}
      <div className="sticky top-24 z-40 flex justify-center px-4">
        <nav className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-neutral-200 px-2 py-2 transition-all duration-300">
          <div className="flex items-center gap-1 md:gap-6 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 md:px-5 py-2 text-sm md:text-base whitespace-nowrap rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "font-bold text-black"
                    : "font-normal text-black/70 hover:text-black"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Content Sections */}
      <main className="bg-white">

        {/* Historie Section */}
        <section id="historie" className="pt-16 pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <SectionHeader title="Historie" subtitle="Sieben Jahrzehnte Musikgeschichte in einem Raum." />

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto mt-16">
              {/* Vertical center line */}
              <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-black" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative mb-16 last:mb-0"
                >
                  {/* Horizontal orange connector line */}
                  <div
                    className={`absolute top-[38px] w-10 h-px bg-primary ${
                      event.side === "left" ? "right-1/2 mr-0" : "left-1/2 ml-0"
                    }`}
                    style={event.side === "left" ? { right: "50%"} : { left: "50%" }}
                  />

                  {event.side === "left" ? (
                    <div className="flex">
                      <div className="w-1/2 pr-12 text-right">
                        <div className="inline-block bg-black px-3 py-1 mb-3">
                          <span className="text-white text-lg font-bold">{event.year}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-normal text-black">{event.title}</h3>
                        <p className="text-black text-base mt-2 whitespace-pre-line">{event.description}</p>
                        <button
                          onClick={() => setOpenIndex(index)}
                          className="mt-3 inline-flex items-center gap-1 text-sm font-normal text-black border-b border-primary hover:text-primary transition-colors"
                        >
                          Details
                          <ChevronRight size={14} />
                        </button>
                      </div>
                      <div className="w-1/2" />
                    </div>
                  ) : (
                    <div className="flex">
                      <div className="w-1/2" />
                      <div className="w-1/2 pl-12 text-left">
                        <div className="inline-block bg-black px-3 py-1 mb-3">
                          <span className="text-white text-lg font-bold">{event.year}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-normal text-black">{event.title}</h3>
                        <p className="text-black text-base mt-2 whitespace-pre-line">{event.description}</p>
                        <button
                          onClick={() => setOpenIndex(index)}
                          className="mt-3 inline-flex items-center gap-1 text-sm font-normal text-black border-b border-primary hover:text-primary transition-colors"
                        >
                          Details
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OrangeBars before Team */}
        <OrangeBarsTransition />

        {/* Team Section */}
        <section id="team" className="pt-20 pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <SectionHeader title="Das Team" subtitle="Menschen, die den Sendesaal mit Leben füllen." />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto mt-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col"
                >
                  <div className="aspect-square overflow-hidden bg-stone-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-black px-4 py-5">
                    <h3 className="text-white text-xl md:text-2xl font-normal">{member.name}</h3>
                    <p className="text-white text-base md:text-lg mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Der Verein Section */}
        <section id="verein" className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-px bg-primary" />
                  <h2 className="text-4xl md:text-5xl font-normal text-black">Der Verein</h2>
                </div>
                <p className="text-black text-base leading-relaxed max-w-[480px]">
                  Der Sendesaal e.V. wurde 2006 von engagierten Bürgern gegründet, um dieses 
                  einzigartige Kulturdenkmal zu erhalten und als lebendigen Konzertort zu bewahren.
                </p>
                <p className="mt-4 text-black text-base leading-relaxed max-w-[480px]">
                  Als gemeinnütziger Verein finanzieren wir uns durch Mitgliedsbeiträge, Spenden, 
                  Fördergelder und Einnahmen aus dem Konzertbetrieb. Über 50 ehrenamtliche Helfer 
                  ermöglichen den Betrieb des Saals.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="w-28 h-24 bg-primary flex flex-col items-center justify-center">
                    <span className="text-primary-foreground text-3xl font-bold">200+</span>
                    <span className="text-primary-foreground text-sm">Mitglieder</span>
                  </div>
                  <div className="w-28 h-24 bg-primary flex flex-col items-center justify-center">
                    <span className="text-primary-foreground text-3xl font-bold">50+</span>
                    <span className="text-primary-foreground text-sm">Ehrenamtliche</span>
                  </div>
                  <div className="w-28 h-24 bg-primary flex flex-col items-center justify-center">
                    <span className="text-primary-foreground text-3xl font-bold">18</span>
                    <span className="text-primary-foreground text-sm">Jahre aktiv</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
                  alt="Vereinsmitglieder"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-black w-28 h-24 flex flex-col items-center justify-center">
                  <span className="text-white text-3xl font-bold">2006</span>
                  <span className="text-white text-sm">Gründungsjahr</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OrangeBars before Partner */}
        <OrangeBarsTransition />

        {/* Partner Section */}
        <section id="partner" className="pt-20 pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <SectionHeader title="Partner & Förderer" subtitle="Gemeinsam für die Kultur" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1100px] mx-auto mt-12">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full h-40 bg-gray-200 flex items-center justify-center"
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 max-w-[780px] mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  Möchten Sie den Sendesaal unterstützen?
                </h2>
                <div className="mt-4 flex items-center justify-center gap-6">
                  <div className="w-10 h-px bg-primary" />
                  <p className="text-muted-foreground text-lg md:text-xl font-light">
                    Schreiben Sie uns – wir freuen uns auf Ihre Nachricht
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground mb-3">Vielen Dank!</h3>
                  <p className="text-muted-foreground font-light">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/80 font-light text-sm">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        maxLength={100}
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-muted border-border text-foreground font-light h-12 placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/80 font-light text-sm">E-Mail</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        maxLength={255}
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-muted border-border text-foreground font-light h-12 placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="betreff" className="text-foreground/80 font-light text-sm">Betreff</Label>
                      <Input
                        id="betreff"
                        type="text"
                        required
                        maxLength={200}
                        aria-required="true"
                        value={formData.betreff}
                        onChange={(e) => setFormData({ ...formData, betreff: e.target.value })}
                        className="bg-muted border-border text-foreground font-light h-12 placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary"
                        placeholder="Betreff Ihrer Anfrage"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="anfragetyp" className="text-foreground/80 font-light text-sm">Anfragetyp</Label>
                      <Select
                        value={formData.anfragetyp}
                        onValueChange={(value) => setFormData({ ...formData, anfragetyp: value })}
                      >
                        <SelectTrigger className="bg-muted border-border text-foreground font-light h-12 focus:ring-primary">
                          <SelectValue placeholder="Bitte wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spenden">Spenden / Unterstützen</SelectItem>
                          <SelectItem value="mieten">Mieten</SelectItem>
                          <SelectItem value="produzieren">Produzieren</SelectItem>
                          <SelectItem value="feedback">Anregung, Feedback, Kritik</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nachricht" className="text-foreground/80 font-light text-sm">Nachricht</Label>
                    <Textarea
                      id="nachricht"
                      required
                      maxLength={2000}
                      rows={6}
                      aria-required="true"
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                      className="bg-muted border-border text-foreground font-light placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary resize-none"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 h-auto text-base mt-2"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Absenden"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer variant="dark" />

      {/* Timeline Details Drawer */}
      <AnimatePresence>
        {openIndex !== null && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpenIndex(null)}
              className="fixed inset-0 bg-black/50 z-[100]"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-screen w-full md:w-[640px] lg:w-[720px] bg-white z-[101] shadow-2xl flex flex-col"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-black/10 shrink-0">
                <div className="inline-flex items-center gap-3">
                  <div className="bg-black px-3 py-1">
                    <span className="text-white text-base font-bold">{timelineEvents[openIndex].year}</span>
                  </div>
                  <span className="text-sm text-black/60">
                    {openIndex + 1} / {timelineEvents.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + timelineEvents.length) % timelineEvents.length))}
                    aria-label="Vorheriges Ereignis"
                    className="w-10 h-10 flex items-center justify-center border border-black/20 hover:bg-black hover:text-white text-black transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % timelineEvents.length))}
                    aria-label="Nächstes Ereignis"
                    className="w-10 h-10 flex items-center justify-center border border-black/20 hover:bg-black hover:text-white text-black transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <button
                    onClick={() => setOpenIndex(null)}
                    aria-label="Schließen"
                    className="w-10 h-10 flex items-center justify-center border border-black/20 hover:bg-primary hover:text-primary-foreground hover:border-primary text-black transition-colors ml-1"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={openIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 md:px-10 py-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-light text-black leading-tight">
                      {timelineEvents[openIndex].title}
                    </h2>
                    <div className="mt-6 aspect-[16/10] w-full overflow-hidden bg-stone-200">
                      <img
                        src={timelineEvents[openIndex].image}
                        alt={timelineEvents[openIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-8 text-black text-base md:text-lg leading-relaxed">
                      {timelineEvents[openIndex].details}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

/* Reusable section header with orange bars icon + title + subtitle */
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <h2 className="text-4xl md:text-5xl font-normal text-black">{title}</h2>
    <div className="mt-4 flex items-center justify-center gap-6">
      <div className="w-10 h-px bg-primary" />
      <p className="text-black text-lg md:text-xl">{subtitle}</p>
    </div>
  </motion.div>
);

export default UeberUns;
