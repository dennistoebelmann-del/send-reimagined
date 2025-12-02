import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) * 0.03);
        mouseY.set((e.clientY - centerY) * 0.03);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const lines = ["musik.", "live.", "erleben."];

  return (
    <section className="relative h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content - Left Aligned like Bimhuis */}
      <div className="relative z-10 container mx-auto px-6">
        <div ref={containerRef} className="max-w-5xl">
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black mb-12 leading-[0.85] tracking-tighter uppercase">
            {lines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileHover={{
                  x: 20,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{
                  x: useTransform(x, (value) => value * (index + 1) * 0.3),
                  y: useTransform(y, (value) => value * (index + 1) * 0.3),
                }}
                className="cursor-default block"
              >
                {line}
                {index < lines.length - 1 && <br />}
              </motion.div>
            ))}
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="default" className="text-sm px-6 py-2 h-auto font-bold uppercase tracking-wider">
              Programm ansehen
            </Button>
            <Button size="default" variant="outline" className="text-sm px-6 py-2 h-auto font-bold uppercase tracking-wider border border-foreground/30 hover:bg-foreground/10">
              Saal Mieten
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Tagline - Bottom Right like Bimhuis */}
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12 right-6 md:right-12 text-xl md:text-2xl lg:text-3xl text-foreground italic font-light max-w-md text-right z-10"
      >
        Musik in ihrer reinsten Form – live, nah und mit unvergleichlicher Akustik.
      </motion.p>
    </section>
  );
};

export default Hero;