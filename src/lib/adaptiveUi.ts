import { events, type EventCategory, type EventMood, type EventRecord } from "@/data/events";

/**
 * Adaptive UI Engine — "Besuch planen"
 *
 * Formula: user intent + product data + predefined UI rules = adaptive UI
 *
 * Rules:
 * - Use ONLY the provided product data (src/data/events.ts).
 * - Never invent titles, artists, dates, prices, or links.
 * - Match the user's intent to the most relevant available content.
 * - Return strictly valid, structured JSON.
 * - If no relevant data, return a helpful fallback state.
 */

export type IntentId =
  | "first-time"
  | "jazz-night"
  | "klassik-sunday"
  | "date-night"
  | "experimental"
  | "world-music"
  | "weekend"
  | "intimate";

export interface IntentOption {
  id: IntentId;
  label: string;
  hint: string;
  categories?: EventCategory[];
  moods?: EventMood[];
  weekdays?: EventRecord["weekday"][];
}

export const INTENT_OPTIONS: IntentOption[] = [
  {
    id: "first-time",
    label: "Zum ersten Mal hier",
    hint: "Ein zugänglicher Einstieg in den Sendesaal.",
    moods: ["intim", "virtuos", "festlich"],
  },
  {
    id: "jazz-night",
    label: "Jazz-Abend erleben",
    hint: "Improvisation, Energie, Atmosphäre.",
    categories: ["jazz"],
  },
  {
    id: "klassik-sunday",
    label: "Klassik am Wochenende",
    hint: "Konzentriertes Hören mit großem Repertoire.",
    categories: ["klassik"],
    weekdays: ["Sa", "So"],
  },
  {
    id: "date-night",
    label: "Romantischer Abend",
    hint: "Stimmungsvolle, intime Programme.",
    moods: ["romantisch", "intim"],
  },
  {
    id: "experimental",
    label: "Etwas Neues entdecken",
    hint: "Experimentelle und genre-übergreifende Klangwelten.",
    categories: ["experimentell"],
    moods: ["experimentell"],
  },
  {
    id: "world-music",
    label: "Musik aus aller Welt",
    hint: "Internationale Stimmen und Traditionen.",
    categories: ["weltmusik"],
    moods: ["international"],
  },
  {
    id: "weekend",
    label: "Konzert am Wochenende",
    hint: "Termine Freitag bis Sonntag.",
    weekdays: ["Fr", "Sa", "So"],
  },
  {
    id: "intimate",
    label: "Konzentrierte Kammermusik",
    hint: "Kleine Besetzungen, große Wirkung.",
    moods: ["intim", "meditativ", "virtuos"],
  },
];

export interface AdaptiveRecommendation {
  eventId: number;
  score: number;
  reasons: string[];
}

export type AdaptiveStatus = "ok" | "fallback";

export interface AdaptiveResult {
  intentId: IntentId;
  generatedAt: string;
  status: AdaptiveStatus;
  message: string;
  recommendations: AdaptiveRecommendation[];
}

const MAX_RESULTS = 4;

export function generateAdaptiveUi(intentId: IntentId): AdaptiveResult {
  const intent = INTENT_OPTIONS.find((i) => i.id === intentId);
  const generatedAt = new Date().toISOString();

  if (!intent) {
    return {
      intentId,
      generatedAt,
      status: "fallback",
      message: "Unbekannte Auswahl. Bitte wähle einen Intent.",
      recommendations: [],
    };
  }

  const scored = events
    .map<AdaptiveRecommendation>((event) => {
      const reasons: string[] = [];
      let score = 0;

      if (intent.categories?.includes(event.category)) {
        score += 3;
        reasons.push(`Kategorie ${event.category}`);
      }
      if (intent.moods) {
        const overlap = event.moods.filter((m) => intent.moods!.includes(m));
        if (overlap.length > 0) {
          score += overlap.length * 2;
          reasons.push(`Stimmung: ${overlap.join(", ")}`);
        }
      }
      if (intent.weekdays?.includes(event.weekday)) {
        score += 1;
        reasons.push(`${event.weekday}. – passender Wochentag`);
      }

      return { eventId: event.id, score, reasons };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const ea = events.find((e) => e.id === a.eventId)!;
      const eb = events.find((e) => e.id === b.eventId)!;
      return ea.isoDate.localeCompare(eb.isoDate);
    })
    .slice(0, MAX_RESULTS);

  if (scored.length === 0) {
    return {
      intentId,
      generatedAt,
      status: "fallback",
      message:
        "Aktuell keine passenden Konzerte zu diesem Intent. Schau gerne das gesamte Programm an.",
      recommendations: [],
    };
  }

  return {
    intentId,
    generatedAt,
    status: "ok",
    message: `${scored.length} Konzert${scored.length === 1 ? "" : "e"} passen zu „${intent.label}".`,
    recommendations: scored,
  };
}

export function getEventById(id: number): EventRecord | undefined {
  return events.find((e) => e.id === id);
}