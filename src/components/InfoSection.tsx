import { Button } from "@/components/ui/button";

// Import collage images
import orchestraImg from "@/assets/collage-orchestra.jpg";
import saxophoneImg from "@/assets/collage-saxophone.jpg";
import celloImg from "@/assets/collage-cello.jpg";
import pianoImg from "@/assets/collage-piano.jpg";
import experimentalImg from "@/assets/collage-experimental.jpg";
import violinImg from "@/assets/collage-violin.jpg";
import drumsImg from "@/assets/collage-drums.jpg";
import audienceImg from "@/assets/collage-audience.jpg";

const InfoSection = () => {
  // Four columns of images with different heights
  const columns = [
    [
      { src: orchestraImg, height: "h-[185px]" },
      { src: saxophoneImg, height: "h-[235px]" },
      { src: celloImg, height: "h-[235px]" },
      { src: pianoImg, height: "h-[235px]" },
      { src: experimentalImg, height: "h-[235px]" },
      { src: violinImg, height: "h-[235px]" },
      { src: drumsImg, height: "h-[235px]" },
    ],
    [
      { src: audienceImg, height: "h-[528px]" },
      { src: orchestraImg, height: "h-[235px]" },
      { src: saxophoneImg, height: "h-[235px]" },
      { src: celloImg, height: "h-[235px]" },
      { src: pianoImg, height: "h-[235px]" },
      { src: experimentalImg, height: "h-[441px]" },
    ],
    [
      { src: violinImg, height: "h-[235px]" },
      { src: drumsImg, height: "h-[408px]" },
      { src: audienceImg, height: "h-[529px]" },
      { src: orchestraImg, height: "h-[235px]" },
      { src: saxophoneImg, height: "h-[445px]" },
      { src: celloImg, height: "h-[235px]" },
    ],
    [
      { src: pianoImg, height: "h-[198px]" },
      { src: experimentalImg, height: "h-[235px]" },
      { src: violinImg, height: "h-[235px]" },
      { src: drumsImg, height: "h-[235px]" },
      { src: audienceImg, height: "h-[627px]" },
      { src: orchestraImg, height: "h-[235px]" },
    ],
  ];

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-16 pt-16 md:pt-24">
        <div className="text-center mb-8">
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
            Vielfalt erleben
          </h2>
          <div className="flex items-center justify-center gap-6">
            <div className="w-10 h-[1px] bg-[#E47C03]" />
            <p className="text-black text-base md:text-lg max-w-2xl">
              Von Klassik über Jazz bis zur Neuen Musik – entdecken Sie die ganze Bandbreite 
              musikalischer Exzellenz im Sendesaal Bremen.
            </p>
          </div>
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
          className="bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-16 py-4 h-auto text-base"
        >
          Über den Sendesaal
        </Button>
      </div>
    </section>
  );
};

export default InfoSection;
