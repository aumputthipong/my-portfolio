# Agent Instructions

Operating rules for AI coding agents (Claude Code, Cursor, Copilot, etc.) working in this repository.

---

## 1. Always consult `design.md` for UI work

This project ships with a `design.md` file at the repo root — a machine-readable design system following the [`@google/design.md`](https://getdesign.md) spec. It is the **single source of truth** for the portfolio's visual identity.

You **MUST** read and follow `design.md` whenever you do any of the following:

- Create a new page or route (anything under `src/app/`)
- Add or modify a React component that renders UI (anything under `src/component/`)
- Change colors, typography, spacing, shadows, border radius, or layout
- Add buttons, cards, pills, modals, badges, dividers, or any visual primitive
- Style imagery, icons, or decorative elements
- Adjust responsive behavior or breakpoints
- Touch `src/styles/globals.css` or `src/component/ThemeRegistry.tsx`

### Required workflow

Before writing any UI code:

1. **Read `design.md`** — load the YAML front matter (tokens) and the relevant `##` section (Colors, Typography, Layout, Components, etc.).
2. **Map your work to existing tokens.** If you need a color, use one of the defined `colors.*` tokens. If you need a button, follow the `components.button-primary` / `button-secondary` spec — do not invent new variants.
3. **Implement using the tokens.** Translate token values into the Tailwind utilities or inline styles used elsewhere in the codebase. Match existing patterns in `Hero.tsx`, `Projects.tsx`, etc.
4. **Validate.** Run `npm run design:link` after any change to `design.md`. It must exit with **0 errors and 0 warnings**.

### When the design system doesn't cover your case

If a needed token, component, or pattern is genuinely missing from `design.md`:

1. **Stop and ask the user first** — do not silently invent new design tokens.
2. If the user approves, add the token/component to `design.md` *before* using it in code.
3. Keep new additions consistent with the existing palette and scale (narrow palette, full rounding, soft shadows, generous whitespace).
4. Re-run `npm run design:link` and ensure it still passes clean.

---

## 2. Hard rules (do not break)

- **Never introduce a third brand color.** The palette is intentionally narrow: one ink neutral (`secondary`) + one brand blue (`primary`) + semantic green (`accent`) for live status only.
- **Never use the green `accent` color for anything other than "Available / live / online" status.** It is not a generic success indicator.
- **Never put muted text (`colors.muted`) on anything but the white `neutral` surface.** Contrast fails elsewhere.
- **Never mix sharp 0px corners with the rounded system.** Use `rounded.sm` (6px) or larger on every chrome element.
- **Never bypass `design.md` to hardcode arbitrary hex values, font sizes, or spacing.** If you find yourself typing a raw hex code in a new component, stop — find or add a token instead.
- **Never commit changes to `design.md` that break `npm run design:link`.** Clean lint is a precondition for merge.

---

## 3. Practical mapping: tokens → Tailwind

The codebase uses Tailwind v4 utilities. When translating `design.md` tokens to code:

| design.md token | Typical Tailwind utility |
|:----------------|:-------------------------|
| `colors.primary` (`#1d4ed8`) | `bg-blue-700` / `text-blue-700` |
| `colors.secondary` (`#0f172a`) | `bg-slate-900` / `text-slate-900` |
| `colors.neutral` (`#ffffff`) | `bg-white` |
| `colors.muted` (`#4b5563`) | `text-gray-600` |
| `colors.border` (`#e5e7eb`) | `border-gray-200` |
| `colors.accent` (`#166534`) | `bg-green-700` (status only) |
| `rounded.sm` / `md` / `lg` / `full` | `rounded-md` / `rounded-xl` / `rounded-2xl` / `rounded-full` |
| `spacing.sm` / `md` / `lg` / `xl` | `gap-2` / `p-4` / `gap-6` / `py-10` |
| `typography.display` | `text-5xl lg:text-7xl font-extrabold` (Gill Sans via MUI theme) |
| `typography.body-md` | `text-base leading-relaxed` |
| `typography.label-caps` | `text-[11px] font-semibold uppercase tracking-widest` |

Existing components are the canonical reference — when in doubt, mirror the utility patterns used in `src/component/Hero.tsx`, `src/component/Projects.tsx`, and `src/component/ContactSection.tsx`.

---

## 4. Pre-flight checklist for any UI change

Before reporting a UI task as done, verify:

- [ ] I read the relevant section(s) of `design.md` before writing code.
- [ ] Every color used resolves to a `colors.*` token (or matches its Tailwind equivalent).
- [ ] Border radius matches the `rounded.*` scale — no arbitrary `rounded-[7px]`.
- [ ] Spacing follows `spacing.*` rhythm — no arbitrary `p-[13px]`.
- [ ] Typography uses one of the six defined scales — no new font sizes.
- [ ] Components I added/changed reuse existing patterns (`button-primary`, `card`, `status-pill`, etc.) rather than reinventing them.
- [ ] Hover, focus, and motion treatments match what other components already do (`shadow-md` → `shadow-lg`, `transition-all duration-200`).
- [ ] If I touched `design.md`: `npm run design:link` passes with 0 errors and 0 warnings.
- [ ] The page renders correctly at both mobile and `lg:` (1024px) breakpoints.

---

## 5. Other project rules

- **Stack:** Next.js 16 (App Router, Turbopack), React 19, Tailwind v4, MUI v7, Framer Motion 12, TypeScript 5.
- **File layout:** pages in `src/app/`, components in `src/component/`, project/skill data in `src/data/`, shared styles in `src/styles/globals.css`.
- **Client components:** mark with `"use client"` at the top when using hooks, browser APIs, or interactive MUI/Framer Motion features.
- **Icons:** prefer `react-icons` (`Fa*`, `Md*`, `Hi*`) for inline UI; `@mui/icons-material` for MUI-aligned surfaces.
- **External links:** always `target="_blank" rel="noopener noreferrer"`.
- **Accessibility:** pair icon-only controls with `aria-label`; use semantic `<button>` for actions and `<a>` for navigation.

---

## 6. TL;DR

> **If you are about to write UI code, open `design.md` first.**
> **If you change `design.md`, run `npm run design:link` and make sure it exits clean.**
> **If the design system doesn't cover what you need, ask before inventing.**
