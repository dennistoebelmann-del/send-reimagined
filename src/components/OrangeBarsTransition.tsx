import staebeUnten from "@/assets/staebe-unten.svg";

const OrangeBarsTransition = () => {
  return (
    <div className="relative z-20 h-[66px] -mt-[33px] -mb-[33px] flex items-center justify-center pointer-events-none">
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
