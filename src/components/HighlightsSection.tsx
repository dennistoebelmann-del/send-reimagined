import jazzImage from "@/assets/event-jazz.jpg";
import classicalImage from "@/assets/event-classical.jpg";
import experimentalImage from "@/assets/event-experimental.jpg";

const HighlightsSection = () => {
  const highlights = [
    {
      title: "Fire! Orchestra",
      subtitle: "Mats Gustafsson & Ensemble",
      image: jazzImage,
    },
    {
      title: "Streichquartett",
      subtitle: "Quatuor Ébène",
      image: classicalImage,
    },
    {
      title: "Electronic Live",
      subtitle: "Various Artists",
      image: experimentalImage,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-[1px] bg-[#E47C03]" />
          <h2 className="text-[#E47C03] text-3xl md:text-4xl font-normal">
            Highlights
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-200">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-black mb-1 group-hover:text-[#E47C03] transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-600 text-base">{event.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
