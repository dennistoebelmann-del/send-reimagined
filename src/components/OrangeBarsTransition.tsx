import staebeUnten from "@/assets/staebe-unten.svg";

const OrangeBarsTransition = () => {
  return (
    <div className="flex items-center justify-center py-6">
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
