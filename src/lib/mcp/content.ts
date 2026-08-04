// Image-free views of the site content, so the MCP bundle stays free of asset imports.
import { events as eventRecords } from "../../data/events";
import { news as newsItems } from "../../data/news";

export const events = eventRecords.map(({ image: _image, ...event }) => event);
export const news = newsItems.map(({ image: _image, href: _href, ...item }) => item);