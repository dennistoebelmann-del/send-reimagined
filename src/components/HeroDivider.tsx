const HeroDivider = () => {
  return (
    <div className="relative bg-background">
      {/* Subtle curved line pattern - like engraved watermark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 128"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          fill="none"
        >
          {/* Multiple subtle curved lines mimicking Sendesaal logo concave shape */}
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${128 - i * 8} Q360 ${96 - i * 6} 720 ${112 - i * 7} T1440 ${128 - i * 8}`}
              stroke="hsl(var(--foreground) / 0.06)"
              strokeWidth="0.5"
              fill="none"
            />
          ))}
          {/* Additional fine detail lines */}
          {[...Array(5)].map((_, i) => (
            <path
              key={`detail-${i}`}
              d={`M0 ${128 - 64 - i * 4} Q480 ${80 - i * 3} 960 ${96 - i * 4} T1440 ${128 - 64 - i * 4}`}
              stroke="hsl(var(--foreground) / 0.04)"
              strokeWidth="0.3"
              fill="none"
            />
          ))}
        </svg>
      </div>

      {/* Concave curve divider - transitioning to primary (orange) */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20 block"
        fill="none"
      >
        <path
          d="M0 0 L0 80 L1440 80 L1440 0 Q1080 60 720 60 Q360 60 0 0 Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </div>
  );
};

export default HeroDivider;
