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
  github?: string;
  figma?: string;
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

/**
 * Spec panel beside the gallery. It shares the stage's surface, hairline and
 * radius and stretches to the gallery's height, so the two read as one pair:
 * the story sits at the top, facts and actions anchor the bottom.
 */
export default function ProjectInfo({
  category, title, subtitle, description, facts, tech, demo, github, figma,
}: ProjectInfoProps) {
  const hasLinks = Boolean(demo || github || figma);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="h-full flex flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6 xl:p-7"
    >
      <div className="space-y-4">
        <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
          {category}
        </span>
        <div className="space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl xl:text-[2.5rem] font-semibold text-ink leading-[1.05] text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm italic text-muted leading-relaxed">{subtitle}</p>
          )}
        </div>
        <p className="text-sm sm:text-[0.95rem] leading-relaxed text-body max-w-prose">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-5 space-y-4">
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

        {hasLinks && (
          <div className="flex gap-2">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 inline-flex items-center justify-center gap-2 border border-accent bg-accent-soft text-accent hover:bg-accent hover:text-on-accent text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors ${focusRing}`}
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
                className={`flex-1 inline-flex items-center justify-center gap-2 bg-ink hover:bg-ink/90 text-canvas text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors ${focusRing}`}
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
                className={`flex-1 inline-flex items-center justify-center gap-2 border border-line hover:border-muted bg-canvas text-body text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors ${focusRing}`}
              >
                <FaFigma />
                Figma
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
