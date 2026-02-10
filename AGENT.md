# AGENT.md

## Zweck

Diese Datei definiert projektbezogene Regeln für KI-Agents in diesem Repository.
Ziel: konsistente, sichere und wartbare Änderungen.

## Projektkontext

- Projekt: persönliche Website (`michaelmeierhoff.de`)
- Stack: `Astro 5`, `Tailwind CSS 4`, `daisyUI 5`
- Paketmanager: `pnpm` (verpflichtend)
- Deployment: GitHub Actions nach GitHub Pages

## Verbindliche Regeln

- Nutze ausschließlich `pnpm` für Install/Build/Lint/Preview.
- Keine Re-Introduktion von `npm`/`npx`/`yarn`-Befehlen in Skripten oder CI.
- Änderungen minimal-invasiv und strukturerhaltend durchführen.
- Keine unaufgeforderten Breaking Changes.
- Keine Secrets, Tokens oder Zugangsdaten in Code/CI/Doku einbetten.

## Build- und Qualitätschecks (vor Abschluss)

Führe nach relevanten Änderungen immer aus:

1. `pnpm install` (falls Dependencies geändert wurden)
2. `pnpm lint`
3. `pnpm build`

Nur mit grünem Build abschließen (Ausnahme begründen).

## Frontend-Richtlinien

- Bestehende visuelle Richtung beibehalten, außer explizit anders angefordert.
- Externe Links mit `target="_blank"` immer mit `rel="noopener noreferrer"`.
- Accessibility mitdenken (aussagekräftige `alt`/`aria-label`, semantische Struktur).
- Keine unnötigen externen CDN-Abhängigkeiten hinzufügen.

## Tailwind-v4-Regeln

- Integration über `@tailwindcss/vite` in `astro.config.mjs`.
- Globale Styles in `src/styles/global.css` (`@import "tailwindcss";`, `@plugin "daisyui";`).
- Keine Rückmigration auf alte `@astrojs/tailwind`- oder PostCSS-Legacy-Setups.

## CI/CD-Richtlinien

- Workflow-Datei: `.github/workflows/deploy.yml`
- Actions-Major-Versionen aktuell halten (z. B. `actions/checkout@v4`, `actions/setup-node@v4`).
- Installationsschritt in CI: `pnpm install --frozen-lockfile`.

## Dateikonventionen

- ASCII bevorzugen.
- Kommentare nur dort, wo sie echten Mehrwert liefern.
- Keine toten Blöcke, keine Duplikate, keine versteckten Nebeneffekte.

## Empfohlener Arbeitsablauf für Agents

1. Bestehende Struktur prüfen.
2. Betroffene Dateien gezielt ändern.
3. Lint + Build ausführen.
4. Kurz dokumentieren:
   - Was wurde geändert?
   - Warum?
   - Welche Checks wurden ausgeführt?

## Out of Scope ohne explizite Anweisung

- Großflächige Rewrites
- Architekturwechsel
- Tooling-Wechsel außerhalb des aktuellen Stacks
