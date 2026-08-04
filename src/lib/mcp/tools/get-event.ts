import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { events } from "../content";

export default defineTool({
  name: "get_event",
  title: "Konzertdetails abrufen",
  description: "Liefert alle Details zu einer Veranstaltung im Sendesaal Bremen anhand ihrer ID.",
  inputSchema: { id: z.number().int().describe("Die Veranstaltungs-ID aus list_events.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const event = events.find((e) => e.id === id);
    if (!event) throw new ToolError(`Keine Veranstaltung mit der ID ${id} gefunden.`);

    return {
      content: [
        {
          type: "text",
          text: [
            `${event.title} — ${event.artist}`,
            `${event.date} (${event.weekday}), ${event.time} Uhr`,
            `Ort: ${event.location}`,
            `Kategorie: ${event.category}`,
            `Stimmungen: ${event.moods.join(", ")}`,
            `Tickets: ${event.externalTicketing ? "über externen Vorverkaufspartner" : "über den Sendesaal"}`,
            "",
            event.description,
          ].join("\n"),
        },
      ],
      structuredContent: { event },
    };
  },
});