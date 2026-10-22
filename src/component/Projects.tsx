"use client";

import { projectData, type Project } from "@/data/ProjectsData";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaChevronDown, FaGithub, FaFigma } from "react-icons/fa";
import Link from "next/link";
import ProjectShowcase, { FEATURED_PROJECT_IDS } from "./Project/ProjectShowcase";
import SectionHeader from "./UI/SectionHeader";
import TechBadge from "./UI/TechBadge";
import { DemoAction, IconAction } from "./UI/CardActions";

const MAX_TECH = 3;
// Name length that fits one chip row of a three-column card; chips past it fold into the count
const TECH_CHAR_BUDGET = 22;

const visibleTech = (tech: Project["tech"]) => {
  const shown: Project["tech"] = [];
  let used = 0;
  for (const t of tech.slice(0, MAX_TECH)) {
    if (shown.length > 0 && used + t.name.length > TECH_CHAR_BUDGET) break;
    shown.push(t);
    used += t.name.length;
  }
  return shown;
};
// Cards shown on phones before "Show more", so the grid doesn't outweigh the featured pair
const COLLAPSED_COUNT = 3;

// The featured pair (AI Garden and Turtask) is shown in the showcase above, so
// the grid lists everything else. AI Garden lives outside projectData already.
const allProjects: Array<Project & { href?: string }> = projectData.filter(
  (p) => !FEATURED_PROJECT_IDS.includes(p.id)
);

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const types = [...new Set(allProjects.map((p) => p.type))];
  const tabs = ["All", ...types];

  const filteredProjects =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === activeTab);

  // Only "All" collapses: a chosen category is already short, and the visitor asked for it
  const collapsed = activeTab === "All" && !showAll && filteredProjects.length > COLLAPSED_COUNT;
  const hiddenCount = filteredProjects.length - COLLAPSED_COUNT;

  const expand = () => {
    setShowAll(true);
    // The button disappears, so focus moves to the first card it revealed
    requestAnimationFrame(() =>
      document
        .querySelectorAll<HTMLAnchorElement>("#projects-grid a[data-primary]")
        [COLLAPSED_COUNT]?.focus()
    );
  };

  // Padding sits outside max-w-6xl, as in UI/Section, so the content edge lines
  // up with the other sections.
  return (
    <section id="projects" className="bg-card dark:bg-canvas border-y border-line px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto pt-16 sm:pt-20">
        <SectionHeader label="Projects" />
      </div>

      {/* Featured: the flagship pair */}
      <ProjectShowcase />

      {/* The rest of the work: a heading marks the step down from the featured set */}
      <div className="max-w-6xl mx-auto pb-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-[0.15em] text-ink">More projects</h3>

          {/* Tab filter: one row, scrolling sideways on narrow screens instead of wrapping */}
          <div className="flex flex-nowrap overflow-x-auto bg-card rounded-md p-1 ring-1 ring-line gap-1 max-w-full self-start sm:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-4 py-1.5 pointer-coarse:min-h-11 text-xs font-semibold uppercase tracking-[0.1em] rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
                  activeTab === tab
                    ? "bg-accent text-on-accent"
                    : "text-muted hover:text-ink hover:bg-chip"
                }`}
              >
                {tab}
                <span className={`ml-1.5 text-xs ${activeTab === tab ? "text-on-accent/80" : "text-muted"}`}>
                  ({tab === "All" ? allProjects.length : allProjects.filter((p) => p.type === tab).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div id="projects-grid" className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const shownTech = visibleTech(project.tech);
            const hiddenTech = project.tech.slice(shownTech.length);
            return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className={`group relative h-full flex flex-col rounded-xl p-3 bg-card shadow-sm ring-1 ring-line/70 transition-shadow duration-300 hover:shadow-lg has-[a[data-primary]:focus-visible]:ring-2 has-[a[data-primary]:focus-visible]:ring-accent ${
                collapsed && index >= COLLAPSED_COUNT ? "max-sm:hidden" : ""
              }`}
            >
                {/* Banner image */}
                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden rounded-lg bg-ink flex-shrink-0">
                    {project.layout === "mobile" && (
                      <img
                        src={project.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-50"
                      />
                    )}
                    {/* The title link below names the card, so the image stays decorative */}
                    <img
                      src={project.image}
                      alt=""
                      className={`relative w-full h-full transition-transform duration-500 group-hover:scale-105 dark:brightness-90 ${
                        project.layout === "mobile" ? "object-contain" : "object-cover"
                      }`}
                    />
                </div>

                {/* Card body */}
                <div className="flex-1 flex flex-col pt-4">
                  {/* Identity first: what the project is and when, before the pitch and the stack */}
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-display font-bold tracking-[0.02em] text-ink text-base leading-snug">
                      {/* Stretched link: the whole card opens the project, and it is a real
                          link, so it is reachable by keyboard and opens in a new tab */}
                      <Link
                        href={project.href ?? `/projects/${project.id}`}
                        data-primary
                        className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none group-hover:text-accent-strong transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h4>
                    <span className="flex-shrink-0 text-xs font-semibold text-muted tabular-nums">
                      {project.year}
                    </span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      {project.type}
                    </span>
                    {/* Outlined, unlike the filled tech chips: context about the project, not a tool */}
                    {project.academic && (
                      <span className="rounded px-2 py-0.5 text-xs font-semibold text-body ring-1 ring-inset ring-line">
                        Academic project
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed line-clamp-2 text-body">
                    {project.description}
                  </p>

                  {/* Stack and actions sit on the card's floor, so they line up across a row */}
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4 pb-4">
                    {shownTech.map((tech, i) => (
                      <TechBadge key={i} tech={tech} />
                    ))}
                    {hiddenTech.length > 0 && (
                      <span className="self-center text-xs font-medium text-muted px-1" title={hiddenTech.map((t) => t.name).join(", ")}>
                        +{hiddenTech.length}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-line gap-2 flex-wrap">

                    {/* Left: external links, raised above the stretched link so they stay
                        independently clickable. Same actions as the featured cards. */}
                    <div className="relative z-10 flex items-center gap-2 min-w-0 min-h-10 pointer-coarse:min-h-11">
                      {project.demo && <DemoAction href={project.demo} project={project.title} />}
                      {project.github.length > 0 ? (
                        <IconAction
                          href={project.github}
                          label={`${project.title} source code on GitHub`}
                          title="Source code on GitHub"
                          icon={<FaGithub />}
                        />
                      ) : typeof project.ref === "string" ? (
                        <IconAction
                          href={project.ref}
                          label={`${project.title} design file on Figma`}
                          title="Design file on Figma"
                          icon={<FaFigma />}
                        />
                      ) : null}
                    </div>

                    {/* Right: a visible cue that the card opens, for touch screens with no
                        hover. The card's link already announces it, so it is hidden from AT. */}
                    <span
                      aria-hidden
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-ink group-hover:text-accent-strong transition-colors"
                    >
                      Details
                      <FaArrowRight className="size-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  {project.demo && project.demoHint && (
                    <p className="mt-2 text-xs text-muted">{project.demoHint}</p>
                  )}
                </div>
            </motion.article>
            );
          })}
        </div>

        {/* Phones only: wider screens fit the whole grid in a few rows */}
        {collapsed && (
          <button
            type="button"
            onClick={expand}
            aria-controls="projects-grid"
            className="sm:hidden mt-6 inline-flex w-full items-center justify-center gap-2 h-11 rounded-md border-2 border-ink/80 text-xs font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Show {hiddenCount} more projects
            <FaChevronDown className="size-3" />
          </button>
        )}
      </div>
    </section>
  );
}
