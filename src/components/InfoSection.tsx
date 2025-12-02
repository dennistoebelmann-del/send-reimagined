import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Import collage images
import orchestraImg from "@/assets/collage-orchestra.jpg";
import saxophoneImg from "@/assets/collage-saxophone.jpg";
import celloImg from "@/assets/collage-cello.jpg";
import pianoImg from "@/assets/collage-piano.jpg";
import experimentalImg from "@/assets/collage-experimental.jpg";
import violinImg from "@/assets/collage-violin.jpg";
import drumsImg from "@/assets/collage-drums.jpg";
import audienceImg from "@/assets/collage-audience.jpg";

const InfoSection = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
            Vielfalt erleben
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Von Klassik über Jazz bis zur Neuen Musik – entdecken Sie die ganze Bandbreite 
            musikalischer Exzellenz im Sendesaal Bremen.
          </p>
        </div>

        {/* Asymmetrical Collage Layout */}
        <div className="relative h-[800px] md:h-[900px] lg:h-[1000px] -mx-6 md:-mx-12 lg:-mx-24">
          
          {/* Hero Image - Orchestra (Background Layer) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-[10%] left-[5%] w-[70%] md:w-[60%] h-[45%] z-0"
          >
            <img 
              src={orchestraImg} 
              alt="Orchester im Sendesaal Bremen" 
              className="w-full h-full object-cover shadow-2xl"
            />
          </motion.div>

          {/* Saxophone - Jazz (Floating, Front Layer Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-[5%] right-[2%] md:right-[8%] w-[35%] md:w-[22%] h-[30%] z-20"
          >
            <img 
              src={saxophoneImg} 
              alt="Saxophon Detail - Jazz" 
              className="w-full h-full object-cover shadow-xl"
            />
            <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-white/80 bg-black/50 px-2 py-1">
              Jazz
            </span>
          </motion.div>

          {/* Cello - Classical (Overlapping Orchestra) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-[35%] right-[15%] md:right-[25%] w-[30%] md:w-[20%] h-[35%] z-10"
          >
            <img 
              src={celloImg} 
              alt="Cello Detail - Klassik" 
              className="w-full h-full object-cover shadow-xl"
            />
            <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-white/80 bg-black/50 px-2 py-1">
              Klassik
            </span>
          </motion.div>

          {/* Piano - Horizontal (Middle Layer) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-[50%] left-[-3%] w-[45%] md:w-[35%] h-[25%] z-20"
          >
            <img 
              src={pianoImg} 
              alt="Klaviertasten - Klassik" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Experimental - Colored lighting (Right side, breaking boundary) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-[38%] right-[-5%] w-[40%] md:w-[30%] h-[28%] z-30"
          >
            <img 
              src={experimentalImg} 
              alt="Experimentelle Musik Performance" 
              className="w-full h-full object-cover shadow-xl"
            />
            <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-white/80 bg-black/50 px-2 py-1">
              Neue Musik
            </span>
          </motion.div>

          {/* Violin Detail (Small, floating) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[2%] left-[35%] md:left-[45%] w-[20%] md:w-[12%] h-[20%] z-30"
          >
            <img 
              src={violinImg} 
              alt="Violine Detail" 
              className="w-full h-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Drums - Jazz (Bottom left, breaking boundary) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute bottom-[15%] left-[10%] w-[28%] md:w-[20%] h-[25%] z-20"
          >
            <img 
              src={drumsImg} 
              alt="Schlagzeug - Jazz" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Audience - Atmosphere (Bottom, wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-[5%] right-[5%] w-[55%] md:w-[45%] h-[22%] z-10"
          >
            <img 
              src={audienceImg} 
              alt="Publikum im Konzertsaal" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="font-bold uppercase tracking-wide text-base px-10 py-6 h-auto">
            Über den Sendesaal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
