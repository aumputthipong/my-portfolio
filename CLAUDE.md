# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio of Putthipong Chobngam: Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, TypeScript. Deployed on Vercel at https://portfolio-putthipong.vercel.app/.

## Commands

```bash
npm run dev            # dev server on :3000 (Turbopack)
npm run build          # production build
npm run lint           # ESLint (next core-web-vitals + typescript)
npx tsc --noEmit -p .  # type-check; there is no script for it
npm run design:lint    # validate design.md (silent, exit 0 on success); `design:link` is an alias
```

There is no test suite. If `npm run dev` fails with "Unable to acquire lock at .next/dev/lock", a dev server is already running; reuse it.

## Design system

- `design.md` is the source of truth for the visual identity (YAML tokens + prose). Read it before UI work, ask before inventing a new token, and run `npm run design:lint` after editing it.
- `agent.md` is **outdated**: its blue palette, Gill Sans/MUI typography, `ThemeRegistry.tsx`, and "green only for status" rule no longer apply. Where it conflicts with `design.md`, follow `design.md`. Its general rules (external links get `target="_blank" rel="noopener noreferrer"`, `aria-label` on icon-only controls, `react-icons` for inline icons) still hold.
- Colors go through semantic Tailwind utilities (`bg-canvas`, `bg-surface`, `bg-card`, `text-ink`, `text-body`, `text-muted`, `border-line`, `text-accent`, `bg-accent-soft`, `text-on-accent`, ...). They are CSS variables defined on `:root` and `.dark` in `src/styles/globals.css` and exposed via `@theme inline`. Raw Tailwind palette colors or hex values break dark mode.
- Dark mode is `next-themes` with the `class` strategy, light by default, system preference disabled (`src/component/ThemeProvider.tsx`). The `dark:` variant is a custom variant on `.dark`.
- Headings use Fraunces, loaded with `next/font` in `src/app/layout.tsx` as `--font-display` and applied with the `.font-display` class. Body text uses the system sans stack.

## Architecture

- **Home page** (`src/app/page.tsx`) is one scrolling page: `Hero` → `AboutMe` → `Projects` → `Skills` → `ContactSection`. The section ids `home`, `about-me`, `projects`, `skills`, `contact` are wired into `Navbar.tsx` (the `SectionId` type, the IntersectionObserver scroll-spy selector, and the nav items). Adding or renaming a home section means updating all three. On detail pages the nav routes to `/#<id>` instead of scrolling.
- **Content lives in `src/data/`**; components only render it:
  - `ProjectsData.tsx`: the `Project` interface and `projectData`. It drives the home grid (tabs filter by `type`) and `/projects/[id]` (a client page that looks projects up by numeric `id`). `images` + `layout` (`"web" | "mobile"`) feed the gallery, `mobileCompanion` appends a labelled set of phone screens to the same gallery rail, `highlights` are the "What I did" bullets, and `haveImage: false` shows a placeholder.
  - `SeniorProjectData.ts`: the senior project (AI Garden System) is **not** in `projectData`. It has its own route, `src/app/projects/senior/page.tsx`.
  - Featured projects: `Project/ProjectShowcase.tsx` shows the ids in `FEATURED_PROJECT_IDS` (Turtask leads), then the senior project, and `Projects.tsx` excludes those ids from the grid so nothing appears twice. Edit that array to change what is featured.
  - `TechSkillsData.tsx`: tech stack categories for the Skills section (`Skills.tsx`). Icon paths are relative to `public/` with no leading slash.
  - `ContactData.ts`: `contacts` feeds both `ContactSection` and the contact details list in `AboutMeComponent/Introduction.tsx`.
- **Shared UI**: `UI/Section.tsx` (section wrapper, `max-w-6xl`), `UI/SectionHeader.tsx` (eyebrow header), `UI/TechBadge.tsx`, and `UI/Lightbox.tsx` (fullscreen viewer; `LightboxItem` is an image with optional per-item `layout`/`group`, or a YouTube video by id).
- Images use plain `<img>` with assets under `public/image/`, so the `@next/next/no-img-element` lint warning is expected.
- Path alias `@/*` → `src/*`. The components folder is `src/component/` (singular).
- `UI/Divider`, `Project/GraduationProjects`, `Project/ProjectModal`, and `Project/VideoProject` are not imported anywhere.

## Content decisions

Each piece of information appears in one place: the bio only in the Hero; the portrait, education and contact details in the About section; the tech stack in the Skills section; and the Contact section is the closing call to action. Avoid reintroducing the same content in several sections.

## Git

Work happens on `feat/...` branches merged through PRs. Commit messages use conventional prefixes with an optional scope, e.g. `feat(project-detail): ...`.
