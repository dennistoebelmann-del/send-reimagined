import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Music, Accessibility, Lightbulb, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import mietenHero from "@/assets/mieten-hero.jpg";

const hardFacts = [
  {
    icon: Users,
    title: "Kapazität",
    description: "Bis zu 250 Personen",
  },
  {
    icon: Music,
    title: "Ausstattung",
    description: "Steinway D-Flügel, variable Akustik-Elemente, modernes Licht-Equipment",
  },
  {
    icon: Accessibility,
    title: "Barrierefreiheit",
    description: "Alle Räumlichkeiten sind barrierefrei zugänglich",
  },
  {
    icon: Lightbulb,
    title: "Technik",
    description: "Professionelle Ton- und Lichttechnik, Aufnahme­möglichkeiten",
  },
];

const Mieten = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    anfragetyp: "mieten",
    nachricht: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src={mietenHero}
          alt="Sendesaal Bremen – Raum mieten"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-light"
          >
            Ein Raum für Ihre Visionen.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 bg-black px-4 py-2 inline-flex"
          >
            <span className="text-white text-lg md:text-xl font-light">
              Ob Konzert, CD-Aufnahme oder Firmenevent – die weltweit gerühmte Akustik und das
              denkmalgeschützte Ambiente des Sendesaals bieten den perfekten Rahmen.
            </span>
          </motion.div>
        </div>

        {/* Concave white ellipse */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-48 rounded-[50%] bg-white" />
      </section>

      <main className="bg-white">
        {/* OrangeBars */}
        <OrangeBarsTransition />

        {/* Sektion 1: Konzert & Kultur */}
        <section className="pt-16 pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-px bg-primary" />
                  <span className="text-primary text-xl font-light">01</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
                  Konzert &amp; Kultur
                </h2>
                <p className="text-black/80 text-base md:text-lg font-light leading-relaxed">
                  Der Sendesaal bietet mit seiner einzigartigen Akustik den idealen Rahmen für
                  öffentliche Konzerte, Lesungen und kulturelle Veranstaltungen aller Art. 
                  Die intime Atmosphäre mit 250 Plätzen schafft eine unmittelbare Nähe zwischen
                  Künstlern und Publikum, die in größeren Sälen kaum erreichbar ist.
                </p>
                <p className="text-black/80 text-base md:text-lg font-light leading-relaxed mt-4">
                  Von Kammermusik über Jazz bis hin zu zeitgenössischen Formaten – der Saal 
                  verwandelt jedes Konzert in ein besonderes Klangerlebnis.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop"
                  alt="Konzert im Sendesaal"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sektion 2: Business & Events */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden order-2 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                  alt="Business Event im Sendesaal"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-px bg-primary" />
                  <span className="text-primary text-xl font-light">02</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
                  Business &amp; Events
                </h2>
                <p className="text-black/80 text-base md:text-lg font-light leading-relaxed">
                  Tagungen, Symposien und Firmenveranstaltungen gewinnen im denkmalgeschützten 
                  Ambiente des Sendesaals eine ganz besondere Note. Die inspirierende Umgebung 
                  fördert kreatives Denken und produktiven Austausch.
                </p>
                <p className="text-black/80 text-base md:text-lg font-light leading-relaxed mt-4">
                  Modernste Veranstaltungstechnik trifft auf zeitlose Architektur – für Events,
                  die in Erinnerung bleiben.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OrangeBars */}
        <OrangeBarsTransition />

        {/* Technische Daten Grid */}
        <section className="pt-8 pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-black">Hard Facts</h2>
              <div className="mt-4 flex items-center justify-center gap-6">
                <div className="w-10 h-px bg-primary" />
                <p className="text-black/70 text-lg md:text-xl font-light">
                  Alles Wichtige auf einen Blick
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
              {hardFacts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black p-8 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <fact.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-white text-xl font-normal mb-3">{fact.title}</h3>
                  <p className="text-white/70 text-sm font-light leading-relaxed">
                    {fact.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OrangeBars */}
        <OrangeBarsTransition />

        {/* Kontaktformular */}
        <section className="bg-card pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[780px] mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-foreground">Ihre Veranstaltung im Sendesaal.</h2>
                <div className="mt-4 flex items-center justify-center gap-6">
                  <div className="w-10 h-px bg-primary" />
                  <p className="text-muted-foreground text-lg md:text-xl font-light">
                    Wir freuen uns auf Ihre Nachricht
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground mb-3">Vielen Dank!</h3>
                  <p className="text-muted-foreground font-light">
                    Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/80 font-light text-sm">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        maxLength={100}
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-muted border-border text-foreground font-light h-12 placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/80 font-light text-sm">E-Mail</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        maxLength={255}
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-muted border-border text-foreground font-light h-12 placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="betreff" className="text-foreground/80 font-light text-sm">Betreff</Label>
                      <Input
                        id="betreff"
                        type="text"
                        required
                        maxLength={200}
                        aria-required="true"
                        value={formData.betreff}
                        onChange={(e) => setFormData({ ...formData, betreff: e.target.value })}
                        className="bg-muted border-border text-foreground font-light h-12 placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary"
                        placeholder="Betreff Ihrer Anfrage"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="anfragetyp" className="text-foreground/80 font-light text-sm">Anfragetyp</Label>
                      <Select
                        value={formData.anfragetyp}
                        onValueChange={(value) => setFormData({ ...formData, anfragetyp: value })}
                      >
                        <SelectTrigger className="bg-muted border-border text-foreground font-light h-12 focus:ring-primary">
                          <SelectValue placeholder="Bitte wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mieten">Mieten</SelectItem>
                          <SelectItem value="produzieren">Produzieren</SelectItem>
                          <SelectItem value="tickets">Tickets</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nachricht" className="text-foreground/80 font-light text-sm">Nachricht</Label>
                    <Textarea
                      id="nachricht"
                      required
                      maxLength={2000}
                      rows={6}
                      aria-required="true"
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                      className="bg-muted border-border text-foreground font-light placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary resize-none"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 h-auto text-base mt-2"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Absenden"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Mieten;
