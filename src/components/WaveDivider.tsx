import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface WaveDividerProps {
  variant?: "light-to-dark" | "dark-to-light";
  className?: string;
}

const WaveDivider = ({ variant = "light-to-dark", className = "" }: WaveDividerProps) => {
  const isLightToDark = variant === "light-to-dark";
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const lineY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  
  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`} 
      style={{ height: "180px" }}
    >
      {/* Background gradient transition */}
      <div 
        className="absolute inset-0"
        style={{
          background: isLightToDark 
            ? "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)"
            : "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)"
        }}
      />
      
      <motion.svg
        style={{ opacity }}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold/warm accent gradient */}
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25, 98%, 46%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(35, 70%, 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(25, 98%, 46%)" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Warm gray gradient for depth */}
          <linearGradient id="depthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 0%, 20%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(0, 0%, 8%)" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Subtle highlight */}
          <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 0%, 100%)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(0, 0%, 100%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Base dark wave - furthest back with strongest parallax */}
        <motion.g style={{ y: y1 }}>
          <motion.path
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
            d="M0,180 L0,120 Q180,60 360,90 T720,70 T1080,100 T1440,80 L1440,180 Z"
            fill="url(#depthGradient)"
          />
        </motion.g>
        
        {/* Middle accent wave with medium parallax */}
        <motion.g style={{ y: y2 }}>
          <motion.path
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            d="M0,180 L0,130 Q240,70 480,100 T960,80 T1440,110 L1440,180 Z"
            fill="url(#accentGradient)"
          />
        </motion.g>
        
        {/* Concave architectural arch - primary shape with subtle parallax */}
        <motion.g style={{ y: y3 }}>
          <motion.path
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            d="M0,180 L0,140 Q360,50 720,90 Q1080,130 1440,100 L1440,180 Z"
            fill="hsl(var(--background))"
            fillOpacity="0.9"
          />
        </motion.g>
        
        {/* Decorative curved lines - sound wave inspired with line parallax */}
        <motion.g style={{ y: lineY }}>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
            d="M0,100 Q360,30 720,70 Q1080,110 1440,60"
            fill="none"
            stroke="hsl(25, 98%, 46%)"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
          
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
            d="M0,115 Q400,50 800,85 Q1200,120 1440,75"
            fill="none"
            stroke="hsl(35, 60%, 55%)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
          
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
            d="M0,125 Q320,70 640,95 Q960,120 1440,85"
            fill="none"
            stroke="hsl(0, 0%, 60%)"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
        </motion.g>
        
        {/* Top highlight edge */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          d="M0,140 Q360,50 720,90 Q1080,130 1440,100"
          fill="none"
          stroke="url(#highlightGradient)"
          strokeWidth="1"
        />
      </motion.svg>
    </div>
  );
};

export default WaveDivider;
