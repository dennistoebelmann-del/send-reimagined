import { Link } from "react-router-dom";
import jazzImage from "@/assets/event-jazz.jpg";
import classicalImage from "@/assets/event-classical.jpg";
import experimentalImage from "@/assets/event-experimental.jpg";

const HighlightsSection = () => {
  const highlights = [
    {
      id: "1",
      title: "Fire! Orchestra",
      subtitle: "Mats Gustafsson & Ensemble",
      category: "Jazz",
      date: "06 DEZ",
      image: jazzImage,
    },
    {
      id: "4",
      title: "Streichquartett",
      subtitle: "Quatuor Ébène",
      category: "Klassik",
      date: "13 DEZ",
      image: classicalImage,
    },
    {
      id: "7",
      title: "Electronic Live",
      subtitle: "Various Artists",
      category: "Experimental",
      date: "20 DEZ",
      image: experimentalImage,
    },
  ];

  return (
    <section className="pt-6 md:pt-10 pb-16 md:pb-24 bg-black">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-[1px] bg-[#E47C03]" />
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-normal">
            Highlights
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((event, index) => (
            <Link key={index} to={`/event/${event.id}`} className="group cursor-pointer block">
              <div className="relative overflow-visible bg-black aspect-[365/595] flex flex-col">
                {/* Category Tag - 50% above card */}
                <div className="absolute -top-5 z-10 bg-black px-4 py-2.5 -left-4">
                  <span className="text-white text-xl font-bold">{event.category}</span>
                </div>
                
                {/* Date Badge - directly below category */}
                <div className="absolute top-8 z-10 bg-[#CF3D11] px-4 py-2.5 -left-4">
                  <span className="text-white text-xl font-bold">{event.date}</span>
                </div>
                
                {/* Image */}
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#E47C03]/0 group-hover:bg-[#E47C03]/20 transition-all duration-500" />
                </div>
                
                {/* Title Footer */}
                <div className="bg-black px-4 py-5">
                  <h3 className="text-2xl md:text-4xl font-normal text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-xl font-normal">{event.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
