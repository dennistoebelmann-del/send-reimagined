interface SectionDividerProps {
  fromColor?: string;
  toColor?: string;
  variant?: "default" | "inverted";
}

const SectionDivider = ({ 
  fromColor = "bg-background", 
  toColor = "bg-secondary",
  variant = "default" 
}: SectionDividerProps) => {
  const blocks = variant === "default" 
    ? [
        { width: "w-24", height: "h-16", left: "left-[5%]" },
        { width: "w-32", height: "h-24", left: "left-[15%]" },
        { width: "w-20", height: "h-12", left: "left-[30%]" },
        { width: "w-40", height: "h-20", left: "left-[45%]" },
        { width: "w-28", height: "h-28", left: "left-[60%]" },
        { width: "w-36", height: "h-16", left: "left-[75%]" },
        { width: "w-24", height: "h-20", left: "left-[90%]" },
      ]
    : [
        { width: "w-28", height: "h-20", left: "left-[8%]" },
        { width: "w-20", height: "h-28", left: "left-[22%]" },
        { width: "w-36", height: "h-16", left: "left-[38%]" },
        { width: "w-24", height: "h-24", left: "left-[55%]" },
        { width: "w-32", height: "h-12", left: "left-[70%]" },
        { width: "w-20", height: "h-20", left: "left-[85%]" },
      ];

  return (
    <div className={`relative h-28 ${fromColor} overflow-hidden`}>
      {/* Blocks extending from the next section */}
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`absolute bottom-0 ${block.width} ${block.height} ${block.left} ${toColor}`}
        />
      ))}
    </div>
  );
};

export default SectionDivider;
