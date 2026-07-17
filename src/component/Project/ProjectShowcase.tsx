"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { seniorProject } from "@/data/SeniorProjectData";
import { projectData } from "@/data/ProjectsData";
import TechBadge from "../UI/TechBadge";

type Highlight = {
  key: string;
  href: string;
  github?: string;
  badge: string;
  featured?: boolean;
  category: string;
  title: string;
  sub: string;
  desc: string;
  tech: Array<{ name: string; icon?: string }>;
  image: string;
  year: number | string;
  color: "indigo" | "violet" | "amber" | "emerald" | "rose";
  glyph: string;
  shortLabel: string;
};

const SLIDE_DURATION = 7000;

const turtask = projectData.find((p) => p.id === 8);

const highlights: Highlight[] = [
  {
    key: "senior",
    href: "/projects/senior",
    github: "https://github.com/aumputthipong/AI-garden-System",
    badge: "Senior Project",
    featured: true,
    category: "AI · Microservices",
    title: seniorProject.title,
    sub: seniorProject.full_project_name,
    desc: seniorProject.shortDescription,
    tech: seniorProject.tech,
    image: seniorProject.image,
    year: seniorProject.year,
    color: "indigo",
    glyph: "AI",
    shortLabel: "AI Garden",
  },
  ...(turtask
    ? [
        {
          key: "turtask",
          href: `/projects/${turtask.id}`,
          github: turtask.github || undefined,
          badge: "Personal Project",
          featured: true,
          category: "Mini ERP · Kanban",
          title: turtask.title,
          sub: "Real-time Kanban project & task management",
          desc: turtask.description,
          tech: turtask.tech,
          image: turtask.image,
          year: turtask.year,
          color: "violet" as const,
          glyph: "TT",
          shortLabel: "Turtask Kanban",
        },
      ]
    : []),
];

export default function ProjectShowcase() {
  const total = highlights.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  const restart = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const active = !paused && !prefersReduced;
    const fill = fillRef.current;
    if (fill) {
      fill.style.transition = "none";
      fill.style.width = "0%";
      void fill.offsetWidth;
      if (active) {
        fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
        fill.style.width = "100%";
      }
    }
    if (active && total > 1) {
      timerRef.current = setTimeout(() => {
        setCurrent((c) => (c + 1) % total);
      }, SLIDE_DURATION);
    }
  }, [paused, total]);

  useEffect(() => {
    restart();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, restart]);

  const goTo = (idx: number) => setCurrent(((idx % total) + total) % total);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
      {/* Showcase header */}
      <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-5 sm:mb-7">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-none text-ink">
            Selected Projects<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Compact thumb rail (replaces prev/next + bottom rail) */}
        {total > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            {highlights.map((h, i) => {
              const active = i === current;
              return (
                <button
                  key={h.key}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`text-left rounded-lg border px-2.5 py-1.5 flex flex-col leading-tight transition-all duration-200 hover:-translate-y-0.5 ${
                    active
                      ? "border-accent bg-accent-soft"
                      : "border-line bg-card hover:border-muted"
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] tracking-wider ${
                      active ? "text-accent font-semibold" : "text-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} / {h.glyph}
                  </span>
                  <span className="text-[11.5px] font-semibold text-ink">
                    {h.shortLabel}
                  </span>
                </button>
              );
            })}
            <div className="flex items-center gap-1.5 ml-1">
              <button
                type="button"
                aria-label="Previous"
                onClick={prev}
                className="w-8 h-8 rounded-full border border-line bg-card text-body inline-flex items-center justify-center transition-all duration-200 hover:bg-ink hover:text-canvas hover:border-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={next}
                className="w-8 h-8 rounded-full border border-line bg-card text-body inline-flex items-center justify-center transition-all duration-200 hover:bg-ink hover:text-canvas hover:border-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Carousel */}
      <div
        className="relative rounded-3xl overflow-hidden bg-card border border-line shadow-[0_24px_60px_-28px_rgba(20,20,15,0.18)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transitionTimingFunction: "cubic-bezier(.65,.05,.36,1)",
          }}
        >
          {highlights.map((h, i) => (
            <div
              key={h.key}
              className="flex-[0_0_100%] grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] min-h-[420px] lg:min-h-[480px]"
              aria-hidden={i !== current}
            >
              {/* Image side — clickable to detail, hover reveals View Details */}
              <Link
                href={h.href}
                aria-label={`View ${h.title} details`}
                className="group relative block overflow-hidden bg-card min-h-[240px]"
              >
                <span className="absolute top-5 left-5 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur border border-line font-mono text-[10px] sm:text-[11px] tracking-wider text-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {h.badge}
                </span>
                <span className="absolute bottom-5 left-5 z-20 px-3 py-1.5 rounded-full bg-card/85 backdrop-blur border border-line font-mono text-[11px] text-body">
                  {h.year}
                </span>
                <div
                  aria-hidden
                  className="absolute inset-0 z-[2] pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent 0 22px, rgba(0,0,0,0.04) 22px 23px)",
                  }}
                />
                <img
                  src={h.image}
                  alt={h.title}
                  className="relative z-[3] w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 z-[5] flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-4 py-2 rounded-full shadow flex items-center gap-1.5">
                    View Details
                    <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </Link>

              {/* Info side */}
              <div className="relative bg-card p-6 sm:p-10 flex flex-col justify-between gap-5">
                <span
                  aria-hidden
                  className="hidden sm:block absolute top-7 right-8 font-mono font-bold text-5xl lg:text-6xl text-ink/[0.05] tracking-tight leading-none pointer-events-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-center gap-2.5 mb-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted">
                    <span className="w-5 h-px bg-accent flex-shrink-0" />
                    <span>{h.category}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.4rem] font-semibold tracking-tight leading-[1.05] text-ink mb-3">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm italic text-muted leading-snug mb-3 max-w-md">
                    {h.sub}
                  </p>
                  <p className="text-sm sm:text-[15px] text-body leading-relaxed max-w-md mb-5">
                    {h.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {h.tech.map((t, idx) => (
                      <TechBadge key={idx} tech={t} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <Link
                    href={h.href}
                    className="group/btn inline-flex items-center gap-2.5 bg-ink hover:bg-ink/90 text-canvas text-sm sm:text-[15px] font-semibold px-6 sm:px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    View Details
                    <FaArrowRight className="text-xs group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                  {h.github && (
                    <a
                      href={h.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-card hover:border-ink hover:bg-surface text-ink border border-line text-sm sm:text-[15px] font-semibold px-5 sm:px-6 py-3.5 rounded-xl transition-all duration-200"
                    >
                      <FaGithub className="text-base" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress rail */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-ink/10 z-30">
          <div ref={fillRef} className="h-full bg-accent" style={{ width: "0%" }} />
        </div>
      </div>

    </div>
  );
}
