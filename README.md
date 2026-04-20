# Manhal's Sweets & Cafe — marketing site

A small, image-led Next.js 16 marketing site for **Manhal's Sweets & Cafe**, opening 26 April 2026.

## Run it

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## What's in here

- `app/page.tsx` — Home (opening-day hero, three pillars, story, featured cakes, visit CTA)
- `app/cakes/page.tsx` — Cakes highlight (nine signature cakes + custom order CTA)
- `app/menu/page.tsx` — Menu preview (full menu drops 26 April)
- `app/contact/page.tsx` — Contact & pastry orders (form, hours, address, lead times)
- `app/components/` — Shared `SiteHeader`, `SiteFooter`, `Wordmark`, `Photo`, `Ornament`
- `app/fonts/HourglassOfShine.otf` — brand display font (used by the `font-display` class)
- `public/brand/logo.svg` — full logo (from the supplied brand pack)
- `public/Final files/` — the original supplied brand files (untouched)

## Design system

Brand tokens are defined in `app/globals.css` and exposed as Tailwind 4 theme vars:

| Token | Hex | Use |
|---|---|---|
| `bg-cream` | `#f6efe3` | page background |
| `bg-cream-soft` / `bg-cream-deep` | `#efe5d3` / `#e7d8bf` | alternating section washes |
| `text-ink` | `#1c120d` | body text |
| `text-ink-soft` / `text-ink-muted` | `#3b2a21` / `#6b5346` | secondary text |
| `text-burgundy` / `bg-burgundy` | `#561b0d` | brand dark — from the logo |
| `text-gold` / `text-gold-light` | `#c89b54` / `#e6b865` | brand accent — from the logo |
| `border-line` / `border-line-soft` | `#d9c9b1` / `#e6d9c1` | warm hairlines |

Typography: **Fraunces** (soft editorial serif) for display, **Inter** for UI, **Hourglass of Shine** as a feature display font.

## Placeholders to swap

- Photography — every `<Photo/>` block is a warm gradient stand-in. Replace by dropping real images into `/public` and rendering a `next/image` inside the `<Photo>` (or replacing the component body).
- Menu items — `app/menu/page.tsx` has a skeleton of sections; swap in the real menu on 26 April.
- Address, phone, email — placeholder in `SiteFooter`, `ContactPage`, and metadata in `app/layout.tsx`.
- `metadataBase` in `app/layout.tsx` — update to the live domain.

## Notes on Next.js 16

- Turbopack is default — no flag needed.
- `params` / `searchParams` are async — not used here since all pages are static.
- Uses React 19.2 under the hood.
