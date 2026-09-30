"use client";

import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { seniorProject } from "@/data/SeniorProjectData";
import { projectData } from "@/data/ProjectsData";
import TechBadge from "../UI/TechBadge";

type Highlight = {
  key: string;
  href: string;
  github?: string;
  demo?: string;
  badge: string;
  title: string;
  desc: string;
  tech: Array<{ name: string; icon?: string }>;
  image: string;
  year: number | string;
};

/** Project ids shown here; the grid below leaves them out so nothing appears twice. */
export const FEATURED_PROJECT_IDS = [8];

const turtask = projectData.find((p) => p.id === 8);

const highlights: Highlight[] = [
  {
    key: "senior",
    href: "/projects/senior",
    github: "https://github.com/aumputthipong/AI-garden-System",
    badge: "Senior project",
    title: seniorProject.title,
    desc: seniorProject.shortDescription,
    tech: seniorProject.tech,
    image: seniorProject.image,
    year: seniorProject.year,
  },
  ...(turtask
    ? [
        {
          key: "turtask",
          href: `/projects/${turtask.id}`,
          github: turtask.github || undefined,
          demo: turtask.demo,
          badge: "Personal project",
          title: turtask.title,
          desc: turtask.description,
          tech: turtask.tech,
          image: turtask.image,
          year: turtask.year,
        },
      ]
    : []),
];

const MAX_TECH = 3;

/**
 * The two flagship projects side by side. Both are visible at once and the
 * pair stays short, so the rest of the work below is reached quickly.
 */
export default function ProjectShowcase() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-none text-ink mb-5 sm:mb-7">
        Selected Projects<span className="text-accent">.</span>
      </h2>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {highlights.map((h) => (
          <FeaturedCard key={h.key} h={h} />
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({ h }: { h: Highlight }) {
  const extraTech = h.tech.length - MAX_TECH;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-card p-3 transition-colors hover:border-muted/60 has-[a[data-primary]:focus-visible]:ring-2 has-[a[data-primary]:focus-visible]:ring-accent">
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

        <h3 className="mt-3 font-display text-2xl lg:text-[1.75rem] font-semibold tracking-tight leading-tight text-ink">
          {/* Stretched link: the whole card opens the project */}
          <Link
            href={h.href}
            data-primary
            className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none group-hover:text-accent transition-colors"
          >
            {h.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-body line-clamp-2">{h.desc}</p>

        <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {h.tech.slice(0, MAX_TECH).map((t, i) => (
              <TechBadge key={i} tech={t} />
            ))}
            {extraTech > 0 && (
              <span className="text-xs font-medium text-muted px-1" title={h.tech.slice(MAX_TECH).map((t) => t.name).join(", ")}>
                +{extraTech}
              </span>
            )}
          </div>

          {/* Sit above the stretched link so they stay independently clickable */}
          <div className="relative z-10 flex items-center gap-2">
            {h.demo && (
              <a
                href={h.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg border border-accent bg-accent-soft text-accent hover:bg-accent hover:text-on-accent text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                <FaExternalLinkAlt className="text-[10px]" />
                Live demo
              </a>
            )}
            {h.github && (
              <a
                href={h.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${h.title} source code on GitHub`}
                title="Source code on GitHub"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-line bg-card text-body hover:text-ink hover:border-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
