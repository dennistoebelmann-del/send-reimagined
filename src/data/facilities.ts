import {
  Users,
  Music,
  Accessibility,
  Lightbulb,
  Radio,
  Piano,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

export type GalleryItem = { src: string; label: string };

export type FacilityFact = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  details: string[];
  gallery: GalleryItem[];
};

export const hardFacts: FacilityFact[] = [
  {
    slug: "kapazitaet",
    icon: Users,
    title: "Kapazität",
    description: "Bis zu 250 Personen",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&h=700&fit=crop",
    details: [
      "250 Sitzplätze im Saal",
      "Flexible Bestuhlung möglich",
      "Foyer für Empfänge bis 150 Personen",
      "Garderobe mit ca. 250 Plätzen",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop", label: "Konzertbestuhlung" },
      { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=600&fit=crop", label: "Foyer & Empfang" },
      { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=600&fit=crop", label: "Garderobe" },
      { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=600&fit=crop", label: "Reihenbestuhlung" },
    ],
  },
  {
    slug: "ausstattung",
    icon: Music,
    title: "Ausstattung",
    description: "Steinway D-Flügel, variable Akustik-Elemente, modernes Licht-Equipment",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&h=700&fit=crop",
    details: [
      "Steinway D-Flügel (D-274), regelmäßig gewartet",
      "60 Orchesterstühle",
      "50 Notenpulte",
      "Dirigentenpult",
      "Cembalo auf Anfrage",
      "Beamer (Full HD) und mobile Leinwand (4×3 m)",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=600&h=600&fit=crop", label: "Steinway D-Flügel" },
      { src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&h=600&fit=crop", label: "Notenpulte" },
      { src: "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?w=600&h=600&fit=crop", label: "Orchesterstühle" },
      { src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&h=600&fit=crop", label: "Beamer & Leinwand" },
    ],
  },
  {
    slug: "barrierefreiheit",
    icon: Accessibility,
    title: "Barrierefreiheit",
    description: "Alle Räumlichkeiten sind barrierefrei zugänglich",
    image: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee6c?w=1200&h=700&fit=crop",
    details: [
      "Stufenloser Zugang über den Haupteingang",
      "Aufzug zu allen Ebenen",
      "Barrierefreie Sanitäranlagen",
      "Rollstuhlplätze im Saal",
      "Induktive Höranlage verfügbar",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1574087631498-7a012c1a4ec0?w=600&h=600&fit=crop", label: "Stufenloser Zugang" },
      { src: "https://images.unsplash.com/photo-1565363887715-8884629e09ee?w=600&h=600&fit=crop", label: "Aufzug" },
      { src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=600&fit=crop", label: "Rollstuhlplätze" },
      { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop", label: "Höranlage" },
    ],
  },
  {
    slug: "technik",
    icon: Lightbulb,
    title: "Technik",
    description: "Professionelle Ton- und Lichttechnik, Aufnahme­möglichkeiten",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=700&fit=crop",
    details: [
      "Professionelles Tonmischpult und PA-System",
      "Drahtlose Mikrofone (Handheld & Headset)",
      "Bühnen- und Saalbeleuchtung (LED, dimmbar)",
      "Aufnahme­möglichkeiten direkt in die Regie",
      "Streaming-Setup auf Anfrage",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=600&h=600&fit=crop", label: "Mischpult" },
      { src: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=600&h=600&fit=crop", label: "Mikrofone" },
      { src: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=600&h=600&fit=crop", label: "LED-Beleuchtung" },
      { src: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=600&h=600&fit=crop", label: "Regie" },
    ],
  },
];

export const techFacts: FacilityFact[] = [
  {
    slug: "regie",
    icon: Radio,
    title: "Regie",
    description: "Modernste digitale und analoge Signalwege mit direkter Sichtverbindung in den Saal.",
    image: "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=1200&h=700&fit=crop",
    details: [
      "Pro Tools HDX-System mit 64 Ein-/Ausgängen",
      "Hochwertige Mikrofonvorverstärker (Neumann, Schoeps, DPA)",
      "Analoge und digitale Signalwege",
      "Direkte Sichtverbindung zum Saal",
      "Abhöre über Genelec-Studiomonitore",
      "Talkback-System zum Saal",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop", label: "Pro Tools HDX" },
      { src: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=600&h=600&fit=crop", label: "Mikrofonvorverstärker" },
      { src: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=600&h=600&fit=crop", label: "Regie-Sichtverbindung" },
      { src: "https://images.unsplash.com/photo-1558379850-a3b1d6b40e75?w=600&h=600&fit=crop", label: "Genelec-Abhöre" },
    ],
  },
  {
    slug: "instrumente",
    icon: Piano,
    title: "Instrumente",
    description: "Steinway D-Flügel (D-274), regelmäßig gewartet und auf höchstem Niveau gestimmt.",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=1200&h=700&fit=crop",
    details: [
      "Steinway D-Flügel (D-274), Konzertflügel",
      "Cembalo auf Anfrage",
      "60 Orchesterstühle, 50 Notenpulte",
      "Dirigentenpult",
      "Klavierstimmer kurzfristig verfügbar",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=600&fit=crop", label: "Steinway D-274" },
      { src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&h=600&fit=crop", label: "Notenpulte" },
      { src: "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?w=600&h=600&fit=crop", label: "Orchesterstühle" },
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop", label: "Cembalo" },
    ],
  },
  {
    slug: "variabilitaet",
    icon: SlidersHorizontal,
    title: "Variabilität",
    description: "Anpassbare Nachhallzeiten für verschiedene Besetzungen und musikalische Genres.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=700&fit=crop",
    details: [
      "Variable Nachhallzeit von 1,4 bis 2,2 Sekunden",
      "Verstellbare Akustik-Elemente an den Wänden",
      "Geeignet für Solo bis großes Orchester",
      "Bewährt für Klassik, Jazz, Pop und Filmmusik",
      "Beratung durch erfahrene Tonmeister",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=600&fit=crop", label: "Akustik-Elemente" },
      { src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&h=600&fit=crop", label: "Großes Orchester" },
      { src: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&h=600&fit=crop", label: "Jazz & Pop" },
      { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop", label: "Tonmeister" },
    ],
  },
];

export const acousticStats = [
  { value: "1,8", unit: "Sek", label: "Nachhallzeit" },
  { value: "340", unit: "m²", label: "Saalfläche" },
  { value: "270", unit: "", label: "Sitzplätze" },
  { value: "12", unit: "m", label: "Deckenhöhe" },
];

export const allFacilities: FacilityFact[] = [...hardFacts, ...techFacts];