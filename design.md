---
version: alpha
name: My Portfolio
description: Visual identity for the personal portfolio of Putthipong Chobngam (AUM) — a Next.js 16 + React 19 single-page portfolio. Editorial, monochrome, with a single botanical-green accent.
colors:
  neutral: "#ffffff"
  on-neutral: "#0f172a"
  surface: "#fafafa"
  ink: "#0f172a"
  body: "#4b5563"
  muted: "#9ca3af"
  border: "#e5e7eb"
  accent: "#1f6f4e"
  accent-dark: "#14532d"
  accent-soft: "#ecf4ef"
  on-accent: "#ffffff"
colorsDark:
  canvas: "#131110"
  surface: "#1c1a18"
  card: "#2b2825"
  ink: "#f0ece6"
  body: "#aca69c"
  muted: "#857d72"
  line: "#3b3630"
  accent: "#5cc08d"
  accent-strong: "#7fd4a8"
  accent-soft: "#1d2a20"
  on-accent: "#131110"
typography:
  display:
    fontFamily: Fraunces, Georgia, "Times New Roman", serif
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.01em
  h2:
    fontFamily: Fraunces, Georgia, serif
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.05
  h3:
    fontFamily: Fraunces, Georgia, serif
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.2
  body-md:
    fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  meta-mono:
    fontFamily: ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.05em
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  3xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.xl}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.body}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.xl}"
    padding: 12px 24px
  button-compact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.lg}"
    padding: 8px 14px
  card:
    backgroundColor: "{colors.neutral}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.2xl}"
    padding: 12px
  chip:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  tech-badge:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.body}"
    border: "1px solid {colors.border}"
    typography: "{typography.meta-mono}"
    rounded: "{rounded.md}"
    padding: 6px 10px
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
---

## Overview

The portfolio's visual identity is **editorial, monochrome, and content-first**. It pairs a deep ink (`ink`) on a clean white canvas with a single, meaningful **botanical-green accent** (`accent`, `#1f6f4e`) drawn from the subject's flagship "AI Garden System" project. The accent is spent sparingly — heading periods, active states, link hovers, small marks — never as a wash.

Headings use **Fraunces**, a high-contrast display serif, which carries the personality of the page; body copy falls back to the platform UI sans for readability. The result reads as a deliberate design choice rather than a templated default.

Motion is restrained: brief entrance fades and hover lifts only. Everything respects `prefers-reduced-motion` (the homepage showcase stops auto-advancing; transitions collapse).

## Colors

The palette is intentionally narrow: one ink for hierarchy, one green for accent, neutrals for everything else. There is **no blue** and no secondary brand color.

- **Neutral (`#ffffff`):** Page and card background.
- **Surface (`#fafafa`, zinc-50):** Alternating section ground (About, Contact) for rhythm against white (Hero, Projects).
- **Ink (`#0f172a`, slate-900):** Headlines, primary buttons, the first half of the name wordmark.
- **Body (`#4b5563`):** Paragraph and long-form copy.
- **Muted (`#9ca3af`):** Captions, secondary metadata.
- **Border (`#e5e7eb`):** Hairlines, card outlines, dividers.
- **Accent (`#1f6f4e`):** Botanical green. Heading periods, active nav/tab/thumb, link hover, the surname in the wordmark, eyebrow dashes, contact icons.
- **Accent-soft (`#ecf4ef`):** Tinted background for chips, active thumbnails, responsibility markers.
- **Accent-dark (`#14532d`):** Reserved for accent hover/pressed.

## Dark mode

The palette is delivered through **semantic tokens** (`canvas`, `surface`, `card`, `ink`, `body`, `muted`, `line`, `accent`, `accent-strong`, `accent-soft`, `on-accent`) rather than raw Tailwind colors. Each token is a CSS variable defined on `:root` (light) and overridden on `.dark`; the Tailwind utilities (`bg-canvas`, `text-ink`, `border-line`, …) resolve to those variables via `@theme inline`, so a single class works in both themes. Theme selection is handled by `next-themes` (`class` strategy) with a sun/moon toggle in the navbar.

Naming maps from the light palette: `border` → **`line`**, and a new **`card`** token sits above `surface` for raised surfaces.

- **Neutral, faintly-warm base:** the dark neutrals are kept *neutral* (a whisper of warmth to flatter the Fraunces serif) — **no green cast**. Green lives only in the accent, mirroring the light-mode rule "neutrals stay neutral, one green accent". Ramp: `canvas` `#131110` < `surface` `#1c1a18` < `card` `#2b2825`; light mode is `#ffffff` / `#fafafa` / `#ffffff`.
- **Elevation reads through fill + hairline:** fill steps are small on a dark ground (card↔canvas ≈ 1.4:1), so a clearly-visible `line` (`#3b3630`, ≈ 1.6:1 against canvas) shares the separating work — cards read as raised without heavy shadows or ID-card borders.
- **Accent lifts in dark:** botanical green moves to `#5cc08d` (`accent-strong` `#7fd4a8`, `accent/canvas` ≈ 8.4:1) because the light `#1f6f4e` fails contrast on a dark ground. `accent-soft` is a deep `#1d2a20` chip tint, and `on-accent` flips to near-black.
- **Text ramp:** `ink` `#f0ece6`, `body` `#aca69c`, `muted` `#857d72` — warm off-whites, never pure white, all passing WCAG AA on canvas.
- **Content images:** large white screenshots carry `dark:brightness-90` so they don't punch bright holes in the dark UI (icons, logos, and the portrait are untouched).
- **Inverted / always-dark elements:** image backdrops, the lightbox, video title bars, and on-image overlay chips stay dark with white text in **both** themes — they sit on media, not on the page ground. The footer is the one deliberately inverted block: a dark band in light mode, a `surface` band with a top hairline in dark.

## Typography

Headings use **Fraunces** (display serif); body uses the **system UI sans** stack; small structural metadata uses a **monospace**.

- **Display** — hero name (two lines, surname in accent), set large with tight leading.
- **H2** — section headlines ("Selected Projects.", "Let's build something good.") with an accent period.
- **H3** — sub-headings ("Tech stack", "Education", "Responsibilities") and project titles.
- **Body-md** — paragraphs; comfortable `line-height: 1.625`.
- **Meta-mono** — uppercase metadata lines (`TYPE · PLATFORM · YEAR`), eyebrows, tech badges.

## Layout

Editorial and generous. Home content sits in a centered `max-w-6xl`; project detail pages use a tighter `max-w-5xl` with a **full-width, stacked** flow (back → meta → title → tech → large media → details) so imagery is never cramped beside text.

Sections alternate `neutral` / `surface` for rhythm. `scroll-padding-top` offsets anchored sections beneath the floating navbar.

| Token | Use |
|:------|:----|
| `spacing.sm` (8px) | Inline gaps |
| `spacing.md` (16px) | Card padding, paragraph rhythm |
| `spacing.lg` (24px) | Stacks between groups |
| `spacing.xl` (40px) | Section vertical rhythm |
| `spacing.2xl` (64px) | Hero / large breaks |

## Shapes

Generous, varied rounding rather than uniform pills:

- `rounded.md` (8px) — tech badges.
- `rounded.lg` (12px) — compact buttons.
- `rounded.xl` (16px) — primary/secondary buttons, thumbnails.
- `rounded.2xl` (24px) — project cards.
- `rounded.3xl` (32px) — hero photo and detail media (soft, prominent).
- `rounded.full` — chips, eyebrow dots, nav pills, status dots.

## Components

- **`button-primary`** — solid ink, white text, `rounded.xl`. The dominant action ("View Details").
- **`button-secondary`** — white with a `border` hairline, `rounded.xl` ("Code", "Figma" at full size).
- **`button-compact`** — small ink button, `rounded.lg`, for inline detail-header actions ("Code").
- **`card`** — project tile: white, hairline border, `rounded.2xl`; hover deepens border and adds a soft shadow (no lift).
- **`chip`** — `accent-soft` background, `accent` text, fully rounded. Category / project-type labels.
- **`tech-badge`** — white, hairline border, monospace, `rounded.md`; hover tints to `accent-soft`.
- **`divider`** — 1px `border` hairline separating editorial blocks.

## Signature

The page is remembered by its **Fraunces wordmark** — "Putthipong" in ink, "Chobngam." in botanical green — and the **offset-framed portrait** (a hairline accent frame shifted behind a `rounded.3xl` photo).

## Do's and Don'ts

**Do**
- Keep ink for hierarchy and reserve green for accents, active states, and one period per headline.
- Let Fraunces headlines carry personality; keep body copy quiet.
- Alternate `neutral` / `surface` section backgrounds for rhythm.
- Respect `prefers-reduced-motion`; keep motion subtle and purposeful.
- Pair icons with text or `aria-label`; use `target="_blank" rel="noopener noreferrer"` on external links.

**Don't**
- Don't reintroduce blue, gradients on the name, blurred orbs, status pills, typing animations, or numbered section counters — these were removed for reading as templated/AI-generated.
- Don't flood the page with green; the accent should stay roughly 5–10% of the surface.
- Don't wrap content in heavy bordered/shadowed "ID-card" containers; prefer borderless blocks with hairlines and whitespace.
