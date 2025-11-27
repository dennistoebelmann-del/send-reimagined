import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import jazzImage from "@/assets/event-jazz.jpg";
import classicalImage from "@/assets/event-classical.jpg";
import experimentalImage from "@/assets/event-experimental.jpg";

const ProgramSection = () => {
  const upcomingEvents = [
    {
      title: "Fire! Orchestra",
      artist: "Mats Gustafsson & Ensemble",
      date: "6. Dezember 2025",
      time: "20:00",
      genre: "Jazz",
      image: jazzImage,
      price: "ab 25€",
    },
    {
      title: "Streichquartett Abend",
      artist: "Quatuor Ébène",
      date: "13. Dezember 2025",
      time: "19:30",
      genre: "Klassik",
      image: classicalImage,
      price: "ab 30€",
    },
    {
      title: "Elektronische Klangwelten",
      artist: "Various Artists",
      date: "20. Dezember 2025",
      time: "21:00",
      genre: "Experimental",
      image: experimentalImage,
      price: "ab 20€",
    },
  ];

  return (
    <section id="programm" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Aktuelles Programm
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Von feinster Klassik über wegweisenden Jazz bis hin zu allen Facetten 
              der Welt- und Popularmusik – entdecken Sie unser vielfältiges Programm.
            </p>
          </div>
          <Button size="lg" variant="outline" className="mt-4 md:mt-0">
            Alle Konzerte
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Entdecken Sie alle kommenden Konzerte und Veranstaltungen
          </p>
          <Button size="lg" className="shadow-orange">
            Zum vollständigen Programm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
