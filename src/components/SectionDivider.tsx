import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative w-full h-20 overflow-hidden -my-10 z-10">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Fine concave lines */}
        <motion.path
          d="M0 20 Q360 0 720 20 Q1080 40 1440 20"
          stroke="hsl(var(--foreground))"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        <motion.path
          d="M0 32 Q360 8 720 32 Q1080 56 1440 32"
          stroke="hsl(var(--foreground))"
          strokeWidth="0.5"
          strokeOpacity="0.25"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        <motion.path
          d="M0 44 Q360 16 720 44 Q1080 72 1440 44"
          stroke="hsl(var(--foreground))"
          strokeWidth="0.5"
          strokeOpacity="0.35"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        <motion.path
          d="M0 56 Q360 24 720 56 Q1080 88 1440 56"
          stroke="hsl(var(--foreground))"
          strokeWidth="0.5"
          strokeOpacity="0.25"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        {/* Accent line */}
        <motion.path
          d="M0 68 Q360 32 720 68 Q1080 104 1440 68"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeOpacity="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
