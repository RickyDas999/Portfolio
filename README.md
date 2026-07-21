# Portfolio

Personal portfolio site for Subham (Ricky) Das, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed for free on GitHub Pages.

**Live site:** https://RickyDas999.github.io/Portfolio/

## Tech stack

- [Astro](https://astro.build) — static site generation, zero JS by default
- [Tailwind CSS](https://tailwindcss.com) (v4, via `@tailwindcss/vite`) — styling
- TypeScript
- GitHub Actions + GitHub Pages — CI/CD and hosting

## Project structure

```
src/
├── components/
│   ├── Nav.astro         # Sticky nav bar
│   ├── Hero.astro        # Home/hero section
│   ├── Projects.astro    # Projects section (maps over data/projects.ts)
│   ├── ProjectCard.astro # Individual project card
│   ├── About.astro       # Bio, skills, resume link
│   ├── Contact.astro     # Contact section
│   └── Footer.astro      # Footer with social links
├── data/
│   └── projects.ts       # Project content — add/edit projects here
├── layouts/
│   └── Layout.astro      # Shared page shell (head, nav, footer)
├── pages/
│   └── index.astro       # Single-page site, assembles all sections
└── styles/
    └── global.css        # Tailwind entrypoint

public/
├── resume.pdf            # Served at /Portfolio/resume.pdf
├── favicon.svg
└── favicon.ico
```

## Development

```sh
npm install
npm run dev
```

Dev server runs at `http://localhost:4321/Portfolio/` (note the `/Portfolio/` path — the site is configured with `base: '/Portfolio'` to match its GitHub Pages URL).

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages automatically. No manual deploy step needed.
