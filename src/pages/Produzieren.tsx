import { useState } from "react";
import { motion } from "framer-motion";
import { Radio, Piano, SlidersHorizontal, Send } from "lucide-react";
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
import produktionHero from "@/assets/produktion-hero.jpg";

const techFacts = [
  {
    icon: Radio,
    title: "Regie",
    description: "Modernste digitale und analoge Signalwege mit direkter Sichtverbindung in den Saal.",
  },
  {
    icon: Piano,
    title: "Instrumente",
    description: "Steinway D-Flügel (D-274), regelmäßig gewartet und auf höchstem Niveau gestimmt.",
  },
  {
    icon: SlidersHorizontal,
    title: "Variabilität",
    description: "Anpassbare Nachhallzeiten für verschiedene Besetzungen und musikalische Genres.",
  },
];

const Produzieren = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    anfragetyp: "produzieren",
    nachricht: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
          src={produktionHero}
          alt="Mikrofon im Sendesaal Bremen – Musikproduktion"
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
            Der perfekte Klang für Ihre Aufnahme.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-white/90 text-lg md:text-xl font-light max-w-[720px] leading-relaxed"
          >
            Von Solo-Instrumenten bis zum großen Orchester: Die weltweit gerühmte Akustik
            des Sendesaals bietet ideale Bedingungen für High-End-Produktionen.
          </motion.p>
        </div>

        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-48 rounded-[50%] bg-white" />
      </section>

      <main className="bg-white">
        <OrangeBarsTransition />

        {/* Modul 1: Präzision & Atmosphäre */}
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
                  Präzision &amp; Atmosphäre
                </h2>
                <p className="text-black/80 text-base md:text-lg font-light leading-relaxed">
                  Die einzigartige Raumakustik des Sendesaals wird weltweit geschätzt – von
                  Klassik-Ensembles ebenso wie von Jazz-Formationen und modernen Produktionen.
                  Der Nachhall von 1,8 Sekunden schafft eine natürliche Wärme, die jede
                  Aufnahme veredelt.
                </p>
                <p className="text-black/80 text-base md:text-lg font-light leading-relaxed mt-4">
                  Die Holzlamellen an den Wänden und die sorgfältig berechneten Raumproportionen
                  sorgen für eine Klangqualität, die in modernen Studios kaum zu reproduzieren ist.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
                  alt="Akustik im Sendesaal"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modul 2: Technik auf Knopfdruck */}
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
                  src="https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&h=600&fit=crop"
                  alt="Studio-Regie im Sendesaal"
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
                  Technik auf Knopfdruck
                </h2>
                <p className="text-black/80 text-base md:text-lg font-light leading-relaxed">
                  Die voll ausgestattete Regie verfügt über modernste digitale und analoge
                  Signalwege. Durch die direkte Sichtverbindung in den Saal entsteht eine
                  perfekte Kommunikation zwischen Künstlern und Tonmeistern.
                </p>
                <p className="text-black/80 text-base md:text-lg font-light leading-relaxed mt-4">
                  Der hervorragende Steinway D Konzertflügel (D-274) steht jederzeit bereit –
                  regelmäßig gewartet und auf höchstem Niveau gestimmt für Ihre Produktion.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <OrangeBarsTransition />

        {/* Technical Grid */}
        <section className="pt-8 pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-black">Technische Vorzüge</h2>
              <div className="mt-4 flex items-center justify-center gap-6">
                <div className="w-10 h-px bg-primary" />
                <p className="text-black/70 text-lg md:text-xl font-light">
                  Alles für Ihre Produktion
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {techFacts.map((fact, index) => (
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
                <h2 className="text-4xl md:text-5xl font-light text-foreground">Planen Sie Ihre Produktion.</h2>
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
                        defaultValue="produzieren"
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

export default Produzieren;
