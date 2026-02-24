import staebeUnten from "@/assets/staebe-unten.svg";

const OrangeBarsTransition = () => {
  return (
    <div className="relative h-0 flex items-center justify-center z-10">
      <img 
        src={staebeUnten} 
        alt="" 
        className="h-[66px] w-auto absolute -translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
};

export default OrangeBarsTransition;
