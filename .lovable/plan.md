# Globale Suche für den Sendesaal

## Empfehlung: Client-seitig mit Fuse.js

Für den Sendesaal ist die **client-seitige Fuzzy-Suche mit Fuse.js** die beste Wahl:

- **Datenmenge ist klein** (~12 Events, ~8 statische Seiten, FAQ, Ausstattung) → passt locker in den Browser, sofort durchsuchbar ohne Backend-Latenz.
- **Tippfehler-tolerant** ("Tingval" findet "Tingvall"), gewichtete Felder (Titel > Künstler > Beschreibung), Treffer-Highlighting.
- **Keine laufenden Kosten**, keine Edge Function, kein Index-Aufbau.
- KI-Suche wäre Overkill — Stimmungs-/Kategorie-Verständnis liefert bereits die `/entdecken`-Seite.

## Was die Suche durchsucht

Ein zentraler Index (`src/lib/searchIndex.ts`) bündelt vier Quellen zu einem typisierten `SearchItem[]`:

1. **Events** (aus `src/data/events.ts`) — Titel, Künstler, Beschreibung, Kategorie, Stimmungen, Datum, Wochentag → Link `/event/:id`
2. **Seiten & Angebote** — kuratierte Liste mit Titel, Teaser, Keywords für `/programm`, `/entdecken`, `/tickets`, `/mieten`, `/produzieren`, `/ausstattung`, `/unterstuetzen`, `/ueber-uns`
3. **Ausstattung/Facilities** (aus `src/data/facilities.ts`) → Link `/ausstattung#<anchor>`
4. **FAQ** (aus `src/pages/Tickets.tsx` extrahiert in `src/data/faq.ts`) → Link `/tickets#faq-<id>`

Jeder Eintrag hat: `id`, `type` ("event" | "seite" | "ausstattung" | "faq"), `title`, `subtitle`, `description`, `keywords[]`, `url`, optional `image`, `date`.

## UI: Beides – Command-Palette + Ergebnisseite

### 1. Command-Palette (`src/components/SearchPalette.tsx`)
- Lupen-Icon in `Navigation.tsx` (Desktop neben Tickets-Button, Mobile im Menü).
- Tastenkürzel **⌘K / Strg+K** öffnet Overlay (basiert auf shadcn `CommandDialog`, an Sendesaal-Design angepasst: schwarz/weiß, scharfe Kanten, Seravek, Orange-Accent).
- Live-Ergebnisse gruppiert nach Typ (Veranstaltungen, Seiten, Ausstattung, FAQ), max. 5 je Gruppe.
- Treffer zeigen Titel, Untertitel, Icon je Typ; Enter/Klick navigiert.
- Footer-Zeile: „Alle Ergebnisse für '…' anzeigen" → `/suche?q=…`.
- Empty-State: „Keine Treffer — schau ins [Programm](/programm)".

### 2. Suchseite (`src/pages/Suche.tsx`, Route `/suche`)
- Standard-Layout mit `Navigation`, kein Hero (wie `/programm`), `OrangeBarsTransition`, `Footer`.
- Header: großes „SUCHE" Wasserzeichen, Such-Input (vorausgefüllt aus `?q=`).
- Filter-Chips: Alle / Veranstaltungen / Seiten / Ausstattung / FAQ (Stil wie bestehende Event-Filter-Chips).
- Ergebnisliste gruppiert nach Typ, mit Treffer-Highlighting (orange Markierung), Bild für Events, Pfeil-CTA pro Karte.
- Leerer Query → kuratierte Vorschläge („Beliebte Suchen": Jazz, Klassik, Mieten, Tickets).
- Keine Treffer → Fallback mit Vorschlägen + Link zu `/entdecken` und `/programm`.

## Such-Engine (`src/lib/search.ts`)

```text
Fuse.js Config
  keys:        title (w 0.5), subtitle (w 0.25), keywords (w 0.15), description (w 0.1)
  threshold:   0.35  (mild fuzzy)
  ignoreLocation: true
  minMatchCharLength: 2
  includeMatches: true   // für Highlighting
```

- Index wird einmal beim Modul-Import gebaut (Singleton).
- `search(query, { type? , limit? })` → gruppierte Ergebnisse.
- Highlighting-Helper: rendert Treffer mit `<mark>` in Sendesaal-Orange.

## Navigation-Änderungen

- `Navigation.tsx`: Lupen-Button (links neben Tickets-CTA) öffnet Palette; Mobile-Menü bekommt „Suche" Eintrag, der ebenfalls die Palette öffnet.
- Globaler Keyboard-Listener für ⌘K in `App.tsx` oder direkt in der Palette-Komponente.

## Technische Details

**Neue Dateien**
- `src/lib/searchIndex.ts` — baut `SearchItem[]` aus Events, Pages, Facilities, FAQ
- `src/data/faq.ts` — FAQ-Einträge extrahiert aus Tickets-Seite (Single Source of Truth)
- `src/lib/search.ts` — Fuse.js-Wrapper, Highlighting-Helper
- `src/components/SearchPalette.tsx` — ⌘K-Dialog
- `src/components/SearchButton.tsx` — Lupen-Trigger für Nav
- `src/pages/Suche.tsx` — Ergebnisseite

**Geänderte Dateien**
- `src/App.tsx` — Route `/suche`, optional globale ⌘K-Bindung
- `src/components/Navigation.tsx` — Such-Button Desktop + Mobile
- `src/pages/Tickets.tsx` — FAQ-Daten aus `src/data/faq.ts` beziehen (Refactor, keine sichtbare Änderung)
- `package.json` — `fuse.js` Dependency (~12 KB gzip)

## Akzeptanzkriterien

- ⌘K / Lupen-Klick öffnet Palette von jeder Seite aus.
- Tippen liefert Live-Treffer aus allen vier Quellen, gruppiert.
- „Alle Ergebnisse" springt zu `/suche?q=…` mit Filtern.
- Tippfehler ("Tingval", "Mieeten") finden die richtigen Einträge.
- Empty-, Leer-Query- und Mobile-States funktionieren.
- Design entspricht Sendesaal-System (schwarz/weiß, scharfe Kanten, Seravek, #CF3D11).
