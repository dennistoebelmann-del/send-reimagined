const OrangeBarsTransition = ({ toBlack = true }: { toBlack?: boolean }) => {
  const bgColor = toBlack ? "black" : "white";
  const topBgColor = toBlack ? "white" : "black";
  
  return (
    <div className="relative h-16 overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* White/Black ellipse on top */}
      <div 
        className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[110%] h-[200px] rounded-[50%]"
        style={{ backgroundColor: topBgColor }}
      />
      
      {/* Orange bars */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-[12px]">
        {[80, 70, 60, 55, 55, 60, 70, 80].map((height, i) => (
          <div
            key={i}
            className="w-[6px] bg-[#E47C03]"
            style={{ height: `${height}px`, marginTop: `${-height + 40}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default OrangeBarsTransition;
