# updated.md — EventSphere Iteration History

This file tracks every significant change, redesign, and fix applied to the project.

---

## v1.2 — Revert to Gen-Z Aesthetic (Heavy UX/UI)
**Date:** 2026-05-22  
**Commit:** `revert: bring back Gen-Z heavy UX/UI theme without Lenis`

### Why
User feedback: The minimal theme felt "too clumsy" and they wanted to return to the Gen-Z cinematic aesthetic, but keep it lightweight by not using the Lenis scroll smoother ("lenis is too heavy, i want a hwavy UX and UI too").

### Changes
- **Restored Global Styles:** `index.css` is back to the heavy, glowing, glassmorphism-heavy style.
- **Restored Components:** `Navbar`, `Hero`, `EventCard`, `EventGrid`, `Stats`, `HowItWorks`, `HostCTA`, `Testimonials`, and `Footer` have all been rewritten to include their heavy effects (3D tilts, animated orbs, gradients, grain overlay).
- **Removed Lenis:** `App.jsx` now uses native scrolling with framer-motion page transitions and a grain overlay, keeping the site performant while maintaining visual fidelity.
- **Tailwind Tokens:** Restored all Gen-Z theme tokens (glows, deep space backgrounds, floating animations) in `tailwind.config.js`.

---

## v1.1 — Minimal Theme Redesign
**Date:** 2026-05-22  
**Commit:** `redesign: minimal clean theme — v1.1`

### Why
User feedback: design too busy / clumsy. Requested minimal aesthetic.

### Changes
- Removed: space hero background image, grain overlay, floating orbs, heavy glassmorphism
- New design language: clean minimal dark (Vercel/Linear/Notion-inspired)
- Background: `#0A0A0A` near-black
- Surface cards: `#111111` with `1px solid #1F1F1F` borders
- Typography: tighter, cleaner, less decorative
- Hero: solid gradient instead of imagery, single clean layout
- Navbar: minimal hairline border, clean spacing
- Cards: flat with subtle border, clean hover (border-color lift only)
- Animations: reduced, more restrained — no bouncing orbs
- Color usage: violet accent used sparingly, not everywhere
- Testimonials: cleaner grid layout instead of full-width marquee
- Stats section: clean horizontal rule layout
- Footer: simple dark footer, no large gradient

---

## v1.0 — Initial Build
**Date:** 2026-05-22  
**Commit:** `feat: initial build — EventSphere v1 (space theme)`

### What was built
- Full React + Vite + Tailwind CSS project scaffolded
- 4 pages: Home, Events, PostEvent, About
- Components: Navbar, Hero, EventCard, EventGrid, Stats, HowItWorks, HostCTA, Testimonials, Footer, SEOHead
- Typography system in `font.css` — Instrument Serif / DM Sans / Inter
- Full SEO: OG tags, Twitter cards, JSON-LD, robots.txt, sitemap.xml
- Lenis smooth scroll + Framer Motion page transitions
- Grain texture overlay, floating orb animations, parallax hero
- Glassmorphism throughout — cards, navbar, search bar
- 3D card tilt on hover
- Infinite bi-directional marquee testimonials
- Multi-step animated PostEvent form
- AI-generated hero background and OG social preview image

### Bug Fix
- `AnimatePresence` was missing from `Hero.jsx` import → fixed

### Design: Space / Cinematic Dark
- Background: `#050508` deep space
- Accents: Electric violet `#7C3AED` + Gold `#F59E0B`
- Heavy use of glassmorphism, radial gradient orbs, grain overlay
