# Nova — Marketing Site

The marketing site for **Nova**, a high school business case competition open
to all high school students in Ontario. Built with [Astro](https://astro.build)
as a fast, static site that deploys cleanly to Cloudflare Pages or Vercel.

> **Tagline:** Real cases. Real pressure. Rising stars.
> **Applications close:** September 10, 2026 · **Competition day:** November 14, 2026

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
Nova-Website/
├── astro.config.mjs         # Astro config — static output, no adapter needed
├── package.json
├── tsconfig.json
├── public/                  # served as-is at the site root
│   ├── nova-logo.png        # ← swap in the real Nova logo (placeholder for now)
│   └── favicon.svg
└── src/
    ├── layouts/
    │   └── BaseLayout.astro  # <html> shell: fonts, SEO/OG meta, global CSS,
    │                         #   scroll-reveal script, reduced-motion handling
    ├── styles/
    │   └── global.css        # design tokens (colors, type, spacing) + shared
    │                         #   utility classes (.btn, .card, .section, dividers)
    ├── components/
    │   ├── Nav.astro         # sticky nav + mobile menu + "Apply Now" CTA
    │   ├── Hero.astro        # logo, tagline, key dates, live countdown, CTAs
    │   ├── Starfield.astro   # animated canvas starfield (pauses off-screen,
    │   │                     #   static under prefers-reduced-motion)
    │   ├── Countdown.astro   # live countdown to the application deadline
    │   ├── About.astro       # what Nova is + why (placeholder copy)
    │   ├── Format.astro      # 2 rounds; 90 / 10 / 3 per-round breakdown
    │   ├── Eligibility.astro # Ontario-wide, grades 9–12, teams of 4
    │   ├── Timeline.astro    # applications open → close → finalists → comp day
    │   ├── Prizes.astro      # cash-prize tiers (dollar figures TBA)
    │   ├── Sponsors.astro    # Gold / Silver / Bronze tiers + "Become a Sponsor"
    │   ├── FAQ.astro         # accessible <details> accordion
    │   ├── Apply.astro       # intro + Jotform embed container (see below)
    │   └── Footer.astro      # contact email + social links
    └── pages/
        └── index.astro       # single page — imports and orders every section
```

## Common edits

- **Logo:** replace `public/nova-logo.png` with the real artwork (keep the
  filename, or update the `src` in `Nav.astro`, `Hero.astro`, `Footer.astro`).
- **Jotform application form:** open `src/components/Apply.astro` and paste your
  Jotform iframe embed code where you see:
  ```html
  <!-- JOTFORM EMBED: paste Jotform iframe embed code here -->
  ```
  Then delete the placeholder block below it. The iframe inherits the dark
  container styling automatically.
- **Prize amounts:** edit the `amount` values in `src/components/Prizes.astro`
  (currently `$—`). The layout is designed to drop in real figures.
- **Sponsors:** replace the placeholder slots in `src/components/Sponsors.astro`
  with real sponsor logos.
- **Brand colors / fonts:** all tokens live at the top of `src/styles/global.css`
  under `:root` — change them in one place.
- **Contact email / socials:** edit `src/components/Footer.astro`.

## Design system

| Token | Value | Use |
| --- | --- | --- |
| Background | `#0B0B0D` | page background |
| Text | `#FFFFFF` | primary text |
| Muted | `#A0A0A8` | secondary text |
| Steel blue | `#2B6E96` | primary accent — starburst, links, buttons, glows |
| Brushed gold | `#C6A24A` | premium highlights, Gold sponsor tier |
| Headings | Zilla Slab (slab-serif) | echoes the wordmark |
| Body | Inter (sans-serif) | readable body copy |

**Motif:** a nova starburst with a comet-tail swoosh, a subtle animated
starfield in the hero, and comet-trail dividers between sections.

## Accessibility

- Strong contrast against the dark background, alt text on all images.
- Fully keyboard-navigable with visible focus rings and a skip link.
- Respects `prefers-reduced-motion`: the starfield goes static, scroll-reveal
  and float animations are disabled, and smooth scrolling is turned off.
- Content still shows with JavaScript disabled (`<noscript>` fallback).

## Deploying

The site is fully static (`output: 'static'`).

- **Cloudflare Pages / Vercel:** connect the repo, set the build command to
  `npm run build` and the output directory to `dist/`. No adapter or server
  runtime required.
