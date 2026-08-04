import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { news } from "../content";

export default defineTool({
  name: "get_news_article",
  title: "News-Beitrag abrufen",
  description: "Liefert den vollständigen Text eines Aktuelles-Beitrags anhand seines Slugs.",
  inputSchema: { slug: z.string().describe("Der Slug des Beitrags aus list_news.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const article = news.find((n) => n.id === slug.trim());
    if (!article) throw new ToolError(`Kein Beitrag mit dem Slug "${slug}" gefunden.`);

    return {
      content: [
        {
          type: "text",
          text: [
            article.title,
            `${article.date} · ${article.category}`,
            "",
            article.lead ?? article.excerpt,
            "",
            ...(article.body ?? []),
          ].join("\n"),
        },
      ],
      structuredContent: { article },
    };
  },
});