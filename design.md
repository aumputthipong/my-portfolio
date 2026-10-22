---
version: alpha
name: My Portfolio
description: Visual identity for the personal portfolio of Putthipong Chobngam (AUM) — a Next.js 16 + React 19 single-page portfolio. Clean and tracked: one sans face set bold and wide, monochrome neutrals, a single botanical-green accent.
colors:
  neutral: "#ffffff"
  on-neutral: "#0f172a"
  surface: "#fafafa"
  ink: "#0f172a"
  body: "#4b5563"
  muted: "#6b7280"
  border: "#e5e7eb"
  accent: "#1f6f4e"
  accent-strong: "#1f6f4e"
  accent-soft: "#ecf4ef"
  on-accent: "#ffffff"
  chip: "#f1f3f5"
colorsDark:
  canvas: "#10151c"
  surface: "#151c25"
  card: "#1b2430"
  ink: "#e6eaf0"
  body: "#aab4c1"
  muted: "#8592a3"
  line: "#2a3644"
  accent: "#6fcf9f"
  accent-strong: "#6fcf9f"
  accent-soft: "#17302a"
  on-accent: "#0b1a13"
  chip: "#222d3a"
typography:
  display:
    fontFamily: "Open Sans", ui-sans-serif, system-ui, sans-serif
    fontSize: 4.25rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0.04em
  h2:
    fontFamily: "Open Sans", ui-sans-serif, system-ui, sans-serif
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.08em
  h3-caps:
    fontFamily: "Open Sans", ui-sans-serif, system-ui, sans-serif
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.15em
  h4:
    fontFamily: "Open Sans", ui-sans-serif, system-ui, sans-serif
    fontSize: 1rem
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: 0.02em
  body-md:
    fontFamily: "Open Sans", ui-sans-serif, system-ui, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: "Open Sans", ui-sans-serif, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: "Open Sans", ui-sans-serif, system-ui, sans-serif
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.15em
  label:
    fontFamily: "Open Sans", ui-sans-serif, system-ui, sans-serif
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
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
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0 20px
    hover: "fill {colors.ink} / text {colors.neutral}"
  button-icon:
    size: 40px
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.neutral}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    padding: 12px
    shadow: soft, deepening on hover
  chip:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.xs}"
    padding: 4px 10px
  tech-badge:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.xs}"
    padding: 4px 10px
  section-bar:
    backgroundColor: "{colors.accent}"
    width: 64px
    height: 4px
    rounded: "{rounded.full}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
---

## Overview

The portfolio's visual identity is **editorial, monochrome, and content-first**. It pairs a deep ink (`ink`) on a clean white canvas with a single, meaningful **botanical-green accent** (`accent`, `#1f6f4e`) drawn from the subject's flagship "AI Garden System" project. The accent is spent on a few fills: the section-title bars, the one primary button per context, the type chip, the hero frames and the active nav underline — never as a wash.

Type is one face, **Open Sans**, set bold with wide tracking for headings and as uppercase tracked labels for buttons and metadata; a short green bar under each section title is the recurring mark. The tracked-caps voice was taken from a reference portfolio the owner chose; its colours were not.

Motion is restrained: brief entrance fades and hover shadows only. Everything respects `prefers-reduced-motion` (transitions collapse).

## Colors

The palette is intentionally narrow: one ink for hierarchy, one green for accent, neutrals for everything else. There is **no blue** and no secondary brand color.

- **Neutral (`#ffffff`):** Page and card background.
- **Surface (`#fafafa`, zinc-50):** Alternating section ground (About, Skills) for rhythm against white (Hero, Projects, Contact).
- **Ink (`#0f172a`, slate-900):** Headlines, outlined buttons, the monogram stamp, the footer band.
- **Body (`#4b5563`):** Paragraph and long-form copy.
- **Muted (`#6b7280`):** Captions, secondary metadata. At least 4.5:1 on `neutral` and `surface`; never lighter.
- **Border (`#e5e7eb`):** Hairlines, card outlines, dividers.
- **Accent (`#1f6f4e`):** Botanical green, used as fill: section-title bars, primary buttons, the type chip, hero frames, the active nav underline and filter tab, the portrait ring.
- **Accent-strong (`#1f6f4e`):** The same green where it sets text or icons (link hover, contact icons). A separate token so the fill can change without touching text contrast.
- **Chip (`#f1f3f5`):** The flat fill behind tech chips.
- **Accent-soft (`#ecf4ef`):** Tinted background for chips, active thumbnails, responsibility markers.

## Dark mode

The palette is delivered through **semantic tokens** (`canvas`, `surface`, `card`, `ink`, `body`, `muted`, `line`, `accent`, `accent-strong`, `accent-soft`, `on-accent`, `chip`) rather than raw Tailwind colors. Each token is a CSS variable defined on `:root` (light) and overridden on `.dark`; the Tailwind utilities (`bg-canvas`, `text-ink`, `border-line`, …) resolve to those variables via `@theme inline`, so a single class works in both themes. Theme selection is handled by `next-themes` (`class` strategy) with a sun/moon toggle in the navbar.

Naming maps from the light palette: `border` → **`line`**, and a new **`card`** token sits above `surface` for raised surfaces.

- **Its own palette, not a mirror of light mode:** a cool night-blue slate, chosen for comfort over long reading in the dark. Ramp: `canvas` `#10151c` < `surface` `#151c25` < `card` `#1b2430`; light mode is `#ffffff` / `#fafafa` / `#ffffff`. Never pure black.
- **Elevation reads through fill + hairline:** fill steps are small on a dark ground (card↔canvas ≈ 1.4:1), so a clearly-visible `line` (`#2a3644`, ≈ 1.5:1 against canvas) shares the separating work — cards read as raised without heavy shadows or ID-card borders.
- **A softer accent:** the green becomes a gentle mint `#6fcf9f` (also `accent-strong`, ≈ 9.7:1 on canvas); the light `#1f6f4e` would fail contrast on a dark ground. `accent-soft` is a deep `#17302a` tint for icon tiles, and `on-accent` is near-black green `#0b1a13` so filled buttons read as mint with dark labels.
- **Text ramp:** `ink` `#e6eaf0`, `body` `#aab4c1`, `muted` `#8592a3` — cool off-whites, never pure white, all passing WCAG AA on canvas and on `card` (muted 4.95:1 on card). `chip` `#222d3a` fills the tech chips.
- **Content images:** large white screenshots carry `dark:brightness-90` so they don't punch bright holes in the dark UI (icons, logos, and the portrait are untouched).
- **Inverted / always-dark elements:** image backdrops, the lightbox, video title bars, and on-image overlay chips stay dark with white text in **both** themes — they sit on media, not on the page ground. The footer is the one deliberately inverted block: a dark band in light mode, a `surface` band with a top hairline in dark.

## Typography

One face, **Open Sans** (loaded with `next/font` as `--font-open-sans`, the Tailwind `font-sans`), for everything. Headings get their voice from **bold weight and wide tracking**, not from a second family. The `.font-display` class is kept on headings and resolves to the same face.

- **Display** — the hero name, bold, `tracking-[0.04em]`, fluid `clamp(2.5rem, 6vw, 4.25rem)` so it never clips on narrow screens or at 200% zoom. A short accent bar sits above it.
- **H2** — section titles ("About", "Projects", "Skills", "Let's connect"), bold, `tracking-[0.08em]`, with a 64×4px `accent` bar under them (`UI/SectionHeader.tsx`).
- **H3 caps** — sub-headings inside a section ("Selected projects", "More projects", "Education", "Contact details", "What I did"), bold uppercase, `tracking-[0.15em]`.
- **H4** — project card titles, bold with light tracking, sentence case so long names stay readable.
- **Body-md** — paragraphs; comfortable `line-height: 1.625`.
- **Label caps** — button labels, project-type labels, nav links, tech chips: 12px, bold or semibold, uppercase, tracked `0.1em`–`0.2em`.
- **Label** — small sans UI text in sentence case: years, counts, captions, the footer copyright.

**Floor:** nothing is set below 12px (`0.75rem`). Icons are sized with `size-*`, not font sizes. There is no monospace: tracked caps carry the metadata voice.

**Outline:** one h1 per page. Every home section has its own h2 title; sub-headings are h3, card titles h4. The footer name is not a heading.

## Layout

Generous, centred in a `max-w-6xl`. Section titles sit left with their bar; the Contact card centres its own.

- **Navbar:** a flat full-width bar (`bg-canvas/90`, blur, bottom hairline), the "PC" monogram stamp (a 36px outlined square) on the left, uppercase tracked links on the right with a 2px accent underline on the active one. Phones show icons instead of labels; detail pages add Back. An outlined RESUME button (the PDF, new tab) sits before the theme toggle on every page: icon only between `sm` and `lg`, hidden on phones, where the Hero and Contact link the PDF.
- **Hero:** full height. Left: accent bar, name, the role as a tracked caps line, bio, then SEE THE WORK (accent fill), EMAIL ME and RESUME (outlined). Right: a hand-drawn line scene (`HeroIllustration.tsx`, inline SVG): him from the waist up at a desk, round glasses, smiling eyes, a light blush, short black hair, behind an open laptop marked with a `</>` sign, and a code window floating behind his shoulder. Clothes, desk and window are drawn in `ink` and `canvas` (CSS variables, so they invert with dark mode) with `accent` on the `</>` sign and the code lines; skin, facial lines and hair use fixed colours so the face never turns into a negative on the dark ground.
- **About:** two cards of equal height (`ring-1 ring-line`, no shadow, one 28px inset). Left: the profile card, its top half a 4:5 portrait in a plain hairline frame beside the name (20–24px, one line), location and languages (icon rows), and an availability badge (an `accent-soft` pill with an `accent` dot); on phones the portrait stacks above them, its lower half Education on the same card ground, set off only by an inset hairline so the two read as one profile: degree, school, major, then Graduated and GPA at 16px split by one vertical hairline. Right: Contact details, rows of an `accent-soft` icon tile, a caps label and the value, spread to the card's height (hidden on phones, where the Contact section has the same channels). Every in-card heading and caption uses label-caps (12px, 700, 0.15em, muted).
- **Projects:** "Selected projects" (the flagship pair, Turtask then AI Garden, side by side, each with one unclamped **proof line** under its title), then "More projects" with its filter tabs and grid. On phones the grid shows three cards and a "Show N more projects" button while the All tab is selected. The section is white with hairlines above and below, because the project screenshots are white.
- **Skills:** the tech stack as its own section after Projects, one row per category with chips (a plain comma list on phones).
- **Contact (the page's end):** one white speech-bubble card, centred, with a small tail at its lower edge: the title and bar, one line on the role, the location, the EMAIL ME button with the address as copyable text, then Phone (shown as the number), GitHub, LinkedIn and Resume as one line of quiet links. The footer carries only the name and copyright.
- **Project detail pages:** a wide `max-w-[88rem]` two-column view from `lg`: gallery on the left, a sticky info panel on the right ordered story → actions (Live demo filled, Code and Figma outlined) → facts → stack. Below `lg` the panel comes first.

The home order is Hero → About → Projects → Skills → Contact, on canvas / surface / white / surface / canvas. `scroll-padding-top` offsets anchored sections beneath the fixed navbar.

| Token | Use |
|:------|:----|
| `spacing.sm` (8px) | Inline gaps |
| `spacing.md` (16px) | Card padding, paragraph rhythm |
| `spacing.lg` (24px) | Stacks between groups |
| `spacing.xl` (40px) | Section vertical rhythm |
| `spacing.2xl` (64px) | Hero / large breaks |

## Shapes

Small, even corners; the shape language is square-ish, not pill-shaped.

- `rounded.xs` (4px, Tailwind `rounded`) — tech chips, the type chip, filter tabs.
- `rounded.sm` (6px, `rounded-md`) — buttons, the monogram stamp.
- `rounded.md` (8px, `rounded-lg`) — screenshot frames, grid images, the About portrait.
- `rounded.lg` (12px, `rounded-xl`) — cards, the Contact card, the detail panel and gallery.
- `rounded.full` — section-title bars, status dots.

## Components

- **`button-primary`** — solid `accent` fill, `on-accent` text, uppercase tracked label, `rounded.sm`, 44px tall. The one action per context: SEE THE WORK, EMAIL ME (Contact), LIVE DEMO, WATCH DEMO.
- **`button-secondary`** — transparent with a 2px `ink` outline, uppercase tracked label; hover floods to `ink` with canvas text. EMAIL ME and RESUME in the Hero, CODE and FIGMA on detail pages.
- **`button-icon`** — 40px square, the same 2px outline, glyph only (the GitHub octocat). Always carries `aria-label` + `title`.
- **`card`** — project tile, Education, the detail panel: white (`card`), a hairline ring and a soft shadow that deepens on hover (no lift).
- **`chip`** — the project-type label on featured cards and detail pages: solid `accent`, `on-accent` uppercase text, `rounded.xs`. Grid cards set the type as plain muted caps instead, so the featured pair keeps the colour.
- **Grid card** ("More projects") — reads identity first: the title with the year on its right, then the type in muted caps and, for coursework, an outlined **Academic project** chip (`ring-1 ring-line`, sentence case, no fill, so it never reads as a tech chip); then the two-line description. The stack (one row of tech badges; names past one row fold into a `+N` count) and the actions sit on the card floor, so dividers line up across a row.
- **Card actions** — project cards share `UI/CardActions.tsx`: `DemoAction` (primary, "Live demo"), `VideoAction` (primary, "Watch demo", opens the lightbox for a project with demo videos but no live site) and `IconAction` (`button-icon`, GitHub or Figma). All grow to 44px on touch screens.
- **`tech-badge`** — a flat `chip`-token fill, uppercase tracked 12px label with the tool's icon, `rounded.xs`, no border.
- **Section title** — `UI/SectionHeader.tsx`: the h2 plus its accent bar, left-aligned (optionally a count on the right) or centred.
- **`divider`** — 1px `line` hairline separating editorial blocks.

## Signature

The page is remembered by its **tracked caps voice** — wide-set bold headings with a short green bar under each, uppercase buttons — and the **hand-drawn scene in the hero**, smiling over his laptop: two colours, even strokes, theme-aware.

## Do's and Don'ts

**Do**
- Keep ink for hierarchy and reserve green for the bars, the one primary action, the type chip and active states.
- Let the tracked bold headings and caps labels carry the personality; keep body copy quiet and sentence case.
- Alternate `neutral` / `surface` section backgrounds for rhythm.
- Respect `prefers-reduced-motion`; keep motion subtle and purposeful.
- Pair icons with text or `aria-label`; use `target="_blank" rel="noopener noreferrer"` on external links.

**Don't**
- Don't reintroduce blue, gradients on the name, blurred orbs, status pills, typing animations, or numbered section counters — these were removed for reading as templated/AI-generated.
- Don't flood the page with green; the accent should stay roughly 5–10% of the surface.
- Don't wrap whole sections in bordered/shadowed containers; the Contact speech-bubble card is the one exception, as the page's close. Cards are for repeated items (projects, Education).
- Don't bring back the serif display face, eyebrow labels above headings, or monospace metadata; the tracked sans replaced all three.
