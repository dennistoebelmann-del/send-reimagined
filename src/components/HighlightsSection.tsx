import jazzImage from "@/assets/event-jazz.jpg";
import classicalImage from "@/assets/event-classical.jpg";
import experimentalImage from "@/assets/event-experimental.jpg";

const HighlightsSection = () => {
  const highlights = [
    {
      title: "Fire! Orchestra",
      subtitle: "Mats Gustafsson & Ensemble",
      category: "Jazz",
      date: "06 DEZ",
      image: jazzImage,
    },
    {
      title: "Streichquartett",
      subtitle: "Quatuor Ébène",
      category: "Klassik",
      date: "13 DEZ",
      image: classicalImage,
    },
    {
      title: "Electronic Live",
      subtitle: "Various Artists",
      category: "Experimental",
      date: "20 DEZ",
      image: experimentalImage,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-[1px] bg-[#E47C03]" />
          <h2 className="text-[#E47C03] text-3xl md:text-4xl font-normal italic">
            Highlights
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {highlights.map((event, index) => (
            <div key={index} className="group cursor-pointer w-full sm:w-[365px]">
              <div className="relative overflow-visible bg-black h-[595px] flex flex-col">
                {/* Category Tag - 16px outside left */}
                <div className="absolute top-4 z-10 bg-black px-4 py-2 -left-4">
                  <span className="text-white text-sm font-medium">{event.category}</span>
                </div>
                
                {/* Date Badge - 16px outside left, offset below */}
                <div className="absolute top-14 z-10 bg-[#E47C03] px-4 py-1.5 -left-4">
                  <span className="text-white text-sm font-bold">{event.date}</span>
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
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{event.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
