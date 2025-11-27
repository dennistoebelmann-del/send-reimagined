import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-concert-hall.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content - Left Aligned like Bimhuis */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
            musik.<br />live.<br />erleben.
          </h1>
          
          <p className="text-base md:text-lg text-foreground/80 mb-10 max-w-xl leading-relaxed">
            Ein denkmalgeschützter Konzertraum mit außergewöhnlich guter Akustik. 
            Von feinster Klassik über wegweisenden Jazz bis hin zu experimentellen Formaten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base px-8 font-medium">
              Programm ansehen
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 font-medium border-foreground/30 hover:bg-foreground/10">
              Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
