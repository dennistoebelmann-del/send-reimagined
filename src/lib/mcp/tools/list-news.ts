import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { news } from "../content";

export default defineTool({
  name: "list_news",
  title: "Aktuelles auflisten",
  description:
    "Listet die aktuellen Nachrichten und Ankündigungen des Sendesaals Bremen, neueste zuerst.",
  inputSchema: {
    limit: z.number().int().optional().describe("Maximale Anzahl Ergebnisse (Standard 10)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ limit }) => {
    const items = [...news]
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, Math.max(1, Math.min(limit ?? 10, 50)));

    return {
      content: [
        {
          type: "text",
          text: items
            .map((n) => `${n.date} · ${n.category}\n${n.title}\n${n.excerpt}\nSlug: ${n.id}`)
            .join("\n\n"),
        },
      ],
      structuredContent: { news: items },
    };
  },
});