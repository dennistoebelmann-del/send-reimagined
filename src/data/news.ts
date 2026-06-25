import eventFireOrchestra from "@/assets/event-fire-orchestra.jpg";
import eventKammermusik from "@/assets/event-kammermusik.jpg";
import eventKlavierRezital from "@/assets/event-klavier-rezital.jpg";
import eventExperimental from "@/assets/event-experimental.jpg";

export type NewsItem = {
  id: string;
  date: string; // ISO
  category: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  lead?: string;
  body?: string[];
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
    image: eventFireOrchestra,
    lead:
      "Die Resonanz war überwältigend: Innerhalb weniger Tage war das Konzert des Fire! Orchestra restlos ausverkauft. Auf vielfachen Wunsch öffnen wir nun einen Zusatztermin am Folgeabend.",
    body: [
      "Mats Gustafsson und sein über zwanzigköpfiges Ensemble verbinden orchestralen Free Jazz mit elektronischen Texturen und kompromissloser Improvisation. Die einzigartige Akustik des Sendesaals macht dieses Klangerlebnis besonders intensiv erfahrbar.",
      "Der Zusatztermin findet am Sonntag, dem 7. Dezember 2025 statt. Tickets sind ab sofort über unseren Vorverkaufspartner sowie an der Abendkasse erhältlich. Für Inhaberinnen und Inhaber der Sendesaal-Card gilt das übliche Vorkaufsrecht.",
      "Wir empfehlen, frühzeitig zu buchen – auch der zweite Abend stößt bereits auf großes Interesse. Das Konzert beginnt um 20 Uhr, Einlass ist ab 19 Uhr.",
    ],
  },
  {
    id: "saison-2026-programm",
    date: "2026-04-28",
    category: "Programm",
    title: "Saison 2026/27: Das neue Programm ist da",
    excerpt:
      "Über 60 Konzerte zwischen Klassik, Jazz und Neuer Musik. Ein erster Blick auf die Höhepunkte der kommenden Spielzeit.",
    href: "/aktuelles/saison-2026-programm",
    image: eventKammermusik,
    lead:
      "Mit über 60 Konzerten setzt die Saison 2026/27 ein klares Bekenntnis zur Vielfalt: Klassische Kammermusik, internationaler Jazz und neue Musik treffen in unserem Saal aufeinander.",
    body: [
      "Zu den Höhepunkten zählen Residenzen renommierter Ensembles, Wiederbegegnungen mit langjährigen Wegbegleiterinnen und Wegbegleitern sowie zahlreiche Debüts junger Stimmen, die hier erstmals zu erleben sein werden.",
      "Neu im Programm ist eine Reihe kuratierter Themenwochenenden, die einzelne Komponistinnen, Stilrichtungen und Aufnahmeprojekte in den Mittelpunkt rücken. Begleitend bieten wir Werkeinführungen, Künstlergespräche und offene Proben an.",
      "Das vollständige Saisonheft liegt ab sofort im Foyer aus und steht in unserem Programm-Bereich als digitale Ausgabe zur Verfügung. Der Vorverkauf für Mitglieder startet am 5. Mai, für alle weiteren Interessierten am 12. Mai.",
    ],
  },
  {
    id: "echo-klassik-auszeichnung",
    date: "2026-03-12",
    category: "Presse",
    title: "Aufnahme aus dem Sendesaal mit ECHO Klassik ausgezeichnet",
    excerpt:
      "Die im Sendesaal Bremen entstandene Einspielung des Quatuor Ébène wurde von der Jury als beste Kammermusikproduktion gewürdigt.",
    href: "/aktuelles/echo-klassik-auszeichnung",
    image: eventKlavierRezital,
    lead:
      "Eine besondere Anerkennung für die Arbeit unseres Hauses: Die im Sendesaal entstandene Einspielung des Quatuor Ébène ist mit dem ECHO Klassik in der Kategorie „Beste Kammermusikproduktion“ ausgezeichnet worden.",
    body: [
      "Die Jury würdigt die außergewöhnliche Klangqualität der Aufnahme und hebt insbesondere die Räumlichkeit und Transparenz hervor – Eigenschaften, die seit Jahrzehnten den Ruf der Sendesaal-Akustik prägen.",
      "Verantwortlich für die Produktion zeichnet unser Tonmeister-Team in enger Zusammenarbeit mit dem Label und dem Quartett. Die Aufnahmen entstanden über mehrere Sessions im Frühjahr 2025 und umfassen Werke von Beethoven und Schubert.",
      "Die ausgezeichnete Produktion ist im Handel sowie auf den gängigen Streaming-Plattformen verfügbar. Wir gratulieren allen Beteiligten herzlich zu dieser besonderen Würdigung.",
    ],
  },
  {
    id: "tag-der-offenen-tuer",
    date: "2026-02-20",
    category: "Saison",
    title: "Tag der offenen Tür: Akustik zum Anfassen",
    excerpt:
      "Führungen durch den historischen Saal, Live-Demonstrationen der Aufnahmetechnik und Gespräche mit Tonmeisterinnen und Tonmeistern.",
    href: "/aktuelles/tag-der-offenen-tuer",
    image: eventExperimental,
    lead:
      "Einmal im Jahr öffnen wir alle Türen: Am Tag der offenen Tür lädt der Sendesaal Bremen dazu ein, das Haus, seine Geschichte und seine Akustik aus nächster Nähe zu erleben.",
    body: [
      "Auf dem Programm stehen stündliche Führungen durch den großen Saal und die Regie, Live-Demonstrationen aktueller Aufnahmetechnik sowie Gespräche mit Tonmeisterinnen, Tonmeistern und Musikerinnen und Musikern, die regelmäßig hier zu Gast sind.",
      "Für Familien gibt es ein eigenes Programm: Kinder dürfen Mikrofone ausprobieren, eigene Klänge aufnehmen und gemeinsam mit unseren Mitarbeitenden ein kleines Hörstück gestalten. Im Foyer sorgen Speisen und Getränke für das leibliche Wohl.",
      "Der Eintritt ist frei, eine Anmeldung ist nicht erforderlich. Wir freuen uns auf einen Tag voller Begegnungen rund um Klang, Raum und Musik.",
    ],
  },
];