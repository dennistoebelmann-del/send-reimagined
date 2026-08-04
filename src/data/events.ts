import eventFireOrchestra from "@/assets/event-fire-orchestra.jpg";
import eventTingvallTrio from "@/assets/event-tingvall-trio.jpg";
import eventEsbjornMemorial from "@/assets/event-esbjorn-memorial.jpg";
import eventKammermusik from "@/assets/event-kammermusik.jpg";
import eventKlavierRezital from "@/assets/event-klavier-rezital.jpg";
import eventBarockeNacht from "@/assets/event-barocke-nacht.jpg";
import { eventContents, type EventContent, type EventImageKey } from "./events.content";

export type { EventCategory, EventMood, EventContent } from "./events.content";

export interface EventRecord extends Omit<EventContent, "imageKey"> {
  image: string;
}

const eventImages: Record<EventImageKey, string> = {
  fireOrchestra: eventFireOrchestra,
  tingvallTrio: eventTingvallTrio,
  esbjornMemorial: eventEsbjornMemorial,
  kammermusik: eventKammermusik,
  klavierRezital: eventKlavierRezital,
  barockeNacht: eventBarockeNacht,
};

export const events: EventRecord[] = eventContents.map(({ imageKey, ...event }) => ({
  ...event,
  image: eventImages[imageKey],
}));
