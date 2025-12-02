import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden -my-12 z-10">
      {/* Concave beams - architectural abstraction */}
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Background beam - most transparent */}
        <motion.path
          d="M0 48 Q360 0 720 48 Q1080 96 1440 48 L1440 96 L0 96 Z"
          fill="hsl(var(--foreground))"
          fillOpacity="0.08"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        {/* Middle beam */}
        <motion.path
          d="M0 56 Q360 16 720 56 Q1080 96 1440 56 L1440 96 L0 96 Z"
          fill="hsl(var(--foreground))"
          fillOpacity="0.15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        {/* Front beam - most opaque */}
        <motion.path
          d="M0 64 Q360 32 720 64 Q1080 96 1440 64 L1440 96 L0 96 Z"
          fill="hsl(var(--foreground))"
          fillOpacity="0.25"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        {/* Accent line */}
        <motion.path
          d="M0 72 Q360 40 720 72 Q1080 104 1440 72"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
