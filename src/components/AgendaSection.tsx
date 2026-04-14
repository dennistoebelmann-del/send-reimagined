import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import eventFireOrchestra from "@/assets/event-fire-orchestra.jpg";
import eventTingvallTrio from "@/assets/event-tingvall-trio.jpg";
import eventEsbjornMemorial from "@/assets/event-esbjorn-memorial.jpg";
import eventKammermusik from "@/assets/event-kammermusik.jpg";
import eventKlavierRezital from "@/assets/event-klavier-rezital.jpg";
import eventBarockeNacht from "@/assets/event-barocke-nacht.jpg";

const AgendaSection = () => {
  const [activeFilter, setActiveFilter] = useState("alle");
  
  const filters = ["Alle", "Jazz", "Klassik", "Weltmusik", "Experimental"];

  const events = [
    {
      id: 1,
      title: "Fire! Orchestra",
      artist: "Mats Gustafsson & Ensemble",
      description: "Grootse improvisatie en energie door dit orkest met strijkers, blazers, ritmesectie en elektronica.",
      date: "Samstag, 6. Dezember 2025",
      time: "20",
      location: "Sendesaal Bremen",
      image: eventFireOrchestra,
      category: "jazz",
    },
    {
      id: 2,
      title: "Tingvall Trio",
      artist: "Martin Tingvall, Omar Rodriguez Calvo, Jürgen Spiegel",
      description: "Nordischer Jazz trifft auf klassische Einflüsse – melodisch, virtuos und voller Emotionen.",
      date: "Donnerstag, 9. Januar 2026",
      time: "20",
      location: "Sendesaal Bremen",
      image: eventTingvallTrio,
      category: "jazz",
    },
    {
      id: 3,
      title: "Esbjörn Svensson Memorial",
      artist: "Dan Berglund & Magnus Öström",
      description: "Ein Abend zu Ehren des legendären schwedischen Pianisten mit seinen ehemaligen Bandkollegen.",
      date: "Freitag, 23. Januar 2026",
      time: "20",
      location: "Sendesaal Bremen",
      image: eventEsbjornMemorial,
      category: "jazz",
    },
    {
      id: 4,
      title: "Kammermusik Abend",
      artist: "Quatuor Ébène",
      description: "Ein außergewöhnliches Streichquartett präsentiert Werke von Beethoven und Schubert in intimer Atmosphäre.",
      date: "Freitag, 13. Dezember 2025",
      time: "20",
      location: "Sendesaal Bremen",
      image: eventKammermusik,
      category: "klassik",
    },
    {
      id: 5,
      title: "Klavier Rezital",
      artist: "Igor Levit",
      description: "Der preisgekrönte Pianist spielt Bachs Goldberg-Variationen in einer unvergesslichen Interpretation.",
      date: "Sonntag, 19. Januar 2026",
      time: "18",
      location: "Sendesaal Bremen",
      image: eventKlavierRezital,
      category: "klassik",
    },
    {
      id: 6,
      title: "Barocke Nacht",
      artist: "Concerto Köln",
      description: "Vivaldi, Bach und Händel in authentischer Aufführungspraxis mit historischen Instrumenten.",
      date: "Samstag, 8. Februar 2026",
      time: "20",
      location: "Sendesaal Bremen",
      image: eventBarockeNacht,
      category: "klassik",
    },
  ];

  const filteredEvents = (activeFilter === "alle" 
    ? events 
    : events.filter(event => event.category === activeFilter)
  ).slice(0, 6);

  return (
    <section id="programm" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-[1px] bg-[#E47C03]" />
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-normal">
            Programm
          </h2>
        </div>
        
        {/* Filter Chips */}
        <div className="flex flex-wrap items-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter.toLowerCase())}
              className={`px-8 py-4 text-base font-bold transition-all ${
                activeFilter === filter.toLowerCase()
                  ? "bg-[#CF3D11] text-white"
                  : "bg-transparent text-black hover:text-[#E47C03]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="space-y-12">
          {filteredEvents.map((event, index) => (
            <div key={`${event.category}-${index}`} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
              {/* Left: Image + Content */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 flex-1">
                {/* Image */}
                <div className="w-full md:w-[300px] lg:w-[365px] h-[200px] md:h-[210px] flex-shrink-0 bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-3">
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-black text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-black" />
                      <span>{event.date}</span>
                    </div>
                    <div className="w-5 h-[1px] bg-[#E47C03]" />
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-black" />
                      <span>{event.time} Uhr</span>
                    </div>
                    <div className="w-5 h-[1px] bg-[#E47C03]" />
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-black" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[#CF3D11] text-2xl md:text-3xl lg:text-4xl font-normal">
                    {event.title}
                  </h3>
                  
                  {/* Artist */}
                  <p className="text-black text-lg md:text-xl font-normal">
                    {event.artist}
                  </p>
                  
                  {/* Description */}
                  <p className="text-black text-sm md:text-base font-normal">
                    {event.description}
                  </p>
                </div>
              </div>
              
              {/* Right: Buttons */}
              <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[180px]">
                <Button 
                  asChild
                  variant="outline"
                  className="flex-1 lg:w-[180px] h-[52px] font-bold text-base text-[#CF3D11] border-[#CF3D11] hover:bg-[#CF3D11]/10 bg-transparent"
                >
                  <Link to={`/event/${event.id}`}>Details</Link>
                </Button>
                <Button 
                  className="flex-1 lg:w-[180px] h-[52px] font-bold text-base bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white"
                >
                  Tickets
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button 
            asChild 
            className="bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-16 py-4 h-auto text-base"
          >
            <Link to="/programm">Alle Konzerte ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
