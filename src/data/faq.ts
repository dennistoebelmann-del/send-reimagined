export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "abendkasse",
    question: "Gibt es eine Abendkasse?",
    answer:
      "Ja, sofern noch Karten verfügbar sind, öffnet unsere Abendkasse 45 Minuten vor Veranstaltungsbeginn. Wir empfehlen jedoch den Vorverkauf, da viele Konzerte ausverkauft sind.",
  },
  {
    id: "barrierefrei",
    question: "Ist der Sendesaal barrierefrei?",
    answer:
      "Der Sendesaal ist barrierefrei zugänglich. Es gibt Rollstuhlplätze im Parkett sowie eine behindertengerechte Toilette. Bitte informieren Sie uns bei der Buchung über Ihre Bedürfnisse.",
  },
  {
    id: "garderobe",
    question: "Wie sind die Öffnungszeiten der Garderobe?",
    answer:
      "Die Garderobe öffnet 45 Minuten vor Konzertbeginn und bleibt bis 30 Minuten nach Ende der Veranstaltung geöffnet. Die Garderobennutzung ist kostenfrei.",
  },
  {
    id: "ermaessigung",
    question: "Gibt es Ermäßigungen für Studenten?",
    answer:
      "Ja, Studierende erhalten gegen Vorlage eines gültigen Studierendenausweises eine Ermäßigung von 20% auf reguläre Eintrittspreise. Diese Ermäßigung gilt nicht für Sonderveranstaltungen.",
  },
  {
    id: "umtausch",
    question: "Kann ich meine Tickets umtauschen oder stornieren?",
    answer:
      "Ein Umtausch oder eine Erstattung ist leider nicht möglich. Bei Ausfall einer Veranstaltung erhalten Sie selbstverständlich den vollen Kaufpreis zurück.",
  },
];