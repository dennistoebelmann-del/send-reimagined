import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.jpg";

const LeitbildSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center gap-6">
              <div className="w-10 h-[1px] bg-[#E47C03]" />
              <span className="text-[#E47C03] text-lg md:text-xl font-normal">
                Leitbild
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-normal leading-[1]">
              Exzellenz &<br />Offenheit
            </h2>
            
            {/* Description */}
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-xl">
              Der Sendesaal Bremen ist ein Ort künstlerischer Exzellenz, Neugier 
              und Offenheit. Er wurzelt in einer langen Tradition herausragender 
              Musik – von feinster Klassik über wegweisenden Jazz bis hin zu allen 
              Facetten der Weltmusik.
            </p>
            
            {/* CTA Button */}
            <Button 
              asChild
              className="bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-16 py-4 h-auto text-base border border-white"
            >
              <Link to="/ueber-uns">Mehr über uns</Link>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-[720px] overflow-hidden">
              <img 
                src={aboutHero} 
                alt="Sendesaal Bremen Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeitbildSection;
