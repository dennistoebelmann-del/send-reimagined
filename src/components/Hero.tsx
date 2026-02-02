import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#D9D9D9]">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Top gradient for navbar visibility */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 pt-24">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[80px] md:text-[100px] lg:text-[128px] font-normal text-white leading-[1] mb-8"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Musik.<br/>
            Live.<br/>
            Erleben.
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[80px] md:text-[100px] lg:text-[128px] font-normal text-white leading-[1] mb-8"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Musik.<br/>
            Live.<br/>
            Erleben.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              asChild 
              className="bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold uppercase tracking-wide px-8 py-4 h-auto text-base border border-white"
            >
              <Link to="/programm">Programm</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Play/Pause Button - Bottom Right */}
      <div className="absolute bottom-32 right-8 z-20">
        <button 
          onClick={toggleVideo}
          className="w-12 h-12 rounded-full bg-black border border-white flex items-center justify-center gap-1"
          aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
        >
          {isPlaying ? (
            <>
              <div className="w-[3px] h-[11px] bg-white" />
              <div className="w-[3px] h-[11px] bg-white" />
            </>
          ) : (
            <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1" />
          )}
        </button>
      </div>

      {/* White Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full h-[80px] md:h-[100px]"
          fill="white"
        >
          <ellipse cx="720" cy="100" rx="900" ry="100" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
