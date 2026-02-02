import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Timer, Coffee, Building2, Ticket, Share2, CalendarPlus, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Import images
import eventClassical from "@/assets/event-classical.jpg";
import eventJazz from "@/assets/event-jazz.jpg";
import eventExperimental from "@/assets/event-experimental.jpg";

// Mock event data
const eventsData: Record<string, EventData> = {
  "1": {
    id: 1,
    title: "Fire! Orchestra",
    artist: "Mats Gustafsson & Ensemble",
    category: "Jazz @ Sendesaal",
    date: "Sa, 6. Dez 2025",
    time: "20:00",
    price: "45,00 €",
    image: eventJazz,
    isExternalTicket: true,
    externalPartner: "Nordwest Ticket",
    admission: "19:00 Uhr",
    duration: "ca. 2 Stunden",
    pause: "20 Minuten",
    organizer: "Sendesaal Bremen e.V.",
    series: "Jazz im Sendesaal",
    leadText: "Ein monumentales Erlebnis erwartet Sie: Das Fire! Orchestra unter der Leitung von Mats Gustafsson bringt die Energie und Leidenschaft des Free Jazz in einer orchestralen Dimension auf die Bühne des Sendesaals.",
    description: `Das Fire! Orchestra ist mehr als nur ein Ensemble – es ist eine musikalische Revolution. Mit über 20 Musikern, darunter Streichern, Bläsern, einer kraftvollen Rhythmussektion und experimenteller Elektronik, erschaffen sie einen Sound, der seinesgleichen sucht.

Mats Gustafsson, der schwedische Saxophonist und Bandleader, ist bekannt für seine kompromisslose Herangehensweise an die Musik. Er vereint in diesem Projekt Musiker aus der Jazz-, Rock- und Avantgarde-Szene zu einem kollektiven Kraftwerk der Improvisation.

Der Abend verspricht eine intensive Reise durch verschiedene musikalische Landschaften – von meditativen, fast orchestralen Passagen bis hin zu explosiven, freien Improvisationen, die das Publikum in ihren Bann ziehen werden.`,
    quotes: [
      {
        text: "Eine der aufregendsten Live-Erfahrungen der letzten Jahre.",
        source: "Süddeutsche Zeitung"
      },
      {
        text: "Gustafsson und sein Orchester spielen, als gäbe es kein Morgen.",
        source: "Die Zeit"
      }
    ],
    youtubeId: "dQw4w9WgXcQ"
  },
  "2": {
    id: 2,
    title: "Tingvall Trio",
    artist: "Martin Tingvall, Omar Rodriguez Calvo, Jürgen Spiegel",
    category: "Jazz @ Sendesaal",
    date: "Do, 9. Jan 2026",
    time: "20:00",
    price: "38,00 €",
    image: eventJazz,
    isExternalTicket: false,
    admission: "19:00 Uhr",
    duration: "ca. 2 Stunden",
    pause: "20 Minuten",
    organizer: "Sendesaal Bremen e.V.",
    series: "Jazz im Sendesaal",
    leadText: "Das Tingvall Trio gehört zu den erfolgreichsten europäischen Jazz-Formationen der Gegenwart. Mit ihrer einzigartigen Mischung aus nordischer Melancholie und temperamentvoller Virtuosität begeistern sie weltweit ihr Publikum.",
    description: `Martin Tingvall am Klavier, Omar Rodriguez Calvo am Kontrabass und Jürgen Spiegel am Schlagzeug – diese drei Musiker haben einen unverwechselbaren Sound kreiert, der Jazz-Puristen ebenso anspricht wie Liebhaber klassischer Musik.

Ihre Kompositionen erzählen Geschichten: von der Weite skandinavischer Landschaften, von kubanischen Rhythmen und von der emotionalen Tiefe, die nur akustische Instrumente in perfekter Harmonie erzeugen können.

Im Sendesaal präsentiert das Trio sein neuestes Programm und nimmt das Publikum mit auf eine musikalische Reise voller überraschender Wendungen und unvergesslicher Melodien.`,
    quotes: [
      {
        text: "Nordischer Jazz in Perfektion.",
        source: "Jazz Thing"
      }
    ],
    youtubeId: "dQw4w9WgXcQ"
  },
  "3": {
    id: 3,
    title: "Esbjörn Svensson Memorial",
    artist: "Dan Berglund & Magnus Öström",
    category: "Jazz @ Sendesaal",
    date: "Fr, 23. Jan 2026",
    time: "20:00",
    price: "42,00 €",
    image: eventJazz,
    isExternalTicket: true,
    externalPartner: "Eventim",
    admission: "19:00 Uhr",
    duration: "ca. 2 Stunden",
    pause: "20 Minuten",
    organizer: "Jazz im Sendesaal",
    series: "Jazz im Sendesaal",
    leadText: "Ein Abend zu Ehren des legendären schwedischen Pianisten Esbjörn Svensson, präsentiert von seinen ehemaligen Bandkollegen Dan Berglund und Magnus Öström.",
    description: `Esbjörn Svensson war einer der einflussreichsten europäischen Jazz-Pianisten seiner Generation. Sein viel zu früher Tod im Jahr 2008 hinterließ eine Lücke in der Jazzwelt, die bis heute spürbar ist.

Dan Berglund (Bass) und Magnus Öström (Schlagzeug), die gemeinsam mit Svensson das legendäre E.S.T. bildeten, haben sich zusammengefunden, um das musikalische Erbe ihres Freundes zu ehren.

Der Abend wird eine emotionale Reise durch das Repertoire von E.S.T., neu interpretiert und mit Gastmusikern präsentiert, die den Geist von Esbjörns Musik weitertragen.`,
    quotes: [
      {
        text: "Eine würdige Hommage an einen der größten europäischen Jazzmusiker.",
        source: "Frankfurter Allgemeine"
      }
    ],
    youtubeId: "dQw4w9WgXcQ"
  },
  "4": {
    id: 4,
    title: "Kammermusik Abend",
    artist: "Quatuor Ébène",
    category: "Klassik @ Sendesaal",
    date: "Fr, 13. Dez 2025",
    time: "20:00",
    price: "55,00 €",
    image: eventClassical,
    isExternalTicket: false,
    admission: "19:00 Uhr",
    duration: "ca. 2 Stunden",
    pause: "20 Minuten",
    organizer: "Sendesaal Bremen e.V.",
    series: "Klassik im Sendesaal",
    leadText: "Das Quatuor Ébène zählt zu den herausragendsten Streichquartetten unserer Zeit. Ihr Spiel verbindet technische Perfektion mit leidenschaftlicher Musikalität.",
    description: `Mit Werken von Beethoven und Schubert präsentiert das französische Ensemble einen Abend, der die intime Atmosphäre des Sendesaals perfekt zur Geltung bringt.

Das Quatuor Ébène ist bekannt für seine außergewöhnliche Vielseitigkeit – von klassischen Werken über Zeitgenössisches bis hin zu Jazz-Improvisationen reicht ihr Repertoire. An diesem Abend konzentrieren sie sich auf die großen Werke der Wiener Klassik und Romantik.

Die einzigartige Akustik des Sendesaals bietet den idealen Rahmen für diese Kammermusik auf höchstem Niveau.`,
    quotes: [
      {
        text: "Ein Streichquartett der Extraklasse.",
        source: "The Guardian"
      }
    ],
    youtubeId: "dQw4w9WgXcQ"
  },
  "5": {
    id: 5,
    title: "Klavier Rezital",
    artist: "Igor Levit",
    category: "Klassik @ Sendesaal",
    date: "So, 19. Jan 2026",
    time: "18:00",
    price: "65,00 €",
    image: eventClassical,
    isExternalTicket: false,
    admission: "17:00 Uhr",
    duration: "ca. 2,5 Stunden",
    pause: "20 Minuten",
    organizer: "Sendesaal Bremen e.V.",
    series: "Klavierabende",
    leadText: "Igor Levit, einer der gefeiertsten Pianisten seiner Generation, präsentiert Bachs Goldberg-Variationen – ein monumentales Werk, das er wie kaum ein anderer interpretiert.",
    description: `Die Goldberg-Variationen von Johann Sebastian Bach gehören zu den bedeutendsten Werken der Klavierliteratur. Igor Levit hat sich diesem Zyklus mit einer Hingabe gewidmet, die seinesgleichen sucht.

Seine Interpretation verbindet intellektuelle Tiefe mit emotionaler Intensität. Jede der 30 Variationen wird zu einem eigenen Universum, und doch fügt sich alles zu einem großen Ganzen zusammen.

Ein Abend, der die Grenzen zwischen Konzert und spiritueller Erfahrung aufhebt – möglich gemacht durch die perfekte Symbiose von Künstler, Werk und dem einzigartigen Raum des Sendesaals.`,
    quotes: [
      {
        text: "Levits Goldberg-Variationen sind eine Offenbarung.",
        source: "Der Spiegel"
      },
      {
        text: "Der Pianist unserer Zeit.",
        source: "New York Times"
      }
    ],
    youtubeId: "dQw4w9WgXcQ"
  },
  "6": {
    id: 6,
    title: "Barocke Nacht",
    artist: "Concerto Köln",
    category: "Klassik @ Sendesaal",
    date: "Sa, 8. Feb 2026",
    time: "20:00",
    price: "48,00 €",
    image: eventClassical,
    isExternalTicket: true,
    externalPartner: "Nordwest Ticket",
    admission: "19:00 Uhr",
    duration: "ca. 2 Stunden",
    pause: "20 Minuten",
    organizer: "Barock Bremen e.V.",
    series: "Alte Musik",
    leadText: "Concerto Köln gehört zu den führenden Ensembles für historische Aufführungspraxis. An diesem Abend erklingen Meisterwerke von Vivaldi, Bach und Händel auf Originalinstrumenten.",
    description: `Seit über 35 Jahren begeistert Concerto Köln mit seinem lebendigen, packenden Musizierstil. Das Ensemble hat die Alte Musik revolutioniert und zeigt, dass Barockmusik alles andere als verstaubt ist.

Mit Werken wie Vivaldis "Vier Jahreszeiten", Bachs Brandenburgischen Konzerten und Händels Wassermusik präsentieren die Musiker einen Querschnitt durch die Glanzzeit der Barockmusik.

Die historischen Instrumente und die historisch informierte Aufführungspraxis lassen diese Werke in neuem Glanz erstrahlen – eine Zeitreise in die Klangwelt des 18. Jahrhunderts.`,
    quotes: [
      {
        text: "Concerto Köln spielt, als wäre der Barock gestern erfunden worden.",
        source: "Frankfurter Rundschau"
      }
    ],
    youtubeId: "dQw4w9WgXcQ"
  },
  // Special demo event
  "frank-bungarten": {
    id: 100,
    title: "Gitarrenrecital Frank Bungarten",
    artist: "Frank Bungarten",
    category: "Klassik @ Sendesaal",
    date: "So, 15. Feb 2026",
    time: "18:00",
    price: "35,00 €",
    image: eventClassical,
    isExternalTicket: true,
    externalPartner: "Nordwest Ticket",
    admission: "17:00 Uhr",
    duration: "ca. 90 Minuten",
    pause: "Keine",
    organizer: "Gitarrenfestival Bremen",
    series: "Gitarrenabende",
    leadText: "Frank Bungarten zählt zu den bedeutendsten Gitarristen unserer Zeit. Sein Spiel vereint technische Brillanz mit musikalischer Tiefe und emotionaler Ausdruckskraft.",
    description: `Frank Bungarten hat die klassische Gitarre als Soloinstrument auf ein neues Niveau gehoben. Seine Interpretationen von Bach, Sor und zeitgenössischen Komponisten setzen Maßstäbe.

An diesem Abend präsentiert er ein Programm, das von der Renaissance bis zur Moderne reicht. Im Zentrum stehen Werke von Johann Sebastian Bach, die er in einzigartigen Transkriptionen für Gitarre darbietet.

Die intime Atmosphäre des Sendesaals und seine legendäre Akustik bilden den perfekten Rahmen für dieses außergewöhnliche Recital. Erleben Sie einen Meister seines Fachs in einem Konzert, das lange nachklingen wird.`,
    quotes: [
      {
        text: "Ein Gitarrist von Weltrang – technisch makellos, musikalisch tiefgründig.",
        source: "Fono Forum"
      },
      {
        text: "Bungarten lässt die Gitarre singen wie kaum ein anderer.",
        source: "Gitarre & Bass"
      }
    ],
    youtubeId: "dQw4w9WgXcQ"
  }
};

// Related events for the footer section
const relatedEvents = [
  { id: "4", title: "Kammermusik Abend", artist: "Quatuor Ébène", date: "Fr, 13. Dez 2025", image: eventClassical, category: "Klassik" },
  { id: "5", title: "Klavier Rezital", artist: "Igor Levit", date: "So, 19. Jan 2026", image: eventClassical, category: "Klassik" },
  { id: "2", title: "Tingvall Trio", artist: "Martin Tingvall", date: "Do, 9. Jan 2026", image: eventJazz, category: "Jazz" },
];

interface EventData {
  id: number;
  title: string;
  artist: string;
  category: string;
  date: string;
  time: string;
  price: string;
  image: string;
  isExternalTicket: boolean;
  externalPartner?: string;
  admission: string;
  duration: string;
  pause: string;
  organizer: string;
  series: string;
  leadText: string;
  description: string;
  quotes: { text: string; source: string }[];
  youtubeId: string;
}

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = eventsData[id || "1"];

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Event nicht gefunden</h1>
          <Link to="/programm" className="text-[#CF3D11] hover:underline">
            Zurück zum Programm
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `${event.title} - ${event.date} im Sendesaal Bremen`,
        url: window.location.href,
      });
    }
  };

  const handleCalendarExport = () => {
    // Simple ICS file generation
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.artist} - ${event.leadText}
LOCATION:Sendesaal Bremen
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.title.replace(/\s+/g, '-')}.ics`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Immersive */}
      <section className="relative h-[75vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          {/* Top gradient for navbar visibility */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        {/* Content - Bottom Left */}
        <div className="absolute bottom-32 md:bottom-40 left-0 right-0 z-10">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* Category */}
              <p className="text-[#E47C03] text-sm md:text-base uppercase tracking-[0.2em] font-bold mb-4">
                {event.category}
              </p>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                {event.title}
              </h1>
              
              {/* Artist */}
              <p className="text-white/80 text-xl md:text-2xl mb-6">
                {event.artist}
              </p>
              
              {/* Date & Time */}
              <div className="flex items-center gap-6 text-white text-lg md:text-xl">
                <div className="flex items-center gap-3">
                  <Calendar size={24} className="text-[#E47C03]" />
                  <span>{event.date}</span>
                </div>
                <div className="w-6 h-[2px] bg-[#E47C03]" />
                <div className="flex items-center gap-3">
                  <Clock size={24} className="text-[#E47C03]" />
                  <span>{event.time} Uhr</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Concave Arc Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-[80px] md:h-[100px]"
            fill="white"
          >
            <ellipse cx="720" cy="100" rx="900" ry="100" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Sidebar - Hard Facts */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-8">
                <h3 className="text-xl font-bold text-black border-b-2 border-[#CF3D11] pb-2 inline-block">
                  Auf einen Blick
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Users size={20} className="text-[#CF3D11] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Einlass</p>
                      <p className="text-black font-medium">{event.admission}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Timer size={20} className="text-[#CF3D11] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Dauer</p>
                      <p className="text-black font-medium">{event.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Coffee size={20} className="text-[#CF3D11] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Pause</p>
                      <p className="text-black font-medium">{event.pause}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Building2 size={20} className="text-[#CF3D11] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Veranstalter</p>
                      <p className="text-black font-medium">{event.organizer}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Ticket size={20} className="text-[#CF3D11] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Abo-Reihe</p>
                      <p className="text-black font-medium">{event.series}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-[#CF3D11] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Ort</p>
                      <p className="text-black font-medium">Sendesaal Bremen</p>
                      <p className="text-gray-500 text-sm">Bürgermeister-Spitta-Allee 45</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-gray-300 text-black hover:bg-gray-50"
                    onClick={handleShare}
                  >
                    <Share2 size={18} />
                    Teilen
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-gray-300 text-black hover:bg-gray-50"
                    onClick={handleCalendarExport}
                  >
                    <CalendarPlus size={18} />
                    Zum Kalender hinzufügen
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Story */}
            <div className="lg:col-span-2 space-y-10">
              {/* Lead Paragraph */}
              <p className="text-xl md:text-2xl text-black font-medium leading-relaxed">
                {event.leadText}
              </p>

              {/* First part of description */}
              <div className="prose prose-lg max-w-none">
                {event.description.split('\n\n').slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* YouTube Video Embed */}
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${event.youtubeId}`}
                  title="Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Rest of description */}
              <div className="prose prose-lg max-w-none">
                {event.description.split('\n\n').slice(2).map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quotes / Press */}
              {event.quotes.length > 0 && (
                <div className="space-y-6 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-black">Pressestimmen</h3>
                  {event.quotes.map((quote, index) => (
                    <blockquote
                      key={index}
                      className="border-l-4 border-[#CF3D11] pl-6 py-2"
                    >
                      <p className="text-lg md:text-xl italic text-gray-800 mb-2">
                        "{quote.text}"
                      </p>
                      <cite className="text-sm text-gray-500 not-italic">
                        — {quote.source}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
            Das könnte Sie auch interessieren
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedEvents.map((relEvent) => (
              <Link
                key={relEvent.id}
                to={`/event/${relEvent.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img
                    src={relEvent.image}
                    alt={relEvent.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <span className="absolute top-4 left-4 bg-[#CF3D11] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {relEvent.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-[#CF3D11] transition-colors mb-1">
                  {relEvent.title}
                </h3>
                <p className="text-gray-600 mb-2">{relEvent.artist}</p>
                <p className="text-sm text-gray-500">{relEvent.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6 md:px-16 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Event Info */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <p className="text-black font-bold text-lg truncate max-w-[200px] md:max-w-[300px]">
                  {event.title}
                </p>
                <p className="text-gray-500 text-sm">{event.date}</p>
              </div>
              <div className="text-center sm:text-left sm:border-l sm:border-gray-300 sm:pl-4">
                <p className="text-sm text-gray-500">ab</p>
                <p className="text-xl md:text-2xl font-bold text-[#CF3D11]">{event.price}</p>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="w-full sm:w-auto">
              {event.isExternalTicket ? (
                <Button
                  className="w-full sm:w-auto bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-8 py-6 h-auto text-base flex flex-col items-center gap-0"
                >
                  <span className="flex items-center gap-2">
                    TICKETS BEI PARTNER KAUFEN
                    <ExternalLink size={16} />
                  </span>
                  <span className="text-xs font-normal opacity-80">
                    Sichere Weiterleitung zu {event.externalPartner}
                  </span>
                </Button>
              ) : (
                <Button
                  className="w-full sm:w-auto bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-12 py-6 h-auto text-base"
                >
                  PLÄTZE WÄHLEN
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for sticky bar */}
      <div className="h-24" />

      <Footer />
    </div>
  );
};

export default EventDetail;
