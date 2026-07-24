# Rovana

A luxury travel homepage built with Next.js — tailor-made trip showcases, a trips carousel, testimonials, and a newsletter signup.

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript strict
- **shadcn/ui** — Radix primitives + Tailwind CSS v4
- **Tailwind CSS v4** — oklch design tokens
- **Lucide React** — icons
- **Supabase Storage** — hosts the hero background video

## Commands

```bash
npm install
npm run dev    # Start dev server
npm run build  # Production static export (output/)
npm run lint   # ESLint check
```

## Project Structure

```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # SVG icons
  data/             # Homepage content
  lib/              # utils, asset/video URL helpers
public/
  images/           # Site images
```

Deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

## License

MIT
