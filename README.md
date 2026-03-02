# OpenClaw Skill Webseite

Ein schlanker React + Vite One-Pager als kleiner Marketplace für Open-Source-OpenClaw-Skills.

## Features

- Übersichtliche Skill-Karten
- Pro Skill:
  - kurze Beschreibung
  - YouTube-Video-Link
  - GitHub-Repo-Link
  - ZIP-Download (direkt aus GitHub)
- Modernes UI mit Hover-Effekten
- Vercel-ready Deployment

## Lokaler Start

```bash
npm install
npm run dev
```

Dann im Browser öffnen:

```text
http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Skill-Daten pflegen

Alle Inhalte liegen zentral in:

```text
src/data.js
```

Jeder Eintrag hat:

- `title`
- `description`
- `videoUrl`
- `repoUrl`

Der ZIP-Link wird automatisch aus `repoUrl` erzeugt (`main.zip`).

## Deployment (Vercel)

### Option A: GitHub Import (empfohlen)
1. Repo in Vercel importieren
2. Framework: **Vite** (wird i. d. R. automatisch erkannt)
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Option B: CLI

```bash
npm i -g vercel
vercel
```

## Hinweise

- Falls ein Repo einen anderen Default-Branch als `main` nutzt, den ZIP-Link im Code anpassen.
- Für private Repos funktioniert der direkte ZIP-Download nur mit Auth.
