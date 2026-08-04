import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { faqItems } from "../../../data/faq";

export default defineTool({
  name: "search_faq",
  title: "FAQ durchsuchen",
  description:
    "Beantwortet häufige Besucherfragen zum Sendesaal Bremen (Abendkasse, Barrierefreiheit, Ermäßigungen, Garderobe usw.).",
  inputSchema: {
    query: z.string().optional().describe("Suchbegriff. Ohne Angabe werden alle Fragen geliefert."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const items = q
      ? faqItems.filter((f) => `${f.question} ${f.answer}`.toLowerCase().includes(q))
      : faqItems;

    if (items.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: "Dazu gibt es keinen FAQ-Eintrag. Bitte direkt beim Sendesaal Bremen anfragen.",
          },
        ],
      };
    }

    return {
      content: [
        { type: "text", text: items.map((f) => `${f.question}\n${f.answer}`).join("\n\n") },
      ],
      structuredContent: { faq: items },
    };
  },
});