## Ziel

Alle „Details"- und „Weitere Informationen"-CTAs auf eine echte Detailseite verlinken, statt nur Side-Sheets zu öffnen. Außerdem den toten Link von der Startseite fixen.

## Neue Seite: `/ausstattung`

Eine zentrale Ausstattungs-Detailseite im bestehenden Style (75vh Hero, konkaver weißer Bogen unten, OrangeBarsTransition, schwarz-weiß-Rhythmus, Seravek light), die alle Hard-Facts- und Tech-Facts-Kategorien zusammenfasst:

- **Hero**: schwarz, Titel „Ausstattung & Technik", Untertitel, Hero-Bild
- **Sektionen pro Kategorie** mit jeweils Anker-ID, großem Bild, Beschreibung, Bullet-Liste der `details`, Galerie (2×2) – Inhalte stammen aus den bereits gepflegten Arrays `hardFacts` (Mieten) und `techFacts` (Produzieren):
  - `#kapazitaet`, `#ausstattung`, `#barrierefreiheit`, `#technik` (aus Mieten)
  - `#regie`, `#instrumente`, `#variabilitaet` (aus Produzieren)
- Zwischen-Sektionen mit `OrangeBarsTransition`
- CTA-Block am Ende: „Jetzt anfragen" → `/mieten#kontakt`, „Produktion planen" → `/produzieren#kontakt`
- Footer mit `variant="light" sectionAbove="black"`

## CTA-Verlinkungen anpassen

| Stelle | aktuell | neu |
|---|---|---|
| `Mieten.tsx` – „Weitere Informationen" (2×) | öffnet `equipmentOpen`-Sheet | `Link` zu `/ausstattung` |
| `Mieten.tsx` – „Details" pro Kachel (4×) | Side-Sheet | `Link` zu `/ausstattung#<id>` |
| `Produzieren.tsx` – „Details" pro Kachel (3×) | Side-Sheet | `Link` zu `/ausstattung#<id>` |
| `ProduktionSection.tsx` – „Weitere Informationen" | `/ueber-uns#akustik` (tot) | `/produzieren#akustik` |

Die Sheet-Komponenten und der globale Equipment-Sheet werden auf Mieten/Produzieren entfernt (inkl. `equipmentOpen` State, `Sheet`-Imports, `Plus`/`ArrowRight` falls ungenutzt). Die Daten-Arrays (`hardFacts`, `techFacts`) bleiben auf den Seiten erhalten (werden weiterhin für die Kachel-Anzeige genutzt) und werden in `/ausstattung` dupliziert oder – sauberer – in eine gemeinsame Datei `src/data/facilities.ts` ausgelagert.

## Routing

- Neue Route `/ausstattung` → `Ausstattung` Komponente in `src/App.tsx` registrieren.
- Anker-Scroll funktioniert über das vorhandene `Navigation`-Scroll-Verhalten; falls nötig `useEffect` mit `scrollIntoView` per `useLocation().hash` in der neuen Seite.

## Technische Details

- Neue Datei `src/data/facilities.ts` exportiert `hardFacts`, `techFacts`, `acousticStats` als gemeinsame Quelle. Mieten/Produzieren/Ausstattung importieren von dort. Icons werden ebenfalls dort referenziert.
- Sheet-Imports in `Mieten.tsx` und `Produzieren.tsx` entfernen; Kacheln werden zu `<Link>`-Buttons mit `text-left w-full`.
- Smooth-Scroll-Hook in `Ausstattung.tsx`: bei `location.hash` per `useEffect` zum Element scrollen (mit kurzem Timeout für Render).

## Ergebnis

Konsistente, auffindbare Detailseite mit Deep-Links; alle „Details"-CTAs führen zu echten URLs (gut für SEO und Sharing); kaputter Hash-Link von der Startseite ist behoben.