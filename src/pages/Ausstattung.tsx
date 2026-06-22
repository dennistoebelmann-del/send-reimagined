import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import { Button } from "@/components/ui/button";
import { allFacilities, hardFacts, techFacts, type FacilityFact } from "@/data/facilities";
import mietenHero from "@/assets/mieten-hero.jpg";

const FacilitySection = ({ fact, index }: { fact: FacilityFact; index: number }) => {
  const reverse = index % 2 === 1;
  return (
    <section id={fact.slug} className="scroll-mt-24 pb-24 md:pb-32">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={reverse ? "order-1 lg:order-2" : ""}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-primary" />
              <span className="text-primary text-xs font-light uppercase tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </span>
              <fact.icon className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">{fact.title}</h2>
            <p className="text-black/80 text-base md:text-lg font-light leading-relaxed">
              {fact.description}
            </p>
            <ul className="mt-6 space-y-3">
              {fact.details.map((d) => (
                <li key={d} className="flex gap-3 text-black/80 font-light">
                  <span className="text-primary mt-1">—</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={reverse ? "order-2 lg:order-1" : ""}
          >
            <div className="overflow-hidden">
              <img
                src={fact.image}
                alt={fact.title}
                className="w-full h-[320px] md:h-[400px] object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {fact.gallery.map((g) => (
                <div key={g.label} className="group relative aspect-square overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
                  <span className="absolute bottom-1.5 left-2 right-2 text-white text-[10px] font-light uppercase tracking-wide truncate">
                    {g.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Ausstattung = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const t = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
      return () => window.clearTimeout(t);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src={mietenHero}
          alt="Sendesaal Bremen – Ausstattung & Technik"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-light"
          >
            Ausstattung &amp; Technik
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 bg-black px-4 py-2 inline-flex"
          >
            <span className="text-white text-lg md:text-xl font-light">
              Alles, was Sie über Equipment, Instrumente und Räumlichkeiten wissen müssen.
            </span>
          </motion.div>
        </div>

        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-48 rounded-[50%] bg-white" />
      </section>

      <main className="bg-white pt-16">
        {/* Sprungmarken */}
        <section className="pb-16">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3">
              {allFacilities.map((f) => (
                <a
                  key={f.slug}
                  href={`#${f.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-light text-black/70 hover:text-primary border-b border-transparent hover:border-primary pb-1 transition-colors"
                >
                  <f.icon className="w-4 h-4" />
                  {f.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Mieten-Block */}
        <section className="pb-8">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-[700px] mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-light text-black">Räumlichkeiten &amp; Equipment</h2>
              <div className="mt-4 flex items-center justify-center gap-6">
                <div className="w-10 h-px bg-primary" />
                <p className="text-black/70 text-base md:text-lg font-light">Für Konzerte, Tagungen &amp; Events</p>
              </div>
            </motion.div>
          </div>
        </section>

        {hardFacts.map((fact, i) => (
          <FacilitySection key={fact.slug} fact={fact} index={i} />
        ))}

        <OrangeBarsTransition />

        {/* Produzieren-Block */}
        <section className="pt-20 pb-8">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-[700px] mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-light text-black">Studio &amp; Produktion</h2>
              <div className="mt-4 flex items-center justify-center gap-6">
                <div className="w-10 h-px bg-primary" />
                <p className="text-black/70 text-base md:text-lg font-light">Für Aufnahmen auf höchstem Niveau</p>
              </div>
            </motion.div>
          </div>
        </section>

        {techFacts.map((fact, i) => (
          <FacilitySection key={fact.slug} fact={fact} index={hardFacts.length + i} />
        ))}

        <OrangeBarsTransition />

        {/* CTA */}
        <section className="bg-black pt-20 pb-24 md:pt-28 md:pb-28">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light text-white">
                Bereit für Ihr Projekt im Sendesaal?
              </h2>
              <p className="mt-6 text-white/70 text-lg font-light">
                Sprechen Sie mit uns – wir beraten Sie individuell zu Veranstaltung oder Produktion.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-[52px] px-16 text-base"
                >
                  <Link to="/mieten#kontakt">
                    Raum anfragen <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent hover:bg-white hover:text-black text-white border-white font-bold px-8 py-5 h-auto text-base"
                >
                  <Link to="/produzieren#kontakt">
                    Produktion planen <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" sectionAbove="black" />
    </div>
  );
};

export default Ausstattung;