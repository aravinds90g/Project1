# Alex Chen — Portfolio

A complete personal portfolio website built with Next.js 14, Tailwind CSS, and GSAP + ScrollTrigger.

## Features

- **Pure black theme** with accent color (#ff2a6d)
- **Custom cursor** with lerp animation (ring + dot)
- **Preloader** with animated counter and split-panel exit
- **Hero section** with staggered character animations
- **About section** with sticky layout and clip-path image reveal
- **Projects section** with stacking card effect using ScrollTrigger pin
- **Skills marquee** with bidirectional infinite scroll
- **Experience timeline** with SVG line-draw animation
- **Stats section** with animated count-up numbers
- **Contact section** with email scramble effect
- **Grain texture overlay** across entire site
- **Smooth scrolling** via Lenis synced with GSAP ticker

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- Space Grotesk + JetBrains Mono (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
/app
  layout.tsx        — fonts, metadata, grain overlay
  page.tsx          — assembles all sections
  globals.css       — CSS variables, grain, base styles
/components
  Cursor.tsx        — custom cursor with lerp
  Preloader.tsx     — split-panel preloader
  Navbar.tsx        — fixed navigation with blur on scroll
  Hero.tsx          — full-screen hero with char animations
  About.tsx         — sticky two-column about
  Projects.tsx      — stacking card showcase
  Marquee.tsx       — bidirectional skill ticker
  Experience.tsx    — SVG timeline with line draw
  Stats.tsx         — animated statistics
  Contact.tsx       — contact + footer
/lib
  gsap-init.ts      — GSAP plugin registration
  lenis.ts          — Lenis init + GSAP sync
/public
  noise.svg         — grain texture
```

## License

MIT
