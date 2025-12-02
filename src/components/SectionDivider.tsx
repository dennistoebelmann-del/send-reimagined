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
        <path
          d="M0 48 Q360 0 720 48 Q1080 96 1440 48 L1440 96 L0 96 Z"
          fill="hsl(var(--background))"
          fillOpacity="0.3"
        />
        
        {/* Middle beam */}
        <path
          d="M0 56 Q360 16 720 56 Q1080 96 1440 56 L1440 96 L0 96 Z"
          fill="hsl(var(--background))"
          fillOpacity="0.5"
        />
        
        {/* Front beam - most opaque */}
        <path
          d="M0 64 Q360 32 720 64 Q1080 96 1440 64 L1440 96 L0 96 Z"
          fill="hsl(var(--background))"
          fillOpacity="0.8"
        />
        
        {/* Accent line */}
        <path
          d="M0 72 Q360 40 720 72 Q1080 104 1440 72"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
