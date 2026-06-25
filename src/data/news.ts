export type NewsItem = {
  id: string;
  date: string; // ISO
  category: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
};

export const news: NewsItem[] = [
  {
    id: "fire-orchestra-zusatztermin",
    date: "2026-05-14",
    category: "Konzert",
    title: "Fire! Orchestra: Zusatztermin im Sendesaal Bremen",
    excerpt:
      "Nach kurzer Verkaufszeit ausverkauft – Mats Gustafsson und sein Ensemble kommen für einen zweiten Abend zurück in den Sendesaal.",
    href: "/aktuelles/fire-orchestra-zusatztermin",
  },
  {
    id: "saison-2026-programm",
    date: "2026-04-28",
    category: "Programm",
    title: "Saison 2026/27: Das neue Programm ist da",
    excerpt:
      "Über 60 Konzerte zwischen Klassik, Jazz und Neuer Musik. Ein erster Blick auf die Höhepunkte der kommenden Spielzeit.",
    href: "/aktuelles/saison-2026-programm",
  },
  {
    id: "echo-klassik-auszeichnung",
    date: "2026-03-12",
    category: "Presse",
    title: "Aufnahme aus dem Sendesaal mit ECHO Klassik ausgezeichnet",
    excerpt:
      "Die im Sendesaal Bremen entstandene Einspielung des Quatuor Ébène wurde von der Jury als beste Kammermusikproduktion gewürdigt.",
    href: "/aktuelles/echo-klassik-auszeichnung",
  },
  {
    id: "tag-der-offenen-tuer",
    date: "2026-02-20",
    category: "Saison",
    title: "Tag der offenen Tür: Akustik zum Anfassen",
    excerpt:
      "Führungen durch den historischen Saal, Live-Demonstrationen der Aufnahmetechnik und Gespräche mit Tonmeisterinnen und Tonmeistern.",
    href: "/aktuelles/tag-der-offenen-tuer",
  },
];