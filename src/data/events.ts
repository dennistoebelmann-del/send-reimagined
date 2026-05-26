import eventFireOrchestra from "@/assets/event-fire-orchestra.jpg";
import eventTingvallTrio from "@/assets/event-tingvall-trio.jpg";
import eventEsbjornMemorial from "@/assets/event-esbjorn-memorial.jpg";
import eventKammermusik from "@/assets/event-kammermusik.jpg";
import eventKlavierRezital from "@/assets/event-klavier-rezital.jpg";
import eventBarockeNacht from "@/assets/event-barocke-nacht.jpg";

export type EventCategory = "jazz" | "klassik" | "weltmusik" | "experimentell";

export type EventMood =
  | "energetisch"
  | "intim"
  | "virtuos"
  | "romantisch"
  | "meditativ"
  | "experimentell"
  | "festlich"
  | "international";

export interface EventRecord {
  id: number;
  date: string;
  isoDate: string; // YYYY-MM-DD
  weekday: "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";
  time: string;
  location: string;
  title: string;
  artist: string;
  description: string;
  category: EventCategory;
  moods: EventMood[];
  image: string;
  externalTicketing: boolean;
}

export const events: EventRecord[] = [
  {
    id: 1,
    date: "Samstag, 6. Dezember 2025",
    isoDate: "2025-12-06",
    weekday: "Sa",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Fire! Orchestra",
    artist: "Mats Gustafsson & Ensemble",
    description:
      "Grootse improvisatie en energie door dit orkest met strijkers, blazers, ritmesectie en elektronica.",
    category: "jazz",
    moods: ["energetisch", "experimentell", "festlich"],
    image: eventFireOrchestra,
    externalTicketing: true,
  },
  {
    id: 4,
    date: "Freitag, 13. Dezember 2025",
    isoDate: "2025-12-13",
    weekday: "Fr",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Kammermusik Abend",
    artist: "Quatuor Ébène",
    description:
      "Ein außergewöhnliches Streichquartett präsentiert Werke von Beethoven und Schubert in intimer Atmosphäre.",
    category: "klassik",
    moods: ["intim", "virtuos", "romantisch"],
    image: eventKammermusik,
    externalTicketing: false,
  },
  {
    id: 2,
    date: "Donnerstag, 9. Januar 2026",
    isoDate: "2026-01-09",
    weekday: "Do",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Tingvall Trio",
    artist: "Martin Tingvall, Omar Rodriguez Calvo, Jürgen Spiegel",
    description:
      "Nordischer Jazz trifft auf klassische Einflüsse – melodisch, virtuos und voller Emotionen.",
    category: "jazz",
    moods: ["intim", "virtuos", "romantisch"],
    image: eventTingvallTrio,
    externalTicketing: false,
  },
  {
    id: 5,
    date: "Sonntag, 19. Januar 2026",
    isoDate: "2026-01-19",
    weekday: "So",
    time: "18",
    location: "Sendesaal Bremen",
    title: "Klavier Rezital",
    artist: "Igor Levit",
    description:
      "Der preisgekrönte Pianist spielt Bachs Goldberg-Variationen in einer unvergesslichen Interpretation.",
    category: "klassik",
    moods: ["virtuos", "meditativ", "intim"],
    image: eventKlavierRezital,
    externalTicketing: false,
  },
  {
    id: 3,
    date: "Freitag, 23. Januar 2026",
    isoDate: "2026-01-23",
    weekday: "Fr",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Esbjörn Svensson Memorial",
    artist: "Dan Berglund & Magnus Öström",
    description:
      "Ein Abend zu Ehren des legendären schwedischen Pianisten mit seinen ehemaligen Bandkollegen.",
    category: "jazz",
    moods: ["intim", "romantisch", "meditativ"],
    image: eventEsbjornMemorial,
    externalTicketing: true,
  },
  {
    id: 6,
    date: "Samstag, 8. Februar 2026",
    isoDate: "2026-02-08",
    weekday: "Sa",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Barocke Nacht",
    artist: "Concerto Köln",
    description:
      "Vivaldi, Bach und Händel in authentischer Aufführungspraxis mit historischen Instrumenten.",
    category: "klassik",
    moods: ["festlich", "virtuos"],
    image: eventBarockeNacht,
    externalTicketing: true,
  },
  {
    id: 7,
    date: "Freitag, 20. Februar 2026",
    isoDate: "2026-02-20",
    weekday: "Fr",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Nordic Voices",
    artist: "Ensemble Nordic Voices",
    description:
      "Skandinavische Vokalmusik von mittelalterlichen Hymnen bis zu zeitgenössischen Kompositionen.",
    category: "klassik",
    moods: ["meditativ", "international", "intim"],
    image: eventKammermusik,
    externalTicketing: false,
  },
  {
    id: 8,
    date: "Samstag, 7. März 2026",
    isoDate: "2026-03-07",
    weekday: "Sa",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Anouar Brahem Quartet",
    artist: "Anouar Brahem, François Couturier, Klaus Gesing, Björn Meyer",
    description:
      "Arabische Oud-Tradition trifft auf europäischen Jazz – eine einzigartige musikalische Begegnung.",
    category: "weltmusik",
    moods: ["international", "meditativ", "intim"],
    image: eventTingvallTrio,
    externalTicketing: true,
  },
  {
    id: 9,
    date: "Donnerstag, 19. März 2026",
    isoDate: "2026-03-19",
    weekday: "Do",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Portico Quartet",
    artist: "Portico Quartet",
    description:
      "Atmosphärische Klanglandschaften zwischen Jazz, Electronica und Minimalismus.",
    category: "experimentell",
    moods: ["experimentell", "meditativ"],
    image: eventEsbjornMemorial,
    externalTicketing: false,
  },
  {
    id: 10,
    date: "Samstag, 28. März 2026",
    isoDate: "2026-03-28",
    weekday: "Sa",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Hélène Grimaud",
    artist: "Hélène Grimaud",
    description:
      "Die französische Starpianistin mit einem Programm von Brahms und Rachmaninow.",
    category: "klassik",
    moods: ["virtuos", "romantisch", "intim"],
    image: eventKlavierRezital,
    externalTicketing: false,
  },
  {
    id: 11,
    date: "Freitag, 10. April 2026",
    isoDate: "2026-04-10",
    weekday: "Fr",
    time: "20",
    location: "Sendesaal Bremen",
    title: "Shai Maestro Trio",
    artist: "Shai Maestro, Jorge Roeder, Ofri Nehemya",
    description:
      "Israelischer Jazz voller Lyrik und Intensität – eines der aufregendsten Trios der Szene.",
    category: "jazz",
    moods: ["intim", "virtuos", "international"],
    image: eventFireOrchestra,
    externalTicketing: false,
  },
  {
    id: 12,
    date: "Samstag, 25. April 2026",
    isoDate: "2026-04-25",
    weekday: "Sa",
    time: "19",
    location: "Sendesaal Bremen",
    title: "Klassik trifft Flamenco",
    artist: "Dorantes & Renaud Capuçon",
    description:
      "Eine faszinierende Verschmelzung von klassischer Violine und andalusischem Klavier.",
    category: "weltmusik",
    moods: ["festlich", "international", "virtuos"],
    image: eventBarockeNacht,
    externalTicketing: true,
  },
];