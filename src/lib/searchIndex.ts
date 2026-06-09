import { events } from "@/data/events";
import { allFacilities } from "@/data/facilities";
import { faqItems } from "@/data/faq";

export type SearchType = "event" | "seite" | "ausstattung" | "faq";

export interface SearchItem {
  id: string;
  type: SearchType;
  title: string;
  subtitle?: string;
  description?: string;
  keywords: string[];
  url: string;
  image?: string;
  date?: string;
}

const pages: SearchItem[] = [
  {
    id: "page-programm",
    type: "seite",
    title: "Programm",
    subtitle: "Alle Konzerte & Veranstaltungen",
    description:
      "Übersicht aller kommenden Konzerte im Sendesaal Bremen – nach Monaten sortiert.",
    keywords: ["konzerte", "veranstaltungen", "kalender", "agenda", "termine", "spielplan"],
    url: "/programm",
  },
  {
    id: "page-tickets",
    type: "seite",
    title: "Tickets",
    subtitle: "Vorverkauf, Gutscheine, Infos",
    description:
      "Tickets über Nordwest Ticket oder venticks, Abendkasse, Gutscheine und Ermäßigungen.",
    keywords: ["karten", "vorverkauf", "nordwest", "venticks", "gutschein", "abendkasse", "ermäßigung"],
    url: "/tickets",
  },
  {
    id: "page-mieten",
    type: "seite",
    title: "Mieten",
    subtitle: "Saal für Ihre Veranstaltung",
    description:
      "Den Sendesaal für Konzerte, Lesungen, Tagungen oder private Anlässe mieten.",
    keywords: ["raum mieten", "saal mieten", "veranstaltung", "vermietung", "buchen", "event location"],
    url: "/mieten",
  },
  {
    id: "page-produzieren",
    type: "seite",
    title: "Produzieren",
    subtitle: "Aufnahme & Studio",
    description:
      "Akustik, Regie und Tonmeister für CD-Produktionen, Streaming und Mitschnitte.",
    keywords: ["aufnahme", "studio", "produktion", "cd", "streaming", "mitschnitt", "tonmeister"],
    url: "/produzieren",
  },
  {
    id: "page-ausstattung",
    type: "seite",
    title: "Ausstattung",
    subtitle: "Technik, Instrumente, Akustik",
    description:
      "Steinway D-Flügel, Pro Tools HDX, variable Nachhallzeit und Raumdaten.",
    keywords: ["technik", "akustik", "flügel", "steinway", "mikrofone", "regie", "kapazität"],
    url: "/ausstattung",
  },
  {
    id: "page-unterstuetzen",
    type: "seite",
    title: "Unterstützen",
    subtitle: "Förderverein & Spenden",
    description:
      "Werden Sie Mitglied im Förderverein oder unterstützen Sie den Sendesaal mit einer Spende.",
    keywords: ["spenden", "förderverein", "mitglied", "sponsoring", "stiftung", "helfen"],
    url: "/unterstuetzen",
  },
  {
    id: "page-ueber-uns",
    type: "seite",
    title: "Über uns",
    subtitle: "Geschichte & Team",
    description:
      "Die Geschichte des Sendesaals Bremen, sein Leitbild und das Team dahinter.",
    keywords: ["geschichte", "team", "leitbild", "über", "kontakt", "impressum"],
    url: "/ueber-uns",
  },
];

const eventItems: SearchItem[] = events.map((e) => ({
  id: `event-${e.id}`,
  type: "event",
  title: e.title,
  subtitle: e.artist,
  description: e.description,
  keywords: [e.category, ...e.moods, e.weekday, e.location],
  url: `/event/${e.id}`,
  image: e.image,
  date: e.date,
}));

const facilityItems: SearchItem[] = allFacilities.map((f) => ({
  id: `facility-${f.slug}`,
  type: "ausstattung",
  title: f.title,
  subtitle: f.description,
  description: f.details.join(" · "),
  keywords: f.details,
  url: `/ausstattung#${f.slug}`,
  image: f.image,
}));

const faqIndex: SearchItem[] = faqItems.map((f) => ({
  id: `faq-${f.id}`,
  type: "faq",
  title: f.question,
  subtitle: "Häufige Frage",
  description: f.answer,
  keywords: ["faq", "frage", "hilfe"],
  url: `/tickets#faq-${f.id}`,
}));

export const searchIndex: SearchItem[] = [
  ...eventItems,
  ...pages,
  ...facilityItems,
  ...faqIndex,
];

export const typeLabels: Record<SearchType, string> = {
  event: "Veranstaltungen",
  seite: "Seiten",
  ausstattung: "Ausstattung",
  faq: "FAQ",
};