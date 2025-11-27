import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Building2, Radio } from "lucide-react";

const InfoSection = () => {
  const services = [
    {
      icon: Music,
      title: "Konzerte erleben",
      description: "270 Sitzplätze und außergewöhnlich gute Akustik für ein unvergessliches Konzerterlebnis.",
      link: "#programm",
    },
    {
      icon: Building2,
      title: "Räume mieten",
      description: "Der denkmalgeschützte Sendesaal bietet den perfekten Rahmen für Ihre Veranstaltung.",
      link: "#mieten",
    },
    {
      icon: Radio,
      title: "Produzieren",
      description: "Professionelles Recording und Mastering in historischem Ambiente mit modernster Technik.",
      link: "#produzieren",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ein Resonanzraum für künstlerische Exzellenz
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Der Sendesaal Bremen ist ein Ort künstlerischer Exzellenz, Neugier und Offenheit. 
            Er wurzelt in einer langen Tradition herausragender Musik – von feinster Klassik 
            über wegweisenden Jazz bis hin zu allen Facetten der Welt- und Popularmusik – und 
            steht zugleich für die stete Suche nach neuen musikalischen Ausdrucksformen und 
            klanglichen Perspektiven.
          </p>
          <Button variant="outline" size="lg">
            Mehr über uns
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-orange transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="outline" asChild>
                  <a href={service.link}>Mehr erfahren</a>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
