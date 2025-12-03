import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";

const sections = [
  { id: "historie", label: "Historie" },
  { id: "team", label: "Team" },
  { id: "verein", label: "Der Verein" },
  { id: "akustik", label: "Akustik & Technik" },
  { id: "partner", label: "Partner" },
];

const timelineEvents = [
  { year: "1952", title: "Gründung", description: "Radio Bremen errichtet den Sendesaal als modernsten Rundfunksaal Europas." },
  { year: "1962", title: "Goldene Ära", description: "Internationale Künstler entdecken die einzigartige Akustik für Aufnahmen." },
  { year: "1999", title: "Wendepunkt", description: "Radio Bremen gibt den Saal auf. Die Zukunft ist ungewiss." },
  { year: "2006", title: "Rettung", description: "Engagierte Bürger gründen den Förderverein zur Erhaltung." },
  { year: "2010", title: "Wiedereröffnung", description: "Der Sendesaal öffnet als unabhängiger Konzertsaal seine Türen." },
  { year: "Heute", title: "Lebendiges Denkmal", description: "Über 100 Konzerte jährlich machen den Saal zu einem kulturellen Zentrum." },
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

const partners = [
  { name: "Radio Bremen", logo: "https://via.placeholder.com/200x80?text=Radio+Bremen" },
  { name: "Sparkasse Bremen", logo: "https://via.placeholder.com/200x80?text=Sparkasse" },
  { name: "Die Senatorin für Kultur", logo: "https://via.placeholder.com/200x80?text=Kultursenatorin" },
  { name: "WFB Bremen", logo: "https://via.placeholder.com/200x80?text=WFB" },
  { name: "Karin und Uwe Hollweg Stiftung", logo: "https://via.placeholder.com/200x80?text=Hollweg+Stiftung" },
  { name: "Waldemar Koch Stiftung", logo: "https://via.placeholder.com/200x80?text=Koch+Stiftung" },
];

const UeberUns = () => {
  const [activeSection, setActiveSection] = useState("historie");
  const [isSubNavSticky, setIsSubNavSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const subNavRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (subNavRef.current) {
        const subNavTop = subNavRef.current.getBoundingClientRect().top;
        setIsSubNavSticky(subNavTop <= 80);
      }

      // Update active section based on scroll position
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
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img
            src={aboutHero}
            alt="Sendesaal Bremen Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight"
          >
            Mehr als nur
            <br />
            ein Saal.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl font-light italic"
          >
            Ein Weltklasse-Studio. Ein lebendiges Denkmal. Ein Zuhause für die Musik.
          </motion.p>
        </motion.div>

        {/* Concave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-16 block"
            fill="none"
          >
            <path
              d="M0 0 L0 60 L1440 60 L1440 0 Q1080 40 720 40 Q360 40 0 0 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Sticky Sub-Navigation */}
      <div
        ref={subNavRef}
        className={`sticky top-20 z-40 transition-all duration-300 ${
          isSubNavSticky ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 md:gap-8 py-4 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wide whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-black"
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
        <section id="historie" className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Historie
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Sieben Jahrzehnte Musikgeschichte in einem Raum
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <span className="text-primary font-black text-2xl">{event.year}</span>
                    <h3 className="text-xl font-bold text-black mt-1">{event.title}</h3>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Das Team
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Menschen, die den Sendesaal mit Leben füllen
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Sound wave overlay on hover */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <svg
                        className="w-24 h-24 text-white"
                        viewBox="0 0 100 50"
                        fill="none"
                      >
                        {[...Array(9)].map((_, i) => (
                          <motion.rect
                            key={i}
                            x={10 + i * 10}
                            width="4"
                            rx="2"
                            fill="currentColor"
                            initial={{ height: 10, y: 20 }}
                            animate={{
                              height: [10, 30 + Math.random() * 15, 10],
                              y: [20, 10 - Math.random() * 7, 20],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-black">{member.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Verein Section */}
        <section id="verein" className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                  Der Verein
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Der Sendesaal e.V. wurde 2006 von engagierten Bürgern gegründet, um dieses 
                  einzigartige Kulturdenkmal zu erhalten und als lebendigen Konzertort zu bewahren.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Als gemeinnütziger Verein finanzieren wir uns durch Mitgliedsbeiträge, Spenden, 
                  Fördergelder und Einnahmen aus dem Konzertbetrieb. Über 50 ehrenamtliche Helfer 
                  ermöglichen den Betrieb des Saals.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="bg-gray-100 px-6 py-4 rounded-lg text-center">
                    <span className="block text-3xl font-black text-primary">200+</span>
                    <span className="text-sm text-gray-600">Mitglieder</span>
                  </div>
                  <div className="bg-gray-100 px-6 py-4 rounded-lg text-center">
                    <span className="block text-3xl font-black text-primary">50+</span>
                    <span className="text-sm text-gray-600">Ehrenamtliche</span>
                  </div>
                  <div className="bg-gray-100 px-6 py-4 rounded-lg text-center">
                    <span className="block text-3xl font-black text-primary">18</span>
                    <span className="text-sm text-gray-600">Jahre aktiv</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
                    alt="Vereinsmitglieder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg">
                  <span className="block text-4xl font-black">2006</span>
                  <span className="text-sm">Gründungsjahr</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Akustik Section */}
        <section id="akustik" className="py-24 md:py-32 bg-black text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                Akustik & Technik
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Eine der besten Akustiken Deutschlands – seit 1952 unverändert
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {acousticStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="text-5xl md:text-7xl font-black text-primary">
                    {stat.value}
                  </span>
                  <span className="text-2xl md:text-3xl font-light text-white/70">
                    {stat.unit}
                  </span>
                  <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-gray-300 leading-relaxed">
                Die einzigartige Akustik des Sendesaals entsteht durch die charakteristischen 
                Holzlamellen an den Wänden und die sorgfältig berechneten Raumproportionen. 
                Der Nachhall von 1,8 Sekunden ist ideal für klassische Musik und Jazz – 
                nicht zu trocken, nicht zu hallig.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Modernste Aufnahmetechnik ermöglicht Produktionen auf höchstem Niveau. 
                Zahlreiche preisgekrönte Alben wurden hier eingespielt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partner Section */}
        <section id="partner" className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Partner & Förderer
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Gemeinsam für die Kultur
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-gray-600 mb-6">
                Möchten Sie den Sendesaal unterstützen?
              </p>
              <a
                href="mailto:info@sendesaal.de"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-primary/90 transition-colors"
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

export default UeberUns;
