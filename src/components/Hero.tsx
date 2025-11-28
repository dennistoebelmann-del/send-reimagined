import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content - Left Aligned like Bimhuis */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl">
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black mb-12 leading-[0.85] tracking-tighter uppercase">
            musik.<br />live.<br />erleben.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-12 max-w-2xl leading-relaxed font-light">
            Ein denkmalgeschützter Konzertraum mit außergewöhnlich guter Akustik. 
            Von feinster Klassik über wegweisenden Jazz bis hin zu experimentellen Formaten.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="text-lg px-12 py-6 h-auto font-bold uppercase tracking-wider">
              Programm ansehen
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-12 py-6 h-auto font-bold uppercase tracking-wider border-2 border-foreground/30 hover:bg-foreground/10">
              Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
