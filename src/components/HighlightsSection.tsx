import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import jazzImage from "@/assets/event-jazz.jpg";
import classicalImage from "@/assets/event-classical.jpg";
import experimentalImage from "@/assets/event-experimental.jpg";

const HighlightsSection = () => {
  const highlights = [
    {
      title: "Fire! Orchestra",
      subtitle: "Mats Gustafsson",
      date: "6 DEC",
      image: jazzImage,
      tag: "Jazz",
    },
    {
      title: "Streichquartett",
      subtitle: "Quatuor Ébène",
      date: "13 DEC",
      image: classicalImage,
      tag: "Klassik",
    },
    {
      title: "Electronic Live",
      subtitle: "Various Artists",
      date: "20 DEC",
      image: experimentalImage,
      tag: "Experimental",
    },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Highlights
          </h2>
          <Button 
            variant="outline" 
            className="hidden md:inline-flex bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 font-medium"
          >
            Alle ansehen
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background text-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
                    {event.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-primary-foreground mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-1 group-hover:opacity-80 transition-opacity">
                {event.title}
              </h3>
              <p className="text-primary-foreground/80 font-medium">{event.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button 
            variant="outline" 
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 font-medium"
          >
            Alle Highlights ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
