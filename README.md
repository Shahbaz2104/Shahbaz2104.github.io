# shahbaz2104.github.io

Personal portfolio for **Muhammad Shahbaz** — full-stack and AI/ML engineer based in Karachi.

The site is a statically exported Next.js app deployed to GitHub Pages. It presents six selected projects, the work behind them, and a downloadable resume.

## Stack

- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons
- next-themes for light/dark mode

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run lint
npm run build
```

The static site is written to `out/`.

## Content

Project cards, secondary projects and skill groups live in `app/data/projects.ts`. Page sections are in `app/components/`.

Replace `public/resume.pdf` whenever the resume changes.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, builds the site, and publishes `out/` to GitHub Pages.
