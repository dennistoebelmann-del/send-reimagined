import { motion } from "framer-motion";
import { Ticket, QrCode, ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import gutscheinImage from "@/assets/gutschein-hero.jpg";

const Tickets = () => {
  const faqItems = [
    {
      question: "Gibt es eine Abendkasse?",
      answer: "Ja, sofern noch Karten verfügbar sind, öffnet unsere Abendkasse 45 Minuten vor Veranstaltungsbeginn. Wir empfehlen jedoch den Vorverkauf, da viele Konzerte ausverkauft sind."
    },
    {
      question: "Ist der Sendesaal barrierefrei?",
      answer: "Der Sendesaal ist barrierefrei zugänglich. Es gibt Rollstuhlplätze im Parkett sowie eine behindertengerechte Toilette. Bitte informieren Sie uns bei der Buchung über Ihre Bedürfnisse."
    },
    {
      question: "Wie sind die Öffnungszeiten der Garderobe?",
      answer: "Die Garderobe öffnet 45 Minuten vor Konzertbeginn und bleibt bis 30 Minuten nach Ende der Veranstaltung geöffnet. Die Garderobennutzung ist kostenfrei."
    },
    {
      question: "Gibt es Ermäßigungen für Studenten?",
      answer: "Ja, Studierende erhalten gegen Vorlage eines gültigen Studierendenausweises eine Ermäßigung von 20% auf reguläre Eintrittspreise. Diese Ermäßigung gilt nicht für Sonderveranstaltungen."
    },
    {
      question: "Kann ich meine Tickets umtauschen oder stornieren?",
      answer: "Ein Umtausch oder eine Erstattung ist leider nicht möglich. Bei Ausfall einer Veranstaltung erhalten Sie selbstverständlich den vollen Kaufpreis zurück."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with SVG Pattern */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        {/* Abstract Sound Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="soundWaves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path 
                  d="M0 10 Q25 0, 50 10 T100 10" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="0.5"
                />
              </pattern>
              <pattern id="notationLines" x="0" y="0" width="50" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="16" x2="50" y2="16" stroke="white" strokeWidth="0.3" />
                <line x1="0" y1="24" x2="50" y2="24" stroke="white" strokeWidth="0.3" />
                <line x1="0" y1="32" x2="50" y2="32" stroke="white" strokeWidth="0.3" />
                <line x1="0" y1="40" x2="50" y2="40" stroke="white" strokeWidth="0.3" />
                <line x1="0" y1="48" x2="50" y2="48" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#soundWaves)" />
            <rect width="100%" height="100%" fill="url(#notationLines)" opacity="0.5" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-16 text-center pt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider mb-6"
          >
            Ihr Weg zum Konzert
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Informationen zu Vorverkauf, Gutscheinen und Ihrem Besuch.
          </motion.p>
        </div>

        {/* Concave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="relative h-20 bg-white">
            <div 
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[200%] h-40 rounded-[50%] bg-white"
            />
          </div>
        </div>
      </section>

      {/* Ticket Provider Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide mb-4">
              Tickets kaufen
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Wählen Sie Ihren bevorzugten Ticketanbieter für Ihren Konzertbesuch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Nordwest Ticket Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                    <Ticket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-4">
                    Nordwest Ticket
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow">
                    Unser Partner für die meisten Konzerte, Abonnements und Reihen.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-black text-black hover:bg-black hover:text-white transition-colors"
                    asChild
                  >
                    <a href="https://www.nordwest-ticket.de" target="_blank" rel="noopener noreferrer">
                      Zum Online-Shop (NWT)
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* venticks Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                    <QrCode className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-4">
                    venticks
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow">
                    Für ausgewählte Sonderveranstaltungen und Direktbuchungen.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-black text-black hover:bg-black hover:text-white transition-colors"
                    asChild
                  >
                    <a href="https://www.venticks.de" target="_blank" rel="noopener noreferrer">
                      Zu venticks
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gutscheine Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <img 
                src={gutscheinImage} 
                alt="Geschenkgutschein für den Sendesaal"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide mb-6">
                Klang verschenken.
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Gutscheine für den Sendesaal sind das perfekte Geschenk für Musikliebhaber. 
                Einlösbar für alle Eigenveranstaltungen.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide px-8 py-4 h-auto"
              >
                Gutschein bestellen
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide">
              Häufige Fragen (FAQ)
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="text-left text-black font-medium hover:text-primary hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-4">Noch Fragen offen?</p>
            <Link 
              to="/kontakt" 
              className="inline-flex items-center text-black font-medium hover:text-primary transition-colors group"
            >
              Kontaktieren Sie unser Ticket-Büro
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tickets;
