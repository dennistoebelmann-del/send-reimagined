import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import produktionHero from "@/assets/produktion-hero.jpg";

const ProduktionSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={produktionHero} 
          alt="Sendesaal Produktion" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 md:py-32 flex items-center min-h-[70vh]">
        <div className="ml-auto w-full lg:w-1/2 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Produktion
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight">
              Sendesaal<br />Productions
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Der Sendesaal Bremen steht für höchste Aufnahmequalität und künstlerische Exzellenz. 
              Professionelle Musikproduktionen, Live-Mitschnitte und Studioaufnahmen in einer 
              einzigartigen akustischen Umgebung.
            </p>
            
            <Link to="/ueber-uns#akustik">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 transition-colors duration-300 mt-4"
              >
                Weitere Informationen
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProduktionSection;
