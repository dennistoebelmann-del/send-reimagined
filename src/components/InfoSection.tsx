import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Different parallax speeds for each image
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]); // Slow
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]); // Medium
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);   // Slower
  const y4 = useTransform(scrollYProgress, [0, 1], [200, -200]); // Fast
  const y5 = useTransform(scrollYProgress, [0, 1], [60, -60]);   // Very slow
  const y6 = useTransform(scrollYProgress, [0, 1], [120, -120]); // Medium-slow
  const y7 = useTransform(scrollYProgress, [0, 1], [180, -180]); // Medium-fast
  const y8 = useTransform(scrollYProgress, [0, 1], [90, -90]);   // Slow

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30 overflow-hidden">
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

        {/* Asymmetrical Collage Layout with Parallax */}
        <div className="relative h-[700px] md:h-[850px] lg:h-[950px] -mx-6 md:-mx-12 lg:-mx-24">
          
          {/* Hero Image - Orchestra (Background Layer, Center) */}
          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-[8%] left-[10%] w-[75%] md:w-[65%] h-[50%] z-0"
          >
            <img 
              src={orchestraImg} 
              alt="Orchester im Sendesaal Bremen" 
              className="w-full h-full object-cover shadow-2xl"
            />
          </motion.div>

          {/* Saxophone - Top Right */}
          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-[3%] right-[3%] md:right-[5%] w-[32%] md:w-[20%] h-[32%] z-20"
          >
            <img 
              src={saxophoneImg} 
              alt="Saxophon Detail" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Cello - Center Right, overlapping orchestra */}
          <motion.div 
            style={{ y: y3 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-[28%] right-[8%] md:right-[12%] w-[28%] md:w-[18%] h-[38%] z-10"
          >
            <img 
              src={celloImg} 
              alt="Cello Detail" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Piano - Left side, breaking boundary */}
          <motion.div 
            style={{ y: y4 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-[45%] left-[-5%] w-[42%] md:w-[32%] h-[28%] z-20"
          >
            <img 
              src={pianoImg} 
              alt="Klaviertasten" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Experimental - Right side, breaking boundary */}
          <motion.div 
            style={{ y: y5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-[55%] right-[-6%] w-[38%] md:w-[28%] h-[30%] z-30"
          >
            <img 
              src={experimentalImg} 
              alt="Experimentelle Musik Performance" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Violin Detail - Top center */}
          <motion.div 
            style={{ y: y6 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[0%] left-[38%] md:left-[42%] w-[18%] md:w-[14%] h-[22%] z-30"
          >
            <img 
              src={violinImg} 
              alt="Violine Detail" 
              className="w-full h-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Drums - Bottom center-left */}
          <motion.div 
            style={{ y: y7 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute bottom-[8%] left-[20%] md:left-[25%] w-[26%] md:w-[18%] h-[28%] z-20"
          >
            <img 
              src={drumsImg} 
              alt="Schlagzeug" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Audience - Bottom center-right */}
          <motion.div 
            style={{ y: y8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-[2%] right-[15%] md:right-[20%] w-[48%] md:w-[38%] h-[25%] z-10"
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
