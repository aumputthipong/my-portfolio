---
version: alpha
name: My Portfolio
description: Visual identity for the personal portfolio of Putthipong Chobngam (AUM) — a Next.js 16 + React 19 single-page portfolio.
colors:
  primary: "#1d4ed8"
  on-primary: "#ffffff"
  secondary: "#0f172a"
  on-secondary: "#ffffff"
  neutral: "#ffffff"
  on-neutral: "#0f172a"
  muted: "#4b5563"
  border: "#e5e7eb"
  accent: "#166534"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: Gill Sans, Calibri, "Trebuchet MS", sans-serif
    fontSize: 4.5rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1:
    fontFamily: Gill Sans, Calibri, "Trebuchet MS", sans-serif
    fontSize: 3rem
    fontWeight: 800
    lineHeight: 1.1
  h2:
    fontFamily: Gill Sans, Calibri, "Trebuchet MS", sans-serif
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
  body-md:
    fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
  label-caps:
    fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 0.6875rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.1em
rounded:
  sm: 6px
  md: 12px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 10px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    rounded: "{rounded.lg}"
    padding: 16px
  card-divider:
    backgroundColor: "{colors.border}"
    height: 1px
  status-pill:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 6px
  caption-text:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
---

## Overview

The portfolio's visual identity is **calm, modern, and content-first**. It pairs a deep ink neutral (`secondary`) with a single blue brand accent (`primary`) on a clean white canvas. Heading copy uses Gill Sans for a confident, slightly editorial tone; body copy falls back to the platform UI stack for readability.

Decorative motion (soft blurred orbs, typing animation, scroll-smooth navigation) keeps the page lively without distracting from the work being presented. Every chrome element — buttons, pills, cards — leans on full rounding and soft elevation to feel modern and friendly.

## Colors

The palette intentionally stays narrow. One brand color carries interaction; one ink neutral carries hierarchy; everything else is whites, grays, and a single semantic green for "available" status.

- **Primary (`#1d4ed8`):** Brand blue. Reserved for hover states on the main CTA and accent details.
- **Secondary (`#0f172a`):** Deep ink. The default surface for primary buttons and headlines.
- **Neutral (`#ffffff`):** Page and card background.
- **Muted (`#4b5563`):** Secondary body copy, captions, metadata.
- **Border (`#e5e7eb`):** Hairlines, card outlines, dividers.
- **Accent (`#166534`):** Semantic success — the "Available for work" status pill.
- **On-\*** tokens always carry sufficient contrast against their paired surface (WCAG AA 4.5:1+).

## Typography

Headings use **Gill Sans**; body uses the **system UI stack**. Type scale is deliberately limited to six steps so the page reads as one coherent voice.

- **Display** — hero name, gradient-filled.
- **H1 / H2** — section titles.
- **Body-md** — paragraphs and long-form copy. Always `line-height: 1.625` for comfortable reading.
- **Caption** — meta rows, button labels, small UI text.
- **Label-caps** — uppercase eyebrow labels (`Scroll to explore`, status badges).

## Layout

The page is built on a single centered column (`max-w-6xl`, ~1152px) with section padding stepping through `spacing.lg` → `spacing.xl`. Mobile-first; `lg:` (1024px) is the primary desktop breakpoint.

| Token | Use |
|:------|:----|
| `spacing.xs` (4px) | Icon-to-text gaps, tight chip padding |
| `spacing.sm` (8px) | Inline gaps between siblings |
| `spacing.md` (16px) | Card internal padding, paragraph rhythm |
| `spacing.lg` (24px) | Stack between content groups |
| `spacing.xl` (40px) | Section-to-section vertical rhythm |

## Elevation & Depth

Elevation is expressed through soft shadows and subtle background blurs, never hard borders alone.

- **Resting pill / chip:** `shadow-sm` over white.
- **Buttons:** `shadow-md`, lifting to `shadow-lg` on hover.
- **Feature card (ID card, project card):** `shadow-xl`.
- **Ambient depth:** decorative blurred color orbs (`blur-3xl` at 5% opacity) sit behind hero content to add perceived depth without competing for attention. Always `pointer-events-none`.

## Shapes

Rounded corners are heavy and consistent. The site has effectively no sharp 0px corners outside of the underlying image content.

- `rounded.sm` (6px) — small inline chips, social link buttons.
- `rounded.md` (12px) — inner image wells inside cards.
- `rounded.lg` (16px) — primary card surfaces.
- `rounded.full` — every button, every status pill, every dot.

A repeating 45° hairline pattern (`rgba(148,163,184,0.12)`) overlays the profile photo well to suggest an ID-card / passport texture.

## Components

- **`button-primary`** — the default call to action. Solid `secondary` background, white text, fully rounded, `caption` typography. Used for "View My Work", contact CTAs, and any single dominant action per view.
- **`button-primary-hover`** — hover state shifts the surface to `primary` blue while keeping white text, preserving contrast.
- **`button-secondary`** — outlined-feeling secondary action on a white surface with a `border` hairline. Used for "Contact Me", "Cancel", and supportive actions.
- **`card`** — the base surface for everything from project tiles to the hero ID card. Always white, `rounded.lg`, with `shadow-xl` applied externally.
- **`card-divider`** — 1px `border`-colored hairline used inside cards to separate header / body / footer regions.
- **`status-pill`** — semantic green capsule used exclusively for live status (e.g. "Available for work"). Pair with the `animate-ping` halo dot.
- **`caption-text`** — muted body text for metadata rows (location, email, graduation year).

## Do's and Don'ts

**Do**
- Use `secondary` (deep ink) as the default heavy surface; reserve `primary` blue for accents and hover.
- Stack content vertically on mobile; only introduce horizontal layouts at `lg:` and above.
- Keep motion subtle: entrance fades, typing on a single line, hover elevation. Never animate everything at once.
- Always pair icons with text or `aria-label`. Use `target="_blank" rel="noopener noreferrer"` on external links.

**Don't**
- Don't introduce a third brand color. The palette is intentionally narrow.
- Don't mix sharp 0px corners with the rounded system — pick `rounded.sm` or larger.
- Don't put muted text (`muted`) on anything other than the white `neutral` surface; contrast will fail elsewhere.
- Don't use the green `accent` for anything other than live/availability status. It is not a generic success color.
