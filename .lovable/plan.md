## Ziel

Das schwarze Kästchen um das Sendesaal-Logo in der Navigation auf der Homepage entfernen. Das Logo schwebt frei über dem Hero-Video, bleibt weiß und erhält einen weichen Drop-Shadow für Lesbarkeit. Der Sticky-Zustand (beim Scrollen) bleibt unverändert: weiße Leiste mit schwarzem Logo.

## Umsetzung

Datei: `src/components/Navigation.tsx`

1. Im Logo-Wrapper (`<Link to="/">`) das schwarze Kästchen entfernen:
   - Den umschließenden `<div>` mit `bg-black`/`bg-white`, Padding und `rounded-b-md` im Nicht-Sticky-Zustand auf der Homepage weglassen.
   - Im Sticky-Zustand und auf Unterseiten bleibt das weiße Feld mit Padding wie bisher bestehen.
2. Im transparenten Zustand (Homepage, nicht gescrollt):
   - Logo direkt rendern, weiß (kein Brightness-Filter).
   - Drop-Shadow via Tailwind `drop-shadow-lg` oder eigene Utility (z.B. `filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]`) für Lesbarkeit über hellen Videoframes.
3. Logo-Größe (`h-12 md:h-14`) und negative Top-Margin werden so angepasst, dass das Logo sauber an der oberen Kante sitzt, ohne Lasche.
4. Sticky-Zustand und mobile Menü-States bleiben optisch identisch.

## Out of Scope

- Keine Änderung am Logo-SVG selbst.
- Keine Änderungen an den anderen Navigationspunkten oder am Tickets-Button.
- Keine Änderung an Unterseiten (dort weiterhin wie heute).
