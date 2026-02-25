import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import aboutHero from "@/assets/ueber-uns-hero.jpg";

const sections = [
  { id: "historie", label: "Historie" },
  { id: "team", label: "Team" },
  { id: "verein", label: "Der Verein" },
  { id: "akustik", label: "Akustik & Technik" },
  { id: "partner", label: "Partner" },
];

const timelineEvents = [
  { year: "1952", title: "Gründung", description: "Radio Bremen errichtet den Sendesaal als\nmodernsten Rundfunksaal der Welt.", side: "left" },
  { year: "1962", title: "Goldene Ära", description: "Internationale Künstler entdecken die einzigartige\nAkustik für Aufnahmen.", side: "right" },
  { year: "1999", title: "Wendepunkt", description: "Radio Bremen gibt den Saal auf.\nDie Zukunft ist ungewiss.", side: "left" },
  { year: "2006", title: "Rettung", description: "Engagierte Bürger gründen den Förderverein\nzur Erhaltung.", side: "right" },
  { year: "2010", title: "Wiedereröffnung", description: "Der Sendesaal öffnet als unabhängiger\nKonzertsaal seine Türen.", side: "left" },
  { year: "Heute", title: "Lebendiges Denkmal", description: "Über 100 Konzerte jährlich machen den Saal\nzu einem kulturellem Zentrum.", side: "right" },
];

const teamMembers = [
  { name: "Dr. Klaus Bernbacher", role: "Künstlerischer Leiter", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Sabine Mertens", role: "Geschäftsführung", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Thomas Weber", role: "Technische Leitung", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Anna Schulz", role: "Marketing & Presse", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "Michael Koch", role: "Veranstaltungsmanagement", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { name: "Lisa Braun", role: "Ehrenamtskoordination", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" },
];

const acousticStats = [
  { value: "1,8", unit: "Sek", label: "Nachhallzeit" },
  { value: "340", unit: "m²", label: "Saalfläche" },
  { value: "270", unit: "", label: "Sitzplätze" },
  { value: "12", unit: "m", label: "Deckenhöhe" },
];

const UeberUns = () => {
  const [activeSection, setActiveSection] = useState("historie");

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
                  <div className="w-28 h-24 bg-[#CF3D11] flex flex-col items-center justify-center">
                    <span className="text-white text-3xl font-bold">200+</span>
                    <span className="text-white text-sm">Mitglieder</span>
                  </div>
                  <div className="w-28 h-24 bg-[#CF3D11] flex flex-col items-center justify-center">
                    <span className="text-white text-3xl font-bold">50+</span>
                    <span className="text-white text-sm">Ehrenamtliche</span>
                  </div>
                  <div className="w-28 h-24 bg-[#CF3D11] flex flex-col items-center justify-center">
                    <span className="text-white text-3xl font-bold">18</span>
                    <span className="text-white text-sm">Jahre aktiv</span>
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

        {/* OrangeBars before Akustik */}
        <OrangeBarsTransition />

        {/* Akustik Section */}
        <section id="akustik" className="bg-gray-200">
          <div className="pt-20 pb-24 md:pb-32">
            <div className="container mx-auto px-6">
              <SectionHeader title="Akustik & Technik" subtitle="Eine der besten Akustiken Deutschlands – seit 1952" />

              {/* Stats with decorative swooping lines */}
              <div className="relative max-w-[1100px] mx-auto mt-12">
                {/* Swooping orange lines - full width */}
                <svg className="absolute pointer-events-none" viewBox="0 0 1600 280" preserveAspectRatio="none" style={{ top: "-50px", bottom: "-50px", left: "50%", transform: "translateX(-50%)", width: "100vw", height: "calc(100% + 100px)", position: "absolute" }}>
                  {[
                    "M0,30 Q400,240 800,120 Q1200,0 1600,200",
                    "M0,70 Q500,270 800,100 Q1100,-40 1600,170",
                    "M0,200 Q300,-10 800,160 Q1300,300 1600,70",
                    "M0,250 Q450,40 800,180 Q1150,300 1600,110",
                    "M0,140 Q350,280 800,140 Q1250,0 1600,140",
                  ].map((d, i) => (
                    <motion.path
                      key={i}
                      d={d}
                      stroke="hsl(25, 98%, 46%)"
                      strokeWidth="1.2"
                      fill="none"
                      opacity="0.6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1.8, delay: i * 0.2, ease: "easeInOut" }}
                    />
                  ))}
                </svg>

                <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                  {acousticStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-black w-full h-28 flex flex-col items-center justify-center"
                    >
                      <div className="flex items-baseline gap-1">
                        <span className="text-white text-3xl md:text-4xl font-bold">{stat.value}</span>
                        {stat.unit && (
                          <span className="text-white text-base md:text-lg font-normal">{stat.unit}</span>
                        )}
                      </div>
                      <p className="text-white text-xs mt-1.5">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-[700px] mx-auto text-center mt-16"
              >
                <p className="text-black text-base leading-relaxed">
                  Die einzigartige Akustik des Sendesaals entsteht durch die charakteristischen 
                  Holzlamellen an den Wänden und die sorgfältig berechneten Raumproportionen. 
                  Der Nachhall von 1,8 Sekunden ist ideal für klassische Musik und Jazz – 
                  nicht zu trocken, nicht zu hallig.
                </p>
                <p className="mt-4 text-black text-base leading-relaxed">
                  Modernste Aufnahmetechnik ermöglicht Produktionen auf höchstem Niveau. 
                  Zahlreiche preisgekrönte Alben wurden hier eingespielt.
                </p>
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
              className="mt-12 text-center"
            >
              <p className="text-black text-base mb-6">
                Möchten Sie den Sendesaal unterstützen?
              </p>
              <a
                href="mailto:info@sendesaal.de"
                className="inline-flex items-center gap-2 bg-[#CF3D11] text-white px-16 py-4 font-bold text-base hover:bg-[#CF3D11]/90 transition-colors"
              >
                Kontakt aufnehmen
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
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
