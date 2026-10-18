"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaFigma, FaGithub } from "react-icons/fa";
import TechBadge, { TechItem } from "@/component/UI/TechBadge";

export type ProjectFact = { label: string; value: string | number };

interface ProjectInfoProps {
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  facts: ProjectFact[];
  tech: TechItem[];
  demo?: string;
  /** One line under the buttons that sets expectations for the demo */
  demoNote?: string;
  github?: string;
  figma?: string;
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

/**
 * Spec panel beside the gallery, sharing its surface, hairline and radius.
 * Reading order follows what a visitor needs: the story, then the actions
 * (Live demo, Code) while the story is still in view, then facts and stack.
 * On lg it keeps its natural height and stays in view (sticky) while the
 * gallery scrolls, so the actions never fall below the fold.
 */
export default function ProjectInfo({
  category, title, subtitle, description, facts, tech, demo, demoNote, github, figma,
}: ProjectInfoProps) {
  const hasLinks = Boolean(demo || github || figma);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-5 rounded-xl bg-card p-5 sm:p-6 xl:p-7 shadow-sm ring-1 ring-line/70 lg:sticky lg:top-24 lg:self-start"
    >
      <div className="space-y-4">
        <span className="inline-flex rounded bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-on-accent">
          {category}
        </span>
        <div className="space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.03em] text-ink leading-[1.1] text-balance break-words">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm italic text-muted leading-relaxed">{subtitle}</p>
          )}
        </div>
        <p className="text-base leading-relaxed text-body max-w-prose">
          {description}
        </p>
      </div>

      {(hasLinks || (demo && demoNote)) && (
        <div className="space-y-2">
          {hasLinks && (
            <div className="flex gap-2">
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-md bg-accent text-on-accent text-xs font-bold uppercase tracking-[0.15em] shadow-sm transition-[filter] hover:brightness-105 ${focusRing}`}
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live demo
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-md border-2 border-ink/80 text-ink text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-canvas ${focusRing}`}
                >
                  <FaGithub />
                  Code
                </a>
              )}
              {figma && (
                <a
                  href={figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-md border-2 border-ink/80 text-ink text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-canvas ${focusRing}`}
                >
                  <FaFigma />
                  Figma
                </a>
              )}
            </div>
          )}
          {demo && demoNote && (
            <p className="text-xs leading-relaxed text-muted">{demoNote}</p>
          )}
        </div>
      )}

      <dl className="divide-y divide-line border-y border-line text-sm">
        {facts.map((f) => (
          <div key={f.label} className="flex items-baseline justify-between gap-4 py-2">
            <dt className="text-muted">{f.label}</dt>
            <dd className="font-medium text-ink text-right">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <TechBadge key={i} tech={t} iconSrc={t.icon ? `/${t.icon}` : undefined} />
        ))}
      </div>
    </motion.div>
  );
}
