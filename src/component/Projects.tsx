"use client";

import { projectData, type Project } from "@/data/ProjectsData";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaGithub, FaFigma, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import ProjectShowcase, { FEATURED_PROJECT_IDS } from "./Project/ProjectShowcase";
import SectionHeader from "./UI/SectionHeader";
import TechBadge from "./UI/TechBadge";

/** Shared shape of a card's external link: compact on a mouse, 44px tall on touch */
const CARD_ACTION =
  "inline-flex items-center gap-1.5 border text-xs font-semibold px-2.5 h-7 pointer-coarse:h-11 pointer-coarse:px-3.5 rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card";

// The featured pair (AI Garden and Turtask) is shown in the showcase above, so
// the grid lists everything else. AI Garden lives outside projectData already.
const allProjects: Array<Project & { href?: string }> = projectData.filter(
  (p) => !FEATURED_PROJECT_IDS.includes(p.id)
);

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const types = [...new Set(allProjects.map((p) => p.type))];
  const tabs = ["All", ...types];

  const filteredProjects =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="bg-canvas">
      <div className="max-w-6xl mx-auto pt-10 sm:pt-12 px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Projects" />
      </div>

      {/* Highlight showcase carousel: graduated + personal */}
      <ProjectShowcase />

      {/* Academic Projects */}
      <div className="max-w-6xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">

        {/* Tab filter */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="flex flex-wrap justify-center bg-card rounded-full p-1 shadow-sm border border-line gap-1 max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`px-3 sm:px-4 py-1.5 pointer-coarse:min-h-11 text-xs font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeTab === tab
                    ? "bg-accent text-on-accent shadow-md"
                    : "text-muted hover:text-ink hover:bg-surface"
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
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="group relative h-full flex flex-col rounded-2xl p-3 bg-card border border-line transition-[border-color,box-shadow] duration-300 hover:border-muted/50 hover:shadow-md has-[a[data-primary]:focus-visible]:ring-2 has-[a[data-primary]:focus-visible]:ring-accent"
            >
                {/* Banner image */}
                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden rounded-xl bg-gray-900 flex-shrink-0">
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
                      className={`relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-105 dark:brightness-90 ${
                        project.layout === "mobile" ? "object-contain" : "object-cover"
                      }`}
                    />
                </div>

                {/* Card body */}
                <div className="flex-1 flex flex-col pt-4">
                  <h3 className="font-display font-semibold text-ink text-base leading-snug mb-2">
                    {/* Stretched link: the whole card opens the project, and it is a real
                        link, so it is reachable by keyboard and opens in a new tab */}
                    <Link
                      href={project.href ?? `/projects/${project.id}`}
                      data-primary
                      className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none group-hover:text-accent transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2 text-body">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <TechBadge key={i} tech={tech} />
                    ))}
                  </div>

                  {/* Category tag + year */}
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-block bg-surface text-xs font-semibold px-2.5 py-1 rounded-full border border-line text-muted">
                      {project.type}
                    </span>
                    <span className="text-xs font-medium text-muted tabular-nums">
                      {project.year}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-line mt-auto gap-2 flex-wrap">

                    {/* Left: external links, raised above the stretched link so they stay
                        independently clickable. Touch screens get a 44px target. */}
                    <div className="relative z-10 flex items-center gap-2 min-w-0">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo (opens in a new tab)`}
                          className={`${CARD_ACTION} border-accent bg-accent-soft text-accent hover:bg-accent hover:text-on-accent`}
                        >
                          <FaExternalLinkAlt className="size-2.5" />
                          Live Demo
                        </a>
                      )}
                      {project.github.length > 0 ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code on GitHub`}
                          className={`${CARD_ACTION} border-line bg-surface text-body hover:bg-line hover:border-muted/40`}
                        >
                          <FaGithub />
                          Code
                        </a>
                      ) : typeof project.ref === "string" ? (
                        <a
                          href={project.ref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} design file on Figma`}
                          className={`${CARD_ACTION} border-line bg-surface text-body hover:bg-line hover:border-muted/40`}
                        >
                          <FaFigma />
                          Figma
                        </a>
                      ) : null}
                    </div>

                    {/* Right: a visible cue that the card opens, for touch screens with no
                        hover. The card's link already announces it, so it is hidden from AT. */}
                    <span
                      aria-hidden
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:text-accent transition-colors"
                    >
                      Details
                      <FaArrowRight className="size-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
