import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";

const LeitbildSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">
              Leitbild
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
              Exzellenz &<br />Offenheit
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Der Sendesaal Bremen ist ein Ort künstlerischer Exzellenz, Neugier 
              und Offenheit. Er wurzelt in einer langen Tradition herausragender 
              Musik – von feinster Klassik über wegweisenden Jazz bis hin zu allen 
              Facetten der Weltmusik.
            </p>
            
            <Link 
              to="/ueber-uns" 
              className="inline-block text-foreground font-semibold uppercase tracking-wider text-sm border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300"
            >
              Mehr über uns
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={aboutHero} 
                alt="Sendesaal Bremen Interior" 
                className="w-full h-full object-cover grayscale"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeitbildSection;
