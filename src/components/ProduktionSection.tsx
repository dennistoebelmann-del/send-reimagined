import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import produktionHero from "@/assets/produktion-hero.jpg";

const ProduktionSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-black overflow-hidden">
      {/* Background Image - Full width */}
      <div className="absolute inset-0">
        <img 
          src={produktionHero} 
          alt="Sendesaal Produktion" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content - Right aligned */}
      <div className="relative container mx-auto px-6 md:px-16 py-24 md:py-32 flex items-center justify-end min-h-[80vh]">
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Label */}
          <div className="flex items-center gap-6">
            <div className="w-10 h-[1px] bg-[#E47C03]" />
            <span className="text-[#E47C03] text-lg md:text-xl font-normal">
              Produktion
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-normal leading-[1]">
            Sendesaal<br />Productions
          </h2>
          
          {/* Description */}
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-xl">
            Der Sendesaal Bremen steht für höchste Aufnahmequalität und künstlerische Exzellenz. 
            Professionelle Musikproduktionen, Live-Mitschnitte und Studioaufnahmen in einer 
            einzigartigen akustischen Umgebung.
          </p>
          
          {/* CTA Button */}
          <Button 
            asChild
            className="bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-16 py-4 h-auto text-base border border-white"
          >
            <Link to="/ueber-uns#akustik">Weitere Informationen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProduktionSection;
