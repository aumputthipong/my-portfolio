# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and HR screening candidates for a full-stack developer role. They arrive from a link on a resume or LinkedIn profile, give the site a few minutes, and need to decide quickly whether the candidate fits the position and is worth moving forward.

Other audiences (tech leads reviewing code, freelance clients) are not confirmed.

## Product Purpose

The personal portfolio of Putthipong Chobngam (Aum), an Information Technology graduate (Software Engineering major) from KMITL, class of 2025, who is looking for a **full-stack developer** position.

Success means a recruiter leaves knowing three things: he is a full-stack developer, he has built complete systems that actually work, and how to contact him.

## Positioning

He builds complete, working systems end to end: database design, backend, frontend, tests, CI, and deployment. He also shows proof the reader can check:

- live demos and public repositories;
- concrete test results, such as Turtle Shop's integration test where 40 concurrent orders for 5 units sell exactly 5;
- an extensible architecture: in the AI Garden System, new AI models plug in as microservices by API endpoint without application code changes. It was deployed on the IT faculty's server and trialed at Siriraj Hospital; present that as a trial, never as production use.

## Operating Context

- Deployed on Vercel at https://portfolio-putthipong.vercel.app/ and shared as a link alongside job applications.
- The home page is one scroll: Hero (name, role, bio) → About (tech stack, education, contact details) → Projects (featured showcase plus a filterable grid) → Contact (closing call to action).
- Project detail pages (`/projects/[id]`, `/projects/senior`) carry the screenshot gallery, "What I did" highlights, tech badges, and demo, GitHub, Figma, and video links.
- Visitors can switch between light (default) and dark themes.

## Capabilities and Constraints

- Content lives in `src/data/`; components only render it.
- Each piece of information appears in one place: the bio only in the Hero, education and contact details in About, and Contact is the closing call to action. Don't repeat content across sections.
- The site is English only.
- **Featured projects** ("Selected Projects") are only finished projects that the resume also leads with: currently AI Garden and Turtask. Turtle Shop stays in "More projects" until it is finished.
- **Undecided:**
  - whether to add a work or internship experience section; none is provided, and none may be invented;
  - whether to offer a downloadable resume PDF;
  - whether the target market includes international or remote companies, or calls for a Thai version.

## Brand Commitments

- Name: Putthipong Chobngam, nickname Aum.
- Voice, as it appears in the existing copy: plain, first person, and concrete. Highlights state what was built and how it was verified, without hype.
- The visual identity is recorded in `design.md` and is not restated here.

## Evidence on Hand

- **Projects** (`src/data/ProjectsData.tsx`, `src/data/SeniorProjectData.ts`):
  - **Turtle Shop**, multi-channel inventory (2026): Go, PostgreSQL, React, LINE LIFF, live demo, concurrency integration tests, CI, deployed on Render with Neon.
  - **Turtask**, mini ERP Kanban (2026): real-time board sync and role-based access. Currently the featured project.
  - **AI Garden System**, senior project (2025): microservice AI analysis platform, trialed by instructors, staff, and students at Siriraj Hospital. Includes 17 screenshots and 2 YouTube demo videos.
  - Earlier work (2023–2024): BookingRoom, Job Search, Canteen Food, Convenience Store Management, plus the UX/UI design studies BlueRoom Registration and Parking App (Figma) and the ML project Depth Estimate Model.
- **Education:** B.Sc. Information Technology, KMITL, Software Engineering major, graduated 2025, GPAX 3.11 / 4.00.
- **Portrait:** `public/image/profile_formal.png`.
- **Contacts** (`src/data/ContactData.ts`): email, phone, GitHub, LinkedIn.
- **Absent, and must not be fabricated:** testimonials, references, work or internship experience, employer logos, user counts or metrics beyond what the project data states.

## Product Principles

1. **Proof over claims.** Every skill the site claims should point to something a recruiter can open: a demo, a repo, a screenshot, a test result.
2. **Readable in minutes.** Role, strongest work, and a way to make contact are reachable without digging. Depth lives on detail pages for anyone who wants it.
3. **Complete systems lead.** The end-to-end, deployed projects come before older coursework and design studies.
4. **One fact, one place.** Each piece of information has a single home, so the page stays short and consistent.
5. **Honest scope.** Nothing is invented to fill a gap. Undecided content stays off the site until it is real.
