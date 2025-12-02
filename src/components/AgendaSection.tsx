import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventListItem from "./EventListItem";
import jazzImage from "@/assets/event-jazz.jpg";
import classicalImage from "@/assets/event-classical.jpg";
import experimentalImage from "@/assets/event-experimental.jpg";

const AgendaSection = () => {
  const [activeFilter, setActiveFilter] = useState("alle");
  
  const filters = ["Alle", "Jazz", "Klassik", "Weltmusik", "Experimental"];

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
        <div className="mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
            Aktuelles Programm
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tight">
            Konzerte
          </h2>
          
          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`text-sm md:text-base font-bold uppercase tracking-wide transition-all ${
                  activeFilter === filter.toLowerCase()
                    ? "bg-primary text-primary-foreground px-6 py-2.5 rounded-full"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-0">
          {events.map((event, index) => (
            <EventListItem key={index} {...event} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="font-bold px-12 text-base uppercase tracking-wide py-6 h-auto">
            Alle Konzerte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
