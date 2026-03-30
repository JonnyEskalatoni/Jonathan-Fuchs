# Website V2 – Jonathan

Vollständig überarbeitete Version.

## Änderungen gegenüber V1

- Hero: Full-width statt Split-Screen, Text auf Bild mit Gradient-Overlay
- Design: Wechsel aus warmem Off-White, Parchment, Anthrazit und Dunkel – nicht mehr durchgehend schwarz
- Fonts: Playfair Display (Display) + Jost (Body) – ruhiger, reifer, editorial
- 8 Wochen → **12 Wochen**
- "Erstgespräch" → **"Kennenlerngespräch"** durchgehend
- Trust Strip: Kompetenzbereiche konkret benannt
- Neue Sektion: **3 Kompetenzbereiche** (Physiotherapie, Sporttherapie, Mentale Begleitung)
- Problem-Sektion: Zielgruppe hat oft bereits viel versucht / frühere Leistungsfähigkeit
- Identifikationskarten: 6 spezifische Erkennungspunkte inkl. Beweglichkeit
- Über mich: Physiotherapeut, Sporttherapeut, Sportlehrer konkret benannt
- Formulare: Echte `<form>` Elemente mit Submit-Button und Validation Feedback
- FAQ: Accessibility-konform mit `aria-expanded`
- Abschluss-CTA: überarbeitet, präziser formuliert

## Projektstruktur

```
website-v2/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        ├── hero-portrait.jpeg      ← JonathanJuliaShooting-129
        ├── solution-portrait.jpeg  ← JonathanJuliaShooting-97
        └── about-portrait.jpeg     ← JonathanJuliaShooting-147
```

## Formular-Backend

Die Formulare sind client-seitig vorbereitet. Für echten E-Mail-Versand:
- **Formspree**: `<form action="https://formspree.io/f/YOURCODE">`
- **Netlify Forms**: `<form netlify>`
- Oder eigenes Backend / Zapier

## Deployment

GitHub Pages, Netlify oder Vercel – alle unterstützen statische Sites.
