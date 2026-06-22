## Konsistenz-Audit (Home als Kanon, kein Code geändert)

Referenz: `src/pages/Index.tsx` → `Hero`, `HighlightsSection`, `AgendaSection`, `InfoSection`, `NewsletterSection`, `Navigation`, `Footer`.
Akzent-Kanon: `#E17900` = `hsl(32 100% 44%)` = Token `primary` / `accent` / `--sendesaal-orange` / `--ring`.

---

### 1. Nicht-Kanon-Orangetöne

**`#E47C03` (dunkleres Orange) – muss `#E17900` bzw. `bg-primary` werden:**
- `src/components/LeitbildSection.tsx:14` — Eyebrow-Strich
- `src/components/InfoSection.tsx:83` — Eyebrow-Strich
- `src/components/HighlightsSection.tsx:39` — Section-Header-Strich
- `src/components/HighlightsSection.tsx:68` — Hover-Overlay `bg-[#E47C03]/0 → /20`
- `src/components/AgendaSection.tsx:96, 142, 147` — Section-/Event-Striche
- `src/components/ProduktionSection.tsx:24` — Eyebrow-Strich
- `src/pages/Programm.tsx:251, 323, 328`
- `src/pages/Suche.tsx:85, 90`
- `src/pages/EventDetail.tsx:437` — Trenn-Strich

**`#CF3D11` (Rot-Orange) – fremder Akzent, nirgends Teil des Kanons:**
- `src/pages/Suche.tsx:48, 231, 249, 282, 291, 312, 323, 337` — Highlight-Mark, Hover, Accordion, Card-Hover
- `src/pages/Entdecken.tsx:61, 92, 114, 160, 233, 240, 315, 349` — gesamtes Page-Theme nutzt `#CF3D11` als Pseudo-Primary (Buttons, Outlines, Glow)
- `src/components/ContextualAIHelp.tsx:184, 185, 216, 227, 231` — Tooltip-Akzent (Dev-Tool, evtl. bewusst andersfarbig)

**Sonstige fremde Hex:**
- `src/components/Hero.tsx:22` — `bg-[#D9D9D9]` Video-Fallback (neutral, Design-Entscheidung)
- `src/pages/Tickets.tsx:23` — `bg-[#1a1a1a]` (sollte `bg-background`/`bg-black`)
- `src/pages/Unterstuetzen.tsx:190` — `bg-[#f4f4f2]` Off-White
- `src/index.css:255` — AI-Cursor Gradient `#a855f7 → #3b82f6` (Dev-Tool, bewusst)

---

### 2. Weiß-auf-Orange (verstößt gegen Kanon „Schwarz auf Orange")

- `src/pages/Tickets.tsx:200` — `bg-primary … text-white` Hauptbutton
- `src/pages/Unterstuetzen.tsx:151` — `bg-primary text-white` Eyebrow-Badge
- `src/pages/Unterstuetzen.tsx:171` — aktiver Tab `bg-primary text-white`
- `src/pages/Unterstuetzen.tsx:261` — Stat-Kachel `bg-primary text-white`
- `src/pages/UeberUns.tsx:554` — Hover-State `hover:bg-primary hover:text-white`
- `src/pages/Entdecken.tsx:160, 240` — `bg-[#CF3D11] text-white` (zusätzlich falscher Orange-Ton)
- `src/index.css` — Token-Definition: `--accent-foreground: 0 0% 100%` ist noch weiß; `--primary-foreground` ist bereits schwarz. Sollten konsistent beide schwarz sein.

---

### 3. Uneinheitliche Active-Tab / Pill / Filter-Muster

Drei koexistierende Implementierungen:

**A — Home-Kanon (eckig, aktiv orange/schwarz, Hover orange):**
- `src/components/AgendaSection.tsx:110-111`
- `src/components/InfoSection.tsx:99-100`
- `src/pages/Programm.tsx:236-237`
- `src/pages/Suche.tsx:178-179`
  → alle hartcodiert `bg-[#E17900]`/`text-black` statt Token.

**B — Abweichend (weißer Text):**
- `src/pages/Unterstuetzen.tsx:171` — `bg-primary text-white`

**C — Komplett fremd:**
- `src/pages/Entdecken.tsx:114, 349` — Outline-Pill in `#CF3D11`

Außerdem: Inaktiv-Variante existiert nur für hellen Hintergrund (`text-black`). Für dunklen Shell ist kein Tab-Stil definiert; aktuell zufällig okay, weil alle Tab-Leisten in hellen Sections stehen.

---

### 4. Primary-Buttons – Abweichungen vom Kanon

**Kanon:** orange Fläche, `text-black`, `font-bold`, eckig (radius 0), on-image zusätzlich `border border-white`.

**Falsche Textfarbe / Weight:**
- `src/pages/Tickets.tsx:200` — `text-white` statt `text-black`
- `src/pages/Entdecken.tsx:160, 240` — `bg-[#CF3D11] text-white font-light` (Farbe + Weight)

**Hartcodiert vs. Token (alle inhaltlich Kanon-konform, aber Hex):**
- `Hero.tsx:60`, `Navigation.tsx:140, 195`, `LeitbildSection.tsx:36`, `ProduktionSection.tsx:45`, `InfoSection.tsx:158`, `AgendaSection.tsx:181, 194`, `Programm.tsx:272, 363`, `Suche.tsx:116`, `EventDetail.tsx:831, 843`

**Token-basiert, aber leicht abweichend:**
- `Unterstuetzen.tsx:385`, `UeberUns.tsx:492`, `Mieten.tsx:349`, `Produzieren.tsx:422`, `Ausstattung.tsx:213` — `bg-primary text-primary-foreground font-bold py-5` (Padding weicht ab)
- `NewsletterSection.tsx:80` — `h-14 px-8` statt `px-16 py-4 h-auto`

**Padding-Wildwuchs der orangen CTAs:**
- Hero: `px-8 py-4`
- Section-CTAs (Leitbild, Produktion, InfoSection, AgendaSection): `px-16 py-4`
- EventDetail Ticket: `px-8 py-6` / `px-12 py-6`
- Filter-CTAs (Programm, Suche, Agenda): `h-[48px]` bzw. `h-[52px]`
- Form-CTAs: `py-5`
- Newsletter: `h-14 px-8`

**`border border-white` (on-image) inkonsistent angewendet:**
- vorhanden: `Hero.tsx:60`, `LeitbildSection.tsx:36`, `ProduktionSection.tsx:45`, `Navigation.tsx:140, 195`, `Ausstattung.tsx:213`
- fehlt obwohl auf Bild/Dark: `EventDetail.tsx:831, 843`, `InfoSection.tsx:158`, `AgendaSection.tsx:194`, `Programm.tsx:272, 363`

Radius: Alle nutzen `--radius: 0rem`, also durchgehend eckig ✔.

---

### 5. Section-Header / Eyebrow – Abweichungen

**Kanon:** `w-10 h-px bg-primary` + Eyebrow-Text in Orange.

- **Strichfarbe:** Home-Komponenten verwenden noch `bg-[#E47C03]` statt `bg-primary` (siehe §1).
- **Strichlänge variiert:** `w-10` (Sections), `w-5` (`Programm.tsx:323/328`, `Suche.tsx:85/90`, `AgendaSection.tsx:142/147` inline), `w-8` (`InfoSection.tsx:144`), `w-6` (`EventDetail.tsx:437`), `w-16` als Unterstreichung in `EventDetail.tsx:467` (`border-b-2 border-[#E17900]`).
- **Strich-Höhe:** `h-[1px]` vs. `h-px` koexistieren (visuell identisch, semantisch inkonsistent).
- **Eyebrow-Text:** überwiegend `text-[#E17900]` hartcodiert statt `text-primary` (`LeitbildSection.tsx:15`, `ProduktionSection.tsx:25`, `Suche.tsx:96`, `Programm.tsx:336`, `EventDetail.tsx:417`, `Entdecken.tsx:64`).
- **InfoSection.tsx:22-25** definiert `kategorieColors` als Hex-Map `"#E17900"` für alle Einträge — sollte Token sein.

---

### 6. Hartcodierte Hex statt Token

Quasi alle Orange-Vorkommen in Home-Komponenten + Programm + Suche + EventDetail + Entdecken + Leitbild + Produktion + Hero + Navigation hängen am Hex (`[#E17900]` / `[#E47C03]`). Token-Migration ist nur konsequent durchgezogen in: Mieten, Produzieren, Ausstattung, Unterstuetzen, UeberUns, Tickets, NewsletterSection.

Weitere hartcodierte Stellen, für die Tokens existieren:
- `text-white`/`text-black` flächendeckend statt `text-foreground` / `text-primary-foreground` / `text-background`.
- `border-gray-200`, `border-black/10`, `text-gray-500`, `text-gray-600` in `EventDetail`, `Footer`, `Suche`, `UeberUns` — Token `border` und `muted-foreground` existieren.
- `bg-gray-50` in `Tickets.tsx:166`, `EventDetail.tsx:774` — Token `muted` existiert.

---

### 7. Per-Page-Theme-Overrides (Light-Inseln im Dark-Shell)

Globales Theme = dunkel (`--background: 0 0% 5%`). Pages mit lokalem Light-Theme:
- `src/pages/Tickets.tsx` — Sections `bg-white` / `bg-gray-50`, dazu Hero `bg-[#1a1a1a]`
- `src/pages/EventDetail.tsx` — `bg-white` / `bg-gray-50`, Texte hartcodiert `text-black`, `text-gray-500`
- `src/pages/Programm.tsx`, `src/pages/Suche.tsx` — heller Content unter dunkler Nav
- `src/pages/UeberUns.tsx`, `Mieten.tsx`, `Produzieren.tsx`, `Ausstattung.tsx`, `Unterstuetzen.tsx` — Hero dunkel, Content hell

Daraus resultierende Probleme:
- Filter-Tabs (§3 Variante A) sind `text-black` — würden auf dunklem Shell unlesbar. Aktuell ok, weil nur in hellen Sections eingesetzt; aber kein universeller Stil.
- Light-Pages umgehen Tokens: `bg-white`/`text-black` statt `bg-background`/`text-foreground`. Ein Theme-Switch wäre derzeit nicht möglich.
- Footer wechselt Variante je Aufruf — Konsistenz mit Section darüber muss manuell gesetzt werden (siehe §9).
- `Hero.tsx:22` `bg-[#D9D9D9]` als Video-Fallback wird bei Videoausfall hellgrau — passt nicht zum dunklen Shell.

---

### 8. Spacing / Container – auffällige Inkonsistenzen

Standard: `container mx-auto px-6 md:px-16`.

Abweichungen:
- `src/pages/UeberUns.tsx:198, 271, 363` — nur `px-6`, kein `md:px-16`
- `src/pages/Produzieren.tsx:172` — nur `px-6`
- `src/pages/EventDetail.tsx:811` — `py-4` statt `py-16 md:py-24` der umgebenden Sections (eigene Bar — vermutlich gewollt)

Section-Paddings unterschiedlich:
- `py-16 md:py-24` (AgendaSection, Tickets, EventDetail, viele Pages) — Standard
- `py-24 md:py-32` (LeitbildSection) — größer
- `py-12 md:py-16` (kleinere Sub-Sections)

Button-Padding-Wildwuchs siehe §4.

---

### 9. Footer – Varianten und Inkonsistenzen

`src/components/Footer.tsx` bietet `variant: "light" | "dark"` plus `sectionAbove: "white" | "black"`.

- **Index.tsx ruft Footer ohne Props** → default `light` nach dunkler NewsletterSection. Curve-Flank-Fallback in `Footer.tsx:38-44` schaltet auf `bg-black`, weil `sectionAbove` undefined und `isDark` false → die schwarze Curve-Flanke passt zufällig zur dunklen Newsletter, ist aber fragil. `sectionAbove` sollte explizit gesetzt sein.
- **Logo-Filter `filter: brightness(0)`** (`Footer.tsx:60`) ist hart auf schwarz — funktioniert nur im light-Footer; bei `variant="dark"` wird das Logo unsichtbar (offener Bug).
- **Body-Text-Farben** verwenden `text-white/60` bzw. `text-gray-600` statt `text-muted-foreground`.
- **Section-Headlines** im Footer sind `font-bold` mit `text-white`/`text-black` — Token `foreground` würde reichen.
- Hover-Akzente `hover:text-primary` ✔ token-konform.
- Footer-Aufrufe in Pages außerhalb Home nicht über alle Dateien geprüft — Spot-Check empfohlen, ob `sectionAbove` korrekt gesetzt ist.

---

### Einschätzung: sicher/automatisch vs. Design-Entscheidung

**Sicher / automatisch (Find-Replace, kein Design-Risiko):**
- Alle `#E47C03` → `bg-primary`/`text-primary` Token (§1, §5).
- Alle hartcodierten `bg-[#E17900]` / `text-[#E17900]` / `border-[#E17900]` → Token (`bg-primary`, `text-primary`, `border-primary`) (§6).
- `text-white` auf `bg-primary` → `text-primary-foreground` (`Tickets.tsx:200`, `Unterstuetzen.tsx:151/171/261`, `UeberUns.tsx:554`) (§2).
- `--accent-foreground` in `index.css` von `0 0% 100%` auf `0 0% 0%` setzen (Konsistenz mit `--primary-foreground`).
- `h-[1px]` → `h-px` vereinheitlichen.
- Footer-Logo-Filter abhängig von `variant` machen (Bug-Fix §9).
- `InfoSection.tsx:22-25` Hex-Map → Token-Referenz.

**Designentscheidung nötig:**
- `#CF3D11`-Theme in `Suche.tsx`, `EventDetail.tsx` (Hover-Akzent), `Entdecken.tsx`, `ContextualAIHelp.tsx`: bleibt zweiter Akzent oder komplett auf `primary` migrieren? `Entdecken.tsx` ist faktisch eine eigene Sub-Brand.
- Einheitliches Padding-/Größen-Set für Primary-Buttons (mind. 3 Varianten Hero/Section/Form) — braucht Spec.
- `border border-white` Regel für „on-image" Buttons konsequent anwenden? Dann müssen `EventDetail`, `InfoSection`, `AgendaSection`, `Programm` ergänzt werden.
- Light-Pages (`Tickets`, `EventDetail`, helle Sections in `UeberUns`/`Mieten`/`Produzieren`/`Ausstattung`/`Unterstuetzen`): bewusste Light-Inseln behalten oder auf dunklen Shell vereinheitlichen?
- Filter-Tab-Stil für Dark-Shell definieren (aktuell nur Light-Variante).
- Strichlängen-Skala (`w-5` / `w-8` / `w-10` / `w-16`) festlegen.
- `Hero.tsx:22` Video-Fallback `#D9D9D9`: dunkel statt hellgrau?
- Footer-`sectionAbove` über alle Pages prüfen und explizit setzen.

Wenn du grünes Licht gibst, mache ich daraus einen zweistufigen Fix-Plan (Stufe 1 = automatische Migration, Stufe 2 = die offenen Designfragen).
