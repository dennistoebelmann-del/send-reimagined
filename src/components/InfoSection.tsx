import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Building2, Radio } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.1] uppercase tracking-tighter">
            Ein Resonanzraum für<br />künstlerische Exzellenz
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 font-light">
            Der Sendesaal Bremen wurzelt in einer langen Tradition herausragender Musik 
            und steht zugleich für die stete Suche nach neuen musikalischen Ausdrucksformen 
            und klanglichen Perspektiven.
          </p>
          <Button variant="outline" size="lg" className="font-bold uppercase tracking-wide text-base px-10 py-6 h-auto">
            Über den Sendesaal
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-10 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-primary/10 mb-6">
              <Music className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-5 uppercase tracking-tight">Konzerte</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light">
              270 Sitzplätze und außergewöhnlich gute Akustik für ein unvergessliches Konzerterlebnis.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary font-bold text-base uppercase tracking-wide">
              Zum Programm →
            </Button>
          </Card>

          <Card className="p-10 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-primary/10 mb-6">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-5 uppercase tracking-tight">Mieten</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light">
              Der denkmalgeschützte Sendesaal bietet den perfekten Rahmen für Ihre Veranstaltung.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary font-bold text-base uppercase tracking-wide">
              Mehr erfahren →
            </Button>
          </Card>

          <Card className="p-10 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-primary/10 mb-6">
              <Radio className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-5 uppercase tracking-tight">Produzieren</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light">
              Professionelles Recording und Mastering in historischem Ambiente mit modernster Technik.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary font-bold text-base uppercase tracking-wide">
              Studio-Infos →
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
