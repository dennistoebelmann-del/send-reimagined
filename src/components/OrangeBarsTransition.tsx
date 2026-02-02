import staebeUnten from "@/assets/staebe-unten.svg";

const OrangeBarsTransition = () => {
  return (
    <div className="relative h-[66px] bg-white flex items-center justify-center overflow-visible">
      <img 
        src={staebeUnten} 
        alt="" 
        className="h-[66px] w-auto"
        aria-hidden="true"
      />
    </div>
  );
};

export default OrangeBarsTransition;
