import { defineMcp } from "@lovable.dev/mcp-js";
import listEventsTool from "./tools/list-events";
import getEventTool from "./tools/get-event";
import listNewsTool from "./tools/list-news";
import getNewsArticleTool from "./tools/get-news-article";
import searchFaqTool from "./tools/search-faq";

export default defineMcp({
  name: "remix-of-sendesaal-resonance-redesign-v1",
  title: "Remix of Sendesaal Resonance Redesign v1",
  version: "0.1.0",
  instructions:
    "Öffentliche Inhalte des Sendesaals Bremen: `list_events` und `get_event` für das Konzertprogramm, `list_news` und `get_news_article` für Aktuelles, `search_faq` für Besucherfragen.",
  tools: [listEventsTool, getEventTool, listNewsTool, getNewsArticleTool, searchFaqTool],
});