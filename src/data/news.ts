import eventFireOrchestra from "@/assets/event-fire-orchestra.jpg";
import eventKammermusik from "@/assets/event-kammermusik.jpg";
import eventKlavierRezital from "@/assets/event-klavier-rezital.jpg";
import eventExperimental from "@/assets/event-experimental.jpg";
import { newsContents, type NewsContent, type NewsImageKey } from "./news.content";

export type { NewsContent } from "./news.content";

export type NewsItem = Omit<NewsContent, "imageKey"> & { image?: string };

const newsImages: Record<NewsImageKey, string> = {
  fireOrchestra: eventFireOrchestra,
  kammermusik: eventKammermusik,
  klavierRezital: eventKlavierRezital,
  experimental: eventExperimental,
};

export const news: NewsItem[] = newsContents.map(({ imageKey, ...item }) => ({
  ...item,
  image: imageKey ? newsImages[imageKey] : undefined,
}));
