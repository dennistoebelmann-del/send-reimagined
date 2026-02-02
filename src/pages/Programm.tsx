import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import { Button } from "@/components/ui/button";

// Import event images
import eventClassical from "@/assets/event-classical.jpg";
import eventJazz from "@/assets/event-jazz.jpg";
import eventExperimental from "@/assets/event-experimental.jpg";

// Import collage images
import orchestraImg from "@/assets/collage-orchestra.jpg";
import saxophoneImg from "@/assets/collage-saxophone.jpg";
import celloImg from "@/assets/collage-cello.jpg";
import pianoImg from "@/assets/collage-piano.jpg";
import experimentalImg from "@/assets/collage-experimental.jpg";
import violinImg from "@/assets/collage-violin.jpg";
import drumsImg from "@/assets/collage-drums.jpg";
import audienceImg from "@/assets/collage-audience.jpg";
import heroConcertHall from "@/assets/hero-concert-hall.jpg";

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
    time: "20",
    location: "Sendesaal Bremen",
    title: "Fire! Orchestra",
    artist: "Mats Gustafsson & Ensemble",
    description: "Grootse improvisatie en energie door dit orkest met strijkers, blazers, ritmesectie en elektronica.",
    category: "jazz",
    image: eventJazz,
    externalTicketing: true,
  },
  {
    id: 2,
    date: "Donnerstag, 9. Januar 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Tingvall Trio",
    artist: "Martin Tingvall, Omar Rodriguez Calvo, Jürgen Spiegel",
    description: "Nordischer Jazz trifft auf klassische Einflüsse – melodisch, virtuos und voller Emotionen.",
    category: "jazz",
    image: eventJazz,
    externalTicketing: false,
  },
  {
    id: 3,
    date: "Freitag, 23. Januar 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Esbjörn Svensson Memorial",
    artist: "Dan Berglund & Magnus Öström",
    description: "Ein Abend zu Ehren des legendären schwedischen Pianisten mit seinen ehemaligen Bandkollegen.",
    category: "jazz",
    image: eventJazz,
    externalTicketing: true,
  },
  {
    id: 4,
    date: "Freitag, 13. Dezember 2025",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Kammermusik Abend",
    artist: "Quatuor Ébène",
    description: "Ein außergewöhnliches Streichquartett präsentiert Werke von Beethoven und Schubert in intimer Atmosphäre.",
    category: "klassik",
    image: eventClassical,
    externalTicketing: false,
  },
  {
    id: 5,
    date: "Sonntag, 19. Januar 2026",
    time: "18",
    location: "Sendesaal Bremen",
    title: "Klavier Rezital",
    artist: "Igor Levit",
    description: "Der preisgekrönte Pianist spielt Bachs Goldberg-Variationen in einer unvergesslichen Interpretation.",
    category: "klassik",
    image: eventClassical,
    externalTicketing: false,
  },
  {
    id: 6,
    date: "Samstag, 8. Februar 2026",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Barocke Nacht",
    artist: "Concerto Köln",
    description: "Vivaldi, Bach und Händel in authentischer Aufführungspraxis mit historischen Instrumenten.",
    category: "klassik",
    image: eventClassical,
    externalTicketing: true,
  },
];

// Collage columns for Vielfalt erleben section
const columns = [
  [
    { src: orchestraImg, height: "h-[185px]" },
    { src: saxophoneImg, height: "h-[235px]" },
    { src: celloImg, height: "h-[235px]" },
    { src: pianoImg, height: "h-[235px]" },
  ],
  [
    { src: audienceImg, height: "h-[350px]" },
    { src: orchestraImg, height: "h-[235px]" },
    { src: saxophoneImg, height: "h-[235px]" },
  ],
  [
    { src: violinImg, height: "h-[235px]" },
    { src: drumsImg, height: "h-[350px]" },
    { src: audienceImg, height: "h-[235px]" },
  ],
  [
    { src: pianoImg, height: "h-[198px]" },
    { src: experimentalImg, height: "h-[235px]" },
    { src: violinImg, height: "h-[235px]" },
    { src: drumsImg, height: "h-[235px]" },
  ],
];

const Programm = () => {
  const [activeFilter, setActiveFilter] = useState("alle");

  const filteredEvents = events.filter((event) => {
    return activeFilter === "alle" || event.category === activeFilter;
  });

  // Split events for orange bar divider (after first 3)
  const firstGroup = filteredEvents.slice(0, 3);
  const secondGroup = filteredEvents.slice(3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Compact */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroConcertHall}
            alt="Sendesaal Bremen Concert Hall"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Top gradient for navbar visibility */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
        </div>

        {/* White Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg 
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none" 
            className="w-full h-[80px] md:h-[100px]"
            fill="white"
          >
            <ellipse cx="720" cy="100" rx="900" ry="100" />
          </svg>
        </div>
      </section>

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
                onClick={() => setActiveFilter(cat.id)}
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

          {/* First Group of Events */}
          <div className="space-y-12">
            {firstGroup.map((event, index) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Orange Bars Divider - only show if there are more events */}
      {secondGroup.length > 0 && (
        <OrangeBarsTransition />
      )}

      {/* Second Group of Events */}
      {secondGroup.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-16">
            <div className="space-y-12">
              {secondGroup.map((event, index) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
              <Button 
                className="bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-16 py-4 h-auto text-base"
              >
                Alle Konzerte ansehen
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Orange Bars Transition to Vielfalt Section */}
      <OrangeBarsTransition />

      {/* Vielfalt erleben Section */}
      <section className="bg-white">
        {/* Header */}
        <div className="container mx-auto px-6 md:px-16 pt-16 md:pt-24">
          <div className="text-center mb-8">
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
              Vielfalt erleben
            </h2>
            <p className="text-black text-base md:text-lg max-w-2xl mx-auto">
              Von Klassik über Jazz bis zur Neuen Musik – entdecken Sie die ganze Bandbreite 
              musikalischer Exzellenz im Sendesaal Bremen.
            </p>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[10px] px-0">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-[10px]">
              {column.map((image, imgIndex) => (
                <div key={imgIndex} className={`w-full ${image.height} overflow-hidden`}>
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="container mx-auto px-6 md:px-16 py-16 text-center">
          <Button 
            asChild
            className="bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-16 py-4 h-auto text-base"
          >
            <Link to="/ueber-uns">Über den Sendesaal</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Event Card Component
interface Event {
  id: number;
  date: string;
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
          variant="outline"
          className="flex-1 lg:w-[180px] h-[52px] font-bold text-base text-[#CF3D11] border-[#CF3D11] hover:bg-[#CF3D11]/10 bg-transparent"
        >
          Details
        </Button>
        <Button 
          className="flex-1 lg:w-[180px] h-[52px] font-bold text-base bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white"
        >
          {event.externalTicketing ? "Tickets (externer Veranstalter)" : "Tickets"}
        </Button>
      </div>
    </div>
  );
};

export default Programm;
