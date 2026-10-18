"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { seniorProject } from "@/data/SeniorProjectData";
import { projectData, type Project } from "@/data/ProjectsData";
import TechBadge from "../UI/TechBadge";
import { DemoAction, IconAction } from "../UI/CardActions";

type Highlight = {
  key: string;
  href: string;
  github?: string;
  demo?: string;
  badge: string;
  title: string;
  /** One checkable fact, never clamped: the reason the project is featured */
  proof?: string;
  desc: string;
  tech: Array<{ name: string; icon?: string }>;
  image: string;
  year: number | string;
};

/**
 * Project ids shown here, after the capstone; the grid below leaves them out so
 * nothing appears twice. Only finished projects that the resume also leads with
 * belong here (see PRODUCT.md); the capstone (AI Garden) is not in projectData.
 */
export const FEATURED_PROJECT_IDS = [8];

const fromProject = (p: Project): Highlight => ({
  key: String(p.id),
  href: `/projects/${p.id}`,
  github: p.github || undefined,
  demo: p.demo,
  badge: p.type,
  title: p.title,
  proof: p.proof,
  desc: p.summary ?? p.description,
  tech: p.tech,
  image: p.image,
  year: p.year,
});

const featured = FEATURED_PROJECT_IDS.map((id) => projectData.find((p) => p.id === id))
  .filter((p): p is Project => Boolean(p))
  .map(fromProject);

const capstone: Highlight = {
  key: "senior",
  href: "/projects/senior",
  github: "https://github.com/aumputthipong/AI-garden-System",
  badge: "Capstone project",
  title: seniorProject.title,
  proof: seniorProject.proof,
  desc: seniorProject.shortDescription,
  tech: seniorProject.tech,
  image: seniorProject.image,
  year: seniorProject.year,
};

const highlights = [capstone, ...featured];

/**
 * The flagship pair side by side, each with one unclamped proof line under its
 * title. The pair stays short so the rest of the work below is reached quickly;
 * on small screens the two stack in the same order.
 */
export default function ProjectShowcase() {
  return (
    <div className="max-w-6xl mx-auto pb-16">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] text-ink mb-6">
        Selected Projects<span className="text-accent">.</span>
      </h2>

      <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
        {highlights.map((h) => (
          <FeaturedCard key={h.key} h={h} />
        ))}
      </div>
    </div>
  );
}

const MAX_TECH = 3;

function FeaturedCard({ h }: { h: Highlight }) {
  const extraTech = h.tech.length - MAX_TECH;

  return (
    <article className="group relative h-full flex flex-col rounded-2xl border border-line bg-card p-3 transition-colors hover:border-muted/60 has-[a[data-primary]:focus-visible]:ring-2 has-[a[data-primary]:focus-visible]:ring-accent">
      <div className="relative aspect-[16/7] overflow-hidden rounded-xl border border-line bg-surface">
        <img
          src={h.image}
          alt=""
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015] dark:brightness-90"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pt-4 pb-1">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            {h.badge}
          </span>
          <span className="text-xs font-medium text-muted tabular-nums">{h.year}</span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight leading-tight text-ink">
          {/* Stretched link: the whole card opens the project */}
          <Link
            href={h.href}
            data-primary
            className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none group-hover:text-accent transition-colors"
          >
            {h.title}
          </Link>
        </h3>

        {h.proof && (
          <p className="mt-2 flex items-baseline gap-2 text-sm font-medium text-ink">
            <span aria-hidden className="size-1.5 flex-shrink-0 translate-y-[-0.1em] rounded-full bg-accent" />
            {h.proof}
          </p>
        )}

        <p className="mt-2 text-sm leading-relaxed text-body line-clamp-2">{h.desc}</p>

        <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-3">
          {/* Full width on phones so the badges keep one line and the actions
              drop below them together, instead of "+N" wrapping on its own */}
          <div className="w-full sm:w-auto flex flex-wrap items-center gap-1.5">
            {/* Phones fit two badges on a line, so the third folds into the count */}
            {h.tech.slice(0, MAX_TECH).map((t, i) => (
              <span key={i} className={i === MAX_TECH - 1 ? "hidden sm:inline-flex" : "inline-flex"}>
                <TechBadge tech={t} />
              </span>
            ))}
            <span className="sm:hidden text-xs font-medium text-muted px-1" title={h.tech.slice(MAX_TECH - 1).map((t) => t.name).join(", ")}>
              +{extraTech + 1}
            </span>
            {extraTech > 0 && (
              <span className="hidden sm:inline text-xs font-medium text-muted px-1" title={h.tech.slice(MAX_TECH).map((t) => t.name).join(", ")}>
                +{extraTech}
              </span>
            )}
          </div>

          {/* Sit above the stretched link so they stay independently clickable */}
          <div className="relative z-10 ml-auto flex items-center gap-2">
            {h.demo && <DemoAction href={h.demo} project={h.title} />}
            {h.github && (
              <IconAction
                href={h.github}
                label={`${h.title} source code on GitHub`}
                title="Source code on GitHub"
                icon={<FaGithub />}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
