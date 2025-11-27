import { Button } from "@/components/ui/button";
import EventListItem from "./EventListItem";
import jazzImage from "@/assets/event-jazz.jpg";
import classicalImage from "@/assets/event-classical.jpg";
import experimentalImage from "@/assets/event-experimental.jpg";

const AgendaSection = () => {
  const events = [
    {
      title: "Fire! Orchestra",
      artist: "Mats Gustafsson & Ensemble",
      description: "Grootse improvisatie en energie door dit orkest met strijkers, blazers, ritmesectie en elektronica.",
      date: "Samstag, 6. Dezember 2025",
      time: "20:00",
      location: "Sendesaal Bremen",
      image: jazzImage,
    },
    {
      title: "Kammermusik Abend",
      artist: "Quatuor Ébène",
      description: "Ein außergewöhnliches Streichquartett präsentiert Werke von Beethoven und Schubert in intimer Atmosphäre.",
      date: "Freitag, 13. Dezember 2025",
      time: "19:30",
      location: "Sendesaal Bremen",
      image: classicalImage,
    },
    {
      title: "Electronic Soundscapes",
      artist: "Various Artists",
      description: "Eine Reise durch elektronische Klanglandschaften mit experimentellen Künstlern aus ganz Europa.",
      date: "Samstag, 20. Dezember 2025",
      time: "21:00",
      location: "Sendesaal Bremen",
      image: experimentalImage,
    },
  ];

  return (
    <section id="programm" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Agenda
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl">
              Entdecken Sie unser vielfältiges Programm – von Klassik über Jazz bis zu experimentellen Formaten.
            </p>
          </div>
          <Button size="lg" variant="outline" className="font-medium shrink-0">
            Vollständiges Programm
          </Button>
        </div>

        <div className="space-y-0">
          {events.map((event, index) => (
            <EventListItem key={index} {...event} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="font-medium px-10">
            Alle Konzerte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
