# Portfolio Website - Jordan Sutarto

A personal portfolio website for Jordan Sutarto, a Fullstack Developer and AI Enthusiast.

## Tech Stack

- **Framework:** Astro v5 (static site generator)
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP, Lenis (smooth scroll), Split-Type
- **Icons:** Lucide-Astro
- **Build Tool:** Vite (integrated with Astro)
- **Package Manager:** npm

## Project Structure

- `src/components/` - Reusable Astro components
  - `sections/` - Page sections (Hero, Projects, Skills, About)
- `src/data/portfolio.ts` - Centralized data (projects, skills, certificates)
- `src/layouts/Layout.astro` - Base layout template
- `src/pages/` - Routes (index, projects list, project detail)
- `src/lib/gsap-setup.ts` - GSAP animation utilities
- `src/styles/global.css` - Global CSS
- `public/` - Static assets (images, favicons)

## Development

```bash
npm install
npm run dev      # Start dev server on port 5000
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build
```

## Configuration

- Dev server runs on `0.0.0.0:5000` with all hosts allowed (Replit proxy compatibility)
- Deployment: static site, build with `npm run build`, public dir: `dist/`
