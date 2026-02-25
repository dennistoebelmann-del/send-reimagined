

## Buttons "Teilen" und "Kalender" auf den Event-Detailseiten aufhübschen

**Problem:** Die beiden Buttons "Teilen" und "Zum Kalender hinzufügen" sehen aktuell wie große schwarze Balken aus und sind visuell nicht einladend.

**Lösung:** Die Buttons werden als dezente, transparente Text-Links mit Icon gestaltet – ohne Rahmen, ohne dunklen Hintergrund. Sie bekommen die Sendesaal-Orange-Farbe als Akzent beim Hover.

### Technische Umsetzung

**Datei: `src/pages/EventDetail.tsx` (Zeilen 455-473)**

Die beiden `<Button>`-Elemente werden umgestaltet:
- `variant="ghost"` statt `variant="outline"` 
- Kleinere Höhe (`h-auto py-2` statt `h-12`)
- Text in Grau (`text-gray-500`) mit Orange-Hover (`hover:text-[#CF3D11]`)
- Kein Border, kein dunkler Hintergrund
- Kompaktere Darstellung als schlichte Text-Links mit Icon

So passen sie sich harmonisch in die Sidebar ein und sind trotzdem klar als interaktive Elemente erkennbar.

