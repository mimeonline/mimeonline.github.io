# michaelmeierhoff.de

Persoenliche Website von Michael Meierhoff.  
Die Seite dient als digitale Visitenkarte mit Profil, Kurzvorstellung und direkten Links zu Social- und Business-Praesenzen.

## Zweck

- Klare, kompakte Selbstdarstellung
- Schnell erreichbare Kontakt- und Netzwerklinks
- Solide technische Basis fuer spaetere Erweiterungen

## Tech Stack

- Astro 5
- Tailwind CSS 4
- daisyUI 5
- pnpm
- Node.js 25 (`.nvmrc`, `engines`)

## Projektstruktur

```text
/
├── public/                # Statische Dateien (favicon, robots.txt, ...)
├── src/
│   ├── images/            # Profil- und Medienbilder
│   ├── components/        # Wiederverwendbare UI-Bausteine
│   ├── content/           # Zentrale Site-Konfiguration (Texte, Links, Meta)
│   ├── layouts/           # Seiten-Layouts
│   ├── pages/             # Routen (u. a. Startseite)
│   └── styles/            # Globale Styles (Tailwind v4)
├── .github/workflows/     # CI/CD Deployment nach GitHub Pages
└── package.json
```

## Entwicklung

Alle Befehle im Projekt-Root ausfuehren:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `pnpm install`          | Installiert alle Abhaengigkeiten                 |
| `pnpm dev`              | Startet lokalen Dev-Server auf `localhost:4321`  |
| `pnpm build`            | Erstellt Production-Build in `dist/`             |
| `pnpm preview`          | Startet Preview des Build-Artefakts              |
| `pnpm lint`             | Fuehrt Linting aus                               |
| `pnpm check`            | Fuehrt Astro/Type-Checks aus                     |
| `pnpm check:links`      | Prueft generierte HTML-Dateien auf defekte Links |
| `pnpm audit:lighthouse` | Fuehrt Lighthouse (Performance + A11y + SEO) aus |
| `pnpm quality`          | Fuehrt `lint + prettier + check` aus             |

## Deployment

Das Deployment erfolgt ueber GitHub Actions bei Push auf `main` nach GitHub Pages.  
Workflow-Datei: `.github/workflows/deploy.yml`
