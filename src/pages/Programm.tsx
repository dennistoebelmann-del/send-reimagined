import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import eventFireOrchestra from "@/assets/event-fire-orchestra.jpg";
import eventTingvallTrio from "@/assets/event-tingvall-trio.jpg";
import eventEsbjornMemorial from "@/assets/event-esbjorn-memorial.jpg";
import eventKammermusik from "@/assets/event-kammermusik.jpg";
import eventKlavierRezital from "@/assets/event-klavier-rezital.jpg";
import eventBarockeNacht from "@/assets/event-barocke-nacht.jpg";

const categories = [
  { id: "alle", label: "Alle" },
  { id: "jazz", label: "Jazz" },
  { id: "klassik", label: "Klassik" },
  { id: "weltmusik", label: "Weltmusik" },
  { id: "experimentell", label: "Experimental" },
];

const events = [
  {
    id: 1,
    date: "Samstag, 6. Dezember 2025",
    month: "Dezember 2025",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Fire! Orchestra",
    artist: "Mats Gustafsson & Ensemble",
    description: "Grootse improvisatie en energie door dit orkest met strijkers, blazers, ritmesectie en elektronica.",
    category: "jazz",
    image: eventFireOrchestra,
    externalTicketing: true,
  },
  {
    id: 4,
    date: "Freitag, 13. Dezember 2025",
    month: "Dezember 2025",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Kammermusik Abend",
    artist: "Quatuor Ébène",
    description: "Ein außergewöhnliches Streichquartett präsentiert Werke von Beethoven und Schubert in intimer Atmosphäre.",
    category: "klassik",
    image: eventKammermusik,
    externalTicketing: false,
  },
  {
    id: 2,
    date: "Donnerstag, 9. Januar 2026",
    month: "Januar 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Tingvall Trio",
    artist: "Martin Tingvall, Omar Rodriguez Calvo, Jürgen Spiegel",
    description: "Nordischer Jazz trifft auf klassische Einflüsse – melodisch, virtuos und voller Emotionen.",
    category: "jazz",
    image: eventTingvallTrio,
    externalTicketing: false,
  },
  {
    id: 5,
    date: "Sonntag, 19. Januar 2026",
    month: "Januar 2026",
    time: "18",
    location: "Sendesaal Bremen",
    title: "Klavier Rezital",
    artist: "Igor Levit",
    description: "Der preisgekrönte Pianist spielt Bachs Goldberg-Variationen in einer unvergesslichen Interpretation.",
    category: "klassik",
    image: eventKlavierRezital,
    externalTicketing: false,
  },
  {
    id: 3,
    date: "Freitag, 23. Januar 2026",
    month: "Januar 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Esbjörn Svensson Memorial",
    artist: "Dan Berglund & Magnus Öström",
    description: "Ein Abend zu Ehren des legendären schwedischen Pianisten mit seinen ehemaligen Bandkollegen.",
    category: "jazz",
    image: eventEsbjornMemorial,
    externalTicketing: true,
  },
  {
    id: 6,
    date: "Samstag, 8. Februar 2026",
    month: "Februar 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Barocke Nacht",
    artist: "Concerto Köln",
    description: "Vivaldi, Bach und Händel in authentischer Aufführungspraxis mit historischen Instrumenten.",
    category: "klassik",
    image: eventBarockeNacht,
    externalTicketing: true,
  },
  {
    id: 7,
    date: "Freitag, 20. Februar 2026",
    month: "Februar 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Nordic Voices",
    artist: "Ensemble Nordic Voices",
    description: "Skandinavische Vokalmusik von mittelalterlichen Hymnen bis zu zeitgenössischen Kompositionen.",
    category: "klassik",
    image: eventKammermusik,
    externalTicketing: false,
  },
  {
    id: 8,
    date: "Samstag, 7. März 2026",
    month: "März 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Anouar Brahem Quartet",
    artist: "Anouar Brahem, François Couturier, Klaus Gesing, Björn Meyer",
    description: "Arabische Oud-Tradition trifft auf europäischen Jazz – eine einzigartige musikalische Begegnung.",
    category: "weltmusik",
    image: eventTingvallTrio,
    externalTicketing: true,
  },
  {
    id: 9,
    date: "Donnerstag, 19. März 2026",
    month: "März 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Portico Quartet",
    artist: "Portico Quartet",
    description: "Atmosphärische Klanglandschaften zwischen Jazz, Electronica und Minimalismus.",
    category: "experimentell",
    image: eventEsbjornMemorial,
    externalTicketing: false,
  },
  {
    id: 10,
    date: "Samstag, 28. März 2026",
    month: "März 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Hélène Grimaud",
    artist: "Hélène Grimaud",
    description: "Die französische Starpianistin mit einem Programm von Brahms und Rachmaninow.",
    category: "klassik",
    image: eventKlavierRezital,
    externalTicketing: false,
  },
  {
    id: 11,
    date: "Freitag, 10. April 2026",
    month: "April 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Shai Maestro Trio",
    artist: "Shai Maestro, Jorge Roeder, Ofri Nehemya",
    description: "Israelischer Jazz voller Lyrik und Intensität – eines der aufregendsten Trios der Szene.",
    category: "jazz",
    image: eventFireOrchestra,
    externalTicketing: false,
  },
  {
    id: 12,
    date: "Samstag, 25. April 2026",
    month: "April 2026",
    time: "19",
    location: "Sendesaal Bremen",
    title: "Klassik trifft Flamenco",
    artist: "Dorantes & Renaud Capuçon",
    description: "Eine faszinierende Verschmelzung von klassischer Violine und andalusischem Klavier.",
    category: "weltmusik",
    image: eventBarockeNacht,
    externalTicketing: true,
  },
];

const EVENTS_PER_PAGE = 10;

const Programm = () => {
  const [activeFilter, setActiveFilter] = useState("alle");
  const [visibleCount, setVisibleCount] = useState(EVENTS_PER_PAGE);

  const filteredEvents = events.filter((event) => {
    return activeFilter === "alle" || event.category === activeFilter;
  });

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  // Group visible events by month
  const groupedEvents: { month: string; events: typeof events }[] = [];
  visibleEvents.forEach((event) => {
    const lastGroup = groupedEvents[groupedEvents.length - 1];
    if (lastGroup && lastGroup.month === event.month) {
      lastGroup.events.push(event);
    } else {
      groupedEvents.push({ month: event.month, events: [event] });
    }
  });

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setVisibleCount(EVENTS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Spacer for fixed navigation */}
      <div className="h-24" />

      {/* Programm Section */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-normal">
              Programm
            </h2>
          </div>
          
          {/* Filter Chips */}
          <div className="flex flex-wrap items-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`px-8 py-4 text-base font-bold transition-all ${
                  activeFilter === cat.id
                    ? "bg-[#CF3D11] text-white"
                    : "bg-transparent text-black hover:text-[#E47C03]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grouped Events by Month */}
          <div className="space-y-16">
            {groupedEvents.map((group) => (
              <div key={group.month}>
                {/* Month Headline */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-[1px] bg-[#E47C03]" />
                  <h3 className="text-black text-xl md:text-2xl lg:text-3xl font-normal">
                    Veranstaltungen im {group.month}
                  </h3>
                </div>

                {/* Events in this month */}
                <div className="space-y-12">
                  {group.events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-16 text-center">
              <Button
                onClick={() => setVisibleCount((prev) => prev + EVENTS_PER_PAGE)}
                className="bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-16 py-4 h-auto text-base"
              >
                Weitere Veranstaltungen anzeigen
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer variant="dark" />
    </div>
  );
};

// Event Card Component
interface Event {
  id: number;
  date: string;
  month: string;
  time: string;
  location: string;
  title: string;
  artist: string;
  description: string;
  category: string;
  image: string;
  externalTicketing: boolean;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
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
        <div className="flex flex-col items-center">
          <Button 
            className="w-full lg:w-[180px] h-[52px] font-bold text-base bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white"
          >
            Tickets
          </Button>
          {event.externalTicketing && (
            <span className="flex items-center gap-2 text-sm text-gray-600 mt-2">
              <ExternalLink size={16} aria-hidden="true" />
              Externer Veranstalter
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programm;
