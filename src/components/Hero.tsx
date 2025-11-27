import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-concert-hall.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            musik. live. erleben.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Der Sendesaal Bremen ist ein Ort künstlerischer Exzellenz, Neugier und Offenheit. 
            Ein denkmalgeschützter Konzertraum mit außergewöhnlich guter Akustik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-base px-8 shadow-orange">
              Aktuelles Programm
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-background/10 backdrop-blur-sm border-foreground/20 hover:bg-background/20">
              Tickets kaufen
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-foreground/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bremen-Schwachhausen</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>80-100 Konzerte pro Jahr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
