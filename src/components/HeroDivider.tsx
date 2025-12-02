const HeroDivider = () => {
  return (
    <div className="relative bg-background">
      {/* Subtle vertical line pattern - mimicking logo bars */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          fill="none"
        >
          {/* Vertical bars with subtle concave bottoms */}
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M${120 * i} 0 L${120 * i} ${54 - Math.sin((i / 11) * Math.PI) * 12}`}
              stroke="hsl(var(--foreground) / 0.04)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      </div>

      {/* Subtle concave curve divider - gentler curve like logo bars */}
      <svg
        viewBox="0 0 1440 32"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-10 block"
        fill="none"
      >
        <path
          d="M0 0 L0 32 L1440 32 L1440 0 Q1080 20 720 20 Q360 20 0 0 Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </div>
  );
};

export default HeroDivider;
