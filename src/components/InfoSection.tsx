import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const categories = ["Alle", "Geschichte", "Weltklasse", "Konzerte", "Produktion"] as const;
  type Category = typeof categories[number];
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");

  // Category colors for the small label badge on each tile
  const categoryColor: Record<string, string> = {
    "Geschichte": "#E17900",
    "Weltklasse": "#E17900",
    "Konzerte": "#E17900",
    "Produktion": "#E17900",
  };

  type Tile = {
    src: string;
    height: string;
    category: "Geschichte" | "Weltklasse" | "Konzerte" | "Produktion";
    title: string;
    text: string;
  };

  // Four columns of images with different heights – inhaltlich nach Themen sortiert:
  // Geschichte/Bau, Weltklasse-Künstler:innen, stimmungsvolle Konzerte, Produktion (Grammy)
  const columns: Tile[][] = [
    [
      { src: orchestraImg, height: "h-[185px]", category: "Geschichte", title: "Baujahr 1952", text: "Erbaut als Sendesaal von Radio Bremen – einer der akustisch besten Konzertsäle Europas." },
      { src: audienceImg, height: "h-[235px]", category: "Geschichte", title: "Holzkassettendecke", text: "Die schwebende Holzdecke sorgt für die berühmte Wärme und Klarheit im Klangbild." },
      { src: celloImg, height: "h-[235px]", category: "Weltklasse", title: "Elisabeth Leonskaja", text: "Eine der bedeutendsten Pianistinnen unserer Zeit – zu Gast im Sendesaal." },
      { src: pianoImg, height: "h-[235px]", category: "Weltklasse", title: "Alfred Brendel", text: "Klavierlegende mit unvergesslichen Recitals auf unserer Bühne." },
      { src: experimentalImg, height: "h-[235px]", category: "Konzerte", title: "Neue Musik", text: "Experimentelle Klänge und zeitgenössische Werke in lebendiger Akustik." },
      { src: violinImg, height: "h-[235px]", category: "Konzerte", title: "Kammermusik", text: "Intime Konzerte – jedes Detail hörbar, jeder Atemzug spürbar." },
      { src: drumsImg, height: "h-[235px]", category: "Konzerte", title: "Band & Beats", text: "Pop, Jazz, Weltmusik – farbenfroh ausgeleuchtet, kraftvoll im Sound." },
    ],
    [
      { src: audienceImg, height: "h-[528px]", category: "Geschichte", title: "1.150 m³ Raumvolumen", text: "Optimale Nachhallzeit von ca. 2,1 Sekunden – einzigartig für Aufnahmen und Konzerte." },
      { src: orchestraImg, height: "h-[235px]", category: "Weltklasse", title: "Keith Jarrett", text: "Jazz-Ikone – seine Konzerte im Sendesaal sind unvergessen." },
      { src: saxophoneImg, height: "h-[235px]", category: "Weltklasse", title: "Internationale Ensembles", text: "Von der Deutschen Kammerphilharmonie bis zu Weltmusik-Größen." },
      { src: celloImg, height: "h-[235px]", category: "Produktion", title: "Grammy 2022", text: "Eine im Sendesaal entstandene Produktion wurde mit dem Grammy ausgezeichnet." },
      { src: pianoImg, height: "h-[235px]", category: "Produktion", title: "Mischpult & Regie", text: "Modernste Aufnahmetechnik trifft auf legendäre Saalakustik." },
      { src: experimentalImg, height: "h-[441px]", category: "Konzerte", title: "Weltmusik", text: "Klänge aus aller Welt – von indischen Ragas bis zu afrikanischen Rhythmen." },
    ],
    [
      { src: violinImg, height: "h-[235px]", category: "Weltklasse", title: "Solist:innen von Weltrang", text: "Geiger:innen, Sänger:innen und Dirigent:innen aus der internationalen Spitzenklasse." },
      { src: drumsImg, height: "h-[408px]", category: "Konzerte", title: "Buntes Konzertlicht", text: "Stimmungsvoll inszeniert – jede Show wird zum Erlebnis." },
      { src: audienceImg, height: "h-[529px]", category: "Geschichte", title: "Schwebender Boden", text: "Bautechnisch entkoppelt – kein Trittschall, perfekte Klangruhe." },
      { src: orchestraImg, height: "h-[235px]", category: "Produktion", title: "Grammy 2024", text: "Zweite Grammy-Auszeichnung für eine im Sendesaal produzierte Aufnahme." },
      { src: saxophoneImg, height: "h-[445px]", category: "Produktion", title: "Mikrofonierung", text: "Bis zu 96 Kanäle gleichzeitig – Aufnahmen in Referenzqualität." },
      { src: celloImg, height: "h-[235px]", category: "Weltklasse", title: "Kammerorchester", text: "Renommierte Klangkörper schätzen die einmalige Saalakustik." },
    ],
    [
      { src: pianoImg, height: "h-[198px]", category: "Geschichte", title: "Denkmalgeschützt", text: "Architektonisches Erbe der Nachkriegsmoderne – sorgsam erhalten." },
      { src: experimentalImg, height: "h-[235px]", category: "Konzerte", title: "Jazz im Sendesaal", text: "Vom Solo-Piano bis zur Big Band – Jazz in seiner ganzen Bandbreite." },
      { src: violinImg, height: "h-[235px]", category: "Produktion", title: "Ensembles in Aktion", text: "Live-Mitschnitte und Studioaufnahmen unter einem Dach." },
      { src: drumsImg, height: "h-[235px]", category: "Konzerte", title: "Orchesterkonzerte", text: "Großbesetzte Werke entfalten hier ihre volle dynamische Kraft." },
      { src: audienceImg, height: "h-[627px]", category: "Weltklasse", title: "Gastspiele", text: "Künstler:innen aus aller Welt – jede Saison neue musikalische Begegnungen." },
      { src: orchestraImg, height: "h-[235px]", category: "Produktion", title: "Tonmeister:innen", text: "Erfahrene Profis begleiten jede Produktion mit höchster Präzision." },
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
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-10 h-[1px] bg-primary" />
            <p className="text-black text-base md:text-lg max-w-2xl">
              Geschichte, Weltklasse-Künstler:innen, stimmungsvolle Konzerte und
              Grammy-prämierte Produktionen – fahren Sie über die Bilder und
              entdecken Sie, was den Sendesaal Bremen einzigartig macht.
            </p>
          </div>

          {/* Filter Tab Bar */}
          <div className="flex flex-wrap items-center justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-4 text-base font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-black"
                    : "bg-transparent text-black hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[10px] px-0">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-[10px]">
            {column
              .filter((image) => activeCategory === "Alle" || image.category === activeCategory)
              .map((image, imgIndex) => (
              <motion.div
                key={`${activeCategory}-${imgIndex}`}
                className={`group relative w-full ${image.height} overflow-hidden`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: imgIndex * 0.08, ease: "easeOut" }}
              >
                <img
                  src={image.src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category badge – always visible */}
                <div
                  className="absolute top-3 left-3 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white"
                  style={{ backgroundColor: categoryColor[image.category] }}
                >
                  {image.category}
                </div>

                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-5">
                  <h3 className="text-white text-base md:text-lg font-normal mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-primary mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75" />
                  <p className="text-white/90 text-xs md:text-sm font-light leading-snug translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {image.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="container mx-auto px-6 md:px-16 py-16 text-center">
        <Button 
          className="bg-primary hover:bg-primary/90 text-black font-bold px-16 py-4 h-auto text-base"
        >
          Über den Sendesaal
        </Button>
      </div>
    </section>
  );
};

export default InfoSection;
