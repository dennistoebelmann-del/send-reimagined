import { useState } from "react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { CalendarIcon, List, LayoutGrid } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Import event images
import eventClassical from "@/assets/event-classical.jpg";
import eventJazz from "@/assets/event-jazz.jpg";
import eventExperimental from "@/assets/event-experimental.jpg";
import collageOrchestra from "@/assets/collage-orchestra.jpg";
import collagePiano from "@/assets/collage-piano.jpg";
import collageSaxophone from "@/assets/collage-saxophone.jpg";
import collageCello from "@/assets/collage-cello.jpg";
import collageDrums from "@/assets/collage-drums.jpg";

const categories = [
  { id: "alle", label: "Alle" },
  { id: "klassik", label: "Klassik" },
  { id: "jazz", label: "Jazz" },
  { id: "weltmusik", label: "Weltmusik" },
  { id: "experimentell", label: "Experimentell" },
  { id: "popular", label: "Popular" },
];

const events = [
  {
    id: 1,
    date: new Date(2025, 11, 2),
    time: "20:00",
    title: "Bremer Barockorchester",
    subtitle: "Meisterwerke des 17. Jahrhunderts",
    category: "klassik",
    tags: ["Klassik", "Barock", "Orchester", "Historisch"],
    image: collageOrchestra,
  },
  {
    id: 2,
    date: new Date(2025, 11, 5),
    time: "20:00",
    title: "Nordic Jazz Trio",
    subtitle: "Svensson, Lund & Hansen",
    category: "jazz",
    tags: ["Jazz", "Nordic", "Modern Jazz", "Trio"],
    image: collageSaxophone,
  },
  {
    id: 3,
    date: new Date(2025, 11, 8),
    time: "19:30",
    title: "Ensemble Resonanz",
    subtitle: "Zeitgenössische Kammermusik",
    category: "experimentell",
    tags: ["Experimentell", "Kammermusik", "Zeitgenössisch"],
    image: eventExperimental,
  },
  {
    id: 4,
    date: new Date(2025, 11, 12),
    time: "20:00",
    title: "Clara Schumann Klavierabend",
    subtitle: "Romantische Meisterwerke",
    category: "klassik",
    tags: ["Klassik", "Klavier", "Romantik", "Solo"],
    image: collagePiano,
  },
  {
    id: 5,
    date: new Date(2025, 11, 15),
    time: "21:00",
    title: "Afro-Cuban All Stars",
    subtitle: "Rhythmen aus Havanna",
    category: "weltmusik",
    tags: ["Weltmusik", "Latin", "Cuba", "Ensemble"],
    image: collageDrums,
  },
  {
    id: 6,
    date: new Date(2025, 11, 18),
    time: "20:00",
    title: "Streichquartett Bremen",
    subtitle: "Beethoven & Bartók",
    category: "klassik",
    tags: ["Klassik", "Streichquartett", "Kammermusik"],
    image: collageCello,
  },
  {
    id: 7,
    date: new Date(2025, 11, 20),
    time: "20:30",
    title: "Electronic Soundscapes",
    subtitle: "Live-Elektronik und Visuals",
    category: "experimentell",
    tags: ["Experimentell", "Elektronik", "Visuals", "Live"],
    image: eventExperimental,
  },
  {
    id: 8,
    date: new Date(2025, 11, 22),
    time: "20:00",
    title: "Jazz Standards Night",
    subtitle: "Tribute to the Great American Songbook",
    category: "jazz",
    tags: ["Jazz", "Standards", "Swing", "Quintet"],
    image: eventJazz,
  },
  {
    id: 9,
    date: new Date(2026, 0, 10),
    time: "19:00",
    title: "Neujahrskonzert",
    subtitle: "Wiener Walzer & Operettenmelodien",
    category: "klassik",
    tags: ["Klassik", "Neujahr", "Walzer", "Festlich"],
    image: eventClassical,
  },
  {
    id: 10,
    date: new Date(2026, 0, 15),
    time: "20:00",
    title: "Flamenco Fusion",
    subtitle: "Traditionell trifft Modern",
    category: "weltmusik",
    tags: ["Weltmusik", "Flamenco", "Fusion", "Spanien"],
    image: collageDrums,
  },
];

const Programm = () => {
  const [activeFilter, setActiveFilter] = useState("alle");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const filteredEvents = events.filter((event) => {
    const categoryMatch = activeFilter === "alle" || event.category === activeFilter;
    const startMatch = !startDate || event.date >= startDate;
    const endMatch = !endDate || event.date <= endDate;
    return categoryMatch && startMatch && endMatch;
  });

  const formatDateGerman = (date: Date) => {
    const dayNames = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];
    const day = dayNames[date.getDay()];
    return `${day} ${format(date, "d. MMMM yyyy", { locale: de }).toUpperCase()}`;
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <main className="pt-36 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-primary font-bold uppercase tracking-wide mb-2">
              Saison 2025/26
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black">
              Programm
            </h1>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={cn(
                    "px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all border",
                    activeFilter === cat.id
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-gray-300 hover:border-black"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Date Filters & View Toggle */}
            <div className="flex items-center gap-4">
              {/* Start Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[150px] justify-start text-left font-normal border-gray-300 text-black hover:bg-gray-50",
                      !startDate && "text-gray-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd.MM.yyyy") : "Von"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              {/* End Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[150px] justify-start text-left font-normal border-gray-300 text-black hover:bg-gray-50",
                      !endDate && "text-gray-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd.MM.yyyy") : "Bis"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              {/* View Toggle */}
              <div className="flex items-center border border-gray-300">
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-2.5 transition-colors",
                    viewMode === "list" ? "bg-black text-white" : "text-gray-500 hover:text-black"
                  )}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-2.5 transition-colors",
                    viewMode === "grid" ? "bg-black text-white" : "text-gray-500 hover:text-black"
                  )}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Events List */}
          {viewMode === "list" ? (
            <div className="space-y-0">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="grid grid-cols-1 md:grid-cols-[180px_200px_1fr_auto] gap-6 items-center py-8 border-t border-gray-200"
                >
                  {/* Date & Time */}
                  <div>
                    <p className="text-primary font-bold text-sm uppercase tracking-wide">
                      {formatDateGerman(event.date)}
                    </p>
                    <p className="text-3xl font-black text-black">{event.time}</p>
                  </div>

                  {/* Image */}
                  <div className="w-full h-32 md:h-28">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight mb-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{event.subtitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-bold uppercase tracking-wide border border-gray-300 text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="font-bold uppercase tracking-wide px-8">
                    Tickets
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="group">
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-primary font-bold text-sm uppercase tracking-wide mb-1">
                    {formatDateGerman(event.date)} · {event.time}
                  </p>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-black">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{event.subtitle}</p>
                  <Button className="font-bold uppercase tracking-wide w-full">
                    Tickets
                  </Button>
                </div>
              ))}
            </div>
          )}

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                Keine Veranstaltungen gefunden.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programm;
