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
    // Jazz
    {
      title: "Fire! Orchestra",
      artist: "Mats Gustafsson & Ensemble",
      description: "Grootse improvisatie en energie door dit orkest met strijkers, blazers, ritmesectie en elektronica.",
      date: "Samstag, 6. Dezember 2025",
      time: "20:00",
      location: "Sendesaal Bremen",
      image: jazzImage,
      category: "jazz",
    },
    {
      title: "Tingvall Trio",
      artist: "Martin Tingvall, Omar Rodriguez Calvo, Jürgen Spiegel",
      description: "Nordischer Jazz trifft auf klassische Einflüsse – melodisch, virtuos und voller Emotionen.",
      date: "Donnerstag, 9. Januar 2026",
      time: "20:00",
      location: "Sendesaal Bremen",
      image: jazzImage,
      category: "jazz",
    },
    {
      title: "Esbjörn Svensson Memorial",
      artist: "Dan Berglund & Magnus Öström",
      description: "Ein Abend zu Ehren des legendären schwedischen Pianisten mit seinen ehemaligen Bandkollegen.",
      date: "Freitag, 23. Januar 2026",
      time: "20:30",
      location: "Sendesaal Bremen",
      image: jazzImage,
      category: "jazz",
    },
    // Klassik
    {
      title: "Kammermusik Abend",
      artist: "Quatuor Ébène",
      description: "Ein außergewöhnliches Streichquartett präsentiert Werke von Beethoven und Schubert in intimer Atmosphäre.",
      date: "Freitag, 13. Dezember 2025",
      time: "19:30",
      location: "Sendesaal Bremen",
      image: classicalImage,
      category: "klassik",
    },
    {
      title: "Klavierrezital",
      artist: "Igor Levit",
      description: "Der preisgekrönte Pianist spielt Bachs Goldberg-Variationen in einer unvergesslichen Interpretation.",
      date: "Sonntag, 19. Januar 2026",
      time: "18:00",
      location: "Sendesaal Bremen",
      image: classicalImage,
      category: "klassik",
    },
    {
      title: "Barocke Nacht",
      artist: "Concerto Köln",
      description: "Vivaldi, Bach und Händel in authentischer Aufführungspraxis mit historischen Instrumenten.",
      date: "Samstag, 8. Februar 2026",
      time: "19:30",
      location: "Sendesaal Bremen",
      image: classicalImage,
      category: "klassik",
    },
    // Weltmusik
    {
      title: "Fado Noite",
      artist: "Ana Moura",
      description: "Die portugiesische Sängerin entführt Sie in die melancholische Welt des Fado.",
      date: "Mittwoch, 15. Januar 2026",
      time: "20:00",
      location: "Sendesaal Bremen",
      image: classicalImage,
      category: "weltmusik",
    },
    {
      title: "Silk Road Ensemble",
      artist: "Yo-Yo Ma & Friends",
      description: "Eine musikalische Reise entlang der Seidenstraße mit Künstlern aus aller Welt.",
      date: "Samstag, 1. Februar 2026",
      time: "19:30",
      location: "Sendesaal Bremen",
      image: jazzImage,
      category: "weltmusik",
    },
    {
      title: "Flamenco Puro",
      artist: "Paco Peña",
      description: "Authentischer Flamenco mit dem legendären Gitarristen und seinem Ensemble.",
      date: "Freitag, 21. Februar 2026",
      time: "20:30",
      location: "Sendesaal Bremen",
      image: experimentalImage,
      category: "weltmusik",
    },
    // Experimental
    {
      title: "Electronic Soundscapes",
      artist: "Nils Frahm",
      description: "Eine Reise durch elektronische Klanglandschaften – zwischen Ambient, Techno und Neoklassik.",
      date: "Samstag, 20. Dezember 2025",
      time: "21:00",
      location: "Sendesaal Bremen",
      image: experimentalImage,
      category: "experimental",
    },
    {
      title: "Drone & Resonance",
      artist: "Éliane Radigue & Stephen O'Malley",
      description: "Minimalistische Klangwelten und tieffrequente Schwingungen in perfekter Akustik.",
      date: "Donnerstag, 6. Februar 2026",
      time: "20:00",
      location: "Sendesaal Bremen",
      image: experimentalImage,
      category: "experimental",
    },
    {
      title: "Prepared Piano",
      artist: "Hauschka",
      description: "Der Kölner Komponist verwandelt den Flügel in ein perkussives Wunderwerk.",
      date: "Samstag, 28. Februar 2026",
      time: "20:00",
      location: "Sendesaal Bremen",
      image: experimentalImage,
      category: "experimental",
    },
  ];

  const filteredEvents = activeFilter === "alle" 
    ? events 
    : events.filter(event => event.category === activeFilter);

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
          {filteredEvents.map((event, index) => (
            <EventListItem key={`${event.category}-${index}`} {...event} />
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
