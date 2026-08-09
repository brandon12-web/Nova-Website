# Nova Case Competition — Website

The website for **Nova Case Competition**, a high school business case
competition. Built with [Astro](https://astro.build) as a fast, static site
that deploys cleanly to Cloudflare Pages or Vercel.

> **Event:** November 14, 2026 · Ontario Tech University, Oshawa ON
> **Cost:** $25 per delegate · Open to all high school students

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Editing the site — start here

Almost everything you'll want to change lives in **two files**:

1. **`src/config/template.ts`** — all text/content: event name, date, venue,
   nav links, section copy, prizes, sponsors, FAQ, footer, and the
   registration button link. Edit values here and the whole site updates.
2. **`src/styles/template.css`** — the brand. The `EDIT THESE` block at the
   top holds the colours and fonts:

   | Token | Value | Use |
   | --- | --- | --- |
   | `--brand` | `#0B1E3D` | deep navy — headings, footer, dark panels |
   | `--cyan` | `#00D4FF` | bright cyan — accents, starburst, glows |
   | `--accent` | `#FFB800` | gold — buttons and highlights |
   | `--bg-alt` | `#F5F7FA` | off-white — alternating section backgrounds |
   | `--font-head` | Impact / Oswald | headings |
   | `--font-body` | Poppins | body copy |

## Common edits

- **Registration (JotForm):** in `src/config/template.ts`, set
  `register.ctaHref` to your JotForm link (JotForm → Publish → Copy Link).
  Leave the top-level `ctaHref` as `"#register"` so the nav/hero buttons
  scroll down to the Register section.
- **Price:** `register.price` (currently `$25`) and `register.priceNote`.
- **Prizes:** the `prizes.tiers` array (1st/2nd/3rd amounts).
- **Sponsors:** `sponsors.logos` — currently just `CPA Canada` as text. To
  show logo images instead, drop files in `public/` and reference them.
- **FAQ:** the `faq.items` array.
- **Logo:** the nav uses `public/nova-logo-dark.png` (navy, for light
  backgrounds) and the footer uses `public/nova-logo-light.png` (white, for
  the dark footer). Swap these files (keep the names) to update both.

## Project structure

```
src/
├── config/
│   └── template.ts          # ← all site content (edit here)
├── layouts/
│   └── TemplateLayout.astro  # <html> shell: fonts, meta, scroll-reveal + nav JS
├── styles/
│   └── template.css          # design tokens (EDIT THESE) + all component styles
├── components/template/
│   ├── Nav.astro             # sticky nav + mobile menu + Register CTA
│   ├── Hero.astro            # title, tagline, event facts, starburst visual
│   ├── About.astro           # about + stat highlights
│   ├── Included.astro        # "what's included" feature cards
│   ├── Competition.astro     # the case competition callout
│   ├── Prizes.astro          # 1st / 2nd / 3rd cash-prize cards
│   ├── Register.astro        # price + Register button
│   ├── Sponsors.astro        # partner logos / names
│   ├── FAQ.astro             # accessible <details> accordion
│   ├── Footer.astro          # logo, event details, contact links
│   ├── Schedule.astro        # (not shown — kept for when the schedule is set)
│   └── Speakers.astro        # (not shown — kept for when speakers are confirmed)
└── pages/
    └── index.astro           # homepage — imports and orders the sections
```

To re-add the **Schedule** or **Speakers** sections later: import the
component in `src/pages/index.astro`, add it to the layout, fill in its data
in `src/config/template.ts`, and add a nav link.

## Accessibility

- Keyboard-navigable with visible focus rings; alt text on images.
- Respects `prefers-reduced-motion` (float/scroll-reveal animations disabled).
- Content still shows with JavaScript disabled (`<noscript>` fallback).

## Deploying

The site is fully static (`output: 'static'`). On Cloudflare Pages or Vercel,
connect the repo, set the build command to `npm run build` and the output
directory to `dist/`. No adapter or server runtime required.
