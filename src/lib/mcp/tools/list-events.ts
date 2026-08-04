import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { events } from "../content";

export default defineTool({
  name: "list_events",
  title: "Konzerte auflisten",
  description:
    "Listet die Konzerte und Veranstaltungen im Sendesaal Bremen. Optional filterbar nach Kategorie und Suchbegriff.",
  inputSchema: {
    category: z
      .enum(["jazz", "klassik", "weltmusik", "experimentell"])
      .optional()
      .describe("Nur Veranstaltungen dieser Kategorie."),
    query: z.string().optional().describe("Freitextsuche in Titel, Künstler und Beschreibung."),
    limit: z.number().int().optional().describe("Maximale Anzahl Ergebnisse (Standard 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, query, limit }) => {
    const q = query?.trim().toLowerCase();
    const items = events
      .filter((e) => (category ? e.category === category : true))
      .filter((e) =>
        q
          ? [e.title, e.artist, e.description, e.category].join(" ").toLowerCase().includes(q)
          : true,
      )
      .slice(0, Math.max(1, Math.min(limit ?? 20, 100)));

    if (items.length === 0) {
      return { content: [{ type: "text", text: "Keine passenden Veranstaltungen gefunden." }] };
    }

    return {
      content: [
        {
          type: "text",
          text: items
            .map(
              (e) =>
                `#${e.id} ${e.title} — ${e.artist}\n${e.date}, ${e.time} Uhr, ${e.location}\nKategorie: ${e.category}\n${e.description}`,
            )
            .join("\n\n"),
        },
      ],
      structuredContent: { events: items },
    };
  },
});