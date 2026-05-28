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

const colorBg: Record<Highlight["color"], string> = {
  indigo: "bg-gradient-to-br from-indigo-100 to-indigo-50",
  violet: "bg-gradient-to-br from-violet-100 to-violet-50",
  amber: "bg-gradient-to-br from-amber-100 to-amber-50",
  emerald: "bg-gradient-to-br from-emerald-100 to-emerald-50",
  rose: "bg-gradient-to-br from-rose-100 to-rose-50",
};

export default function ProjectShowcase() {
  const total = highlights.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  const restart = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const fill = fillRef.current;
    if (fill) {
      fill.style.transition = "none";
      fill.style.width = "0%";
      void fill.offsetWidth;
      if (!paused) {
        fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
        fill.style.width = "100%";
      }
    }
    if (!paused && total > 1) {
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
          <div className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-gray-500 mb-3">
            <span className="w-5 h-px bg-blue-500" />
            featured_work · highlight
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-900">
            Selected <span className="text-blue-600">Projects</span>.
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
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-400"
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] tracking-wider ${
                      active ? "text-blue-600 font-semibold" : "text-gray-500"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} / {h.glyph}
                  </span>
                  <span className="text-[11.5px] font-semibold text-gray-900">
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
                className="w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-800 inline-flex items-center justify-center transition-all duration-200 hover:bg-gray-900 hover:text-white hover:border-gray-900"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={next}
                className="w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-800 inline-flex items-center justify-center transition-all duration-200 hover:bg-gray-900 hover:text-white hover:border-gray-900"
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
        className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-[0_24px_60px_-28px_rgba(20,20,15,0.18)]"
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
              {/* Image side — pattern only, no gradient bg, no glyph */}
              <div className="relative overflow-hidden bg-white min-h-[240px]">
                <span className="absolute top-5 left-5 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur border border-gray-200 font-mono text-[10px] sm:text-[11px] tracking-wider text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {h.badge}
                </span>
                <span className="absolute bottom-5 left-5 z-20 px-3 py-1.5 rounded-full bg-white/85 border border-gray-200 font-mono text-[11px] text-gray-700">
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
                  className="relative z-[3] w-full h-full object-contain"
                />
              </div>

              {/* Info side */}
              <div className="relative bg-white p-6 sm:p-10 flex flex-col justify-between gap-5">
                <span
                  aria-hidden
                  className="hidden sm:block absolute top-7 right-8 font-mono font-bold text-5xl lg:text-6xl text-black/5 tracking-tight leading-none pointer-events-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500">
                    <span
                      className={`px-2.5 py-1 rounded-full font-semibold text-white tracking-wider ${
                        h.featured ? "bg-blue-600" : "bg-gray-900"
                      }`}
                    >
                      {h.featured ? "★ Featured" : "Project"}
                    </span>
                    <span>{h.category}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold tracking-tight leading-[1.05] text-gray-900 mb-3">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm italic text-gray-500 leading-snug mb-3 max-w-md">
                    {h.sub}
                  </p>
                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed max-w-md mb-5">
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
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    View Details
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                  {h.github && (
                    <a
                      href={h.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:border-gray-800 text-gray-900 border border-gray-200 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress rail */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/[0.06] z-30">
          <div ref={fillRef} className="h-full bg-blue-600" style={{ width: "0%" }} />
        </div>
      </div>

    </div>
  );
}
