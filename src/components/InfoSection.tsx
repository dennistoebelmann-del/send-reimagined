import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Building2, Radio } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Ein Resonanzraum für<br />künstlerische Exzellenz
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Der Sendesaal Bremen wurzelt in einer langen Tradition herausragender Musik 
            und steht zugleich für die stete Suche nach neuen musikalischen Ausdrucksformen 
            und klanglichen Perspektiven.
          </p>
          <Button variant="outline" size="lg" className="font-medium">
            Über den Sendesaal
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-10 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-primary/10 mb-6">
              <Music className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Konzerte</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              270 Sitzplätze und außergewöhnlich gute Akustik für ein unvergessliches Konzerterlebnis.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary font-medium">
              Zum Programm →
            </Button>
          </Card>

          <Card className="p-10 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-primary/10 mb-6">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mieten</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Der denkmalgeschützte Sendesaal bietet den perfekten Rahmen für Ihre Veranstaltung.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary font-medium">
              Mehr erfahren →
            </Button>
          </Card>

          <Card className="p-10 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-primary/10 mb-6">
              <Radio className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Produzieren</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professionelles Recording und Mastering in historischem Ambiente mit modernster Technik.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary font-medium">
              Studio-Infos →
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
