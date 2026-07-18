"use client";

import { useState } from "react";
import Lightbox, { LightboxItem } from "@/component/UI/Lightbox";
import { FaChevronLeft, FaChevronRight, FaPlay, FaArrowLeft, FaArrowRight, FaGithub, FaExpand } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { seniorProject as senior, seniorVideos as videos } from "@/data/SeniorProjectData";
import { projectData } from "@/data/ProjectsData";
import { useImageCarousel } from "@/hooks/useImageCarousel";
import TechBadge from "@/component/UI/TechBadge";

type MediaItem =
  | { type: "video"; id: string; name: string; desc: string }
  | { type: "image"; src: string };

const mediaItems: MediaItem[] = [
  { type: "image", src: senior.images[0] },
  { type: "image", src: senior.images[1] },
  ...videos.map((v) => ({ type: "video" as const, ...v })),
  ...senior.images.slice(2).map((src) => ({ type: "image" as const, src })),
];

export default function SeniorProjectPage() {
  const { index: selectedIndex, total, goPrev, goNext, select, setThumbRef } =
    useImageCarousel(mediaItems.length);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentItem = mediaItems[selectedIndex];
  const otherProjects = projectData.slice(0, 3);

  const handleMainClick = () => setLightboxIndex(selectedIndex);

  return (
    <div className="min-h-screen bg-canvas">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-28 pb-12 sm:pb-16 relative z-10 space-y-8">

        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          Back to projects
        </Link>

        {/* ── Title block ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-muted">
              <span className="text-accent font-semibold">Senior Project</span>
              <span aria-hidden>·</span>
              <span>{senior.year}</span>
            </div>
            <a
              href="https://github.com/aumputthipong/AI-garden-System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-ink hover:bg-ink/90 text-canvas text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200"
            >
              <FaGithub className="text-xs" />
              Code
            </a>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-[1.05]">
            {senior.title}
          </h1>
          <p className="text-sm italic text-muted leading-relaxed">
            {senior.full_project_name}
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-body max-w-2xl">
            {senior.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {senior.tech.map((tech, i) => (
              <TechBadge key={i} tech={tech} iconSrc={`/${tech.icon}`} />
            ))}
          </div>
        </motion.div>

        {/* ── Main viewer (full width) ── */}
        <div className="space-y-3">
          <div
            className="relative group overflow-hidden rounded-3xl bg-gray-900 shadow-sm cursor-pointer"
            onClick={handleMainClick}
          >
            <div className="aspect-video">
              {currentItem.type === "video" ? (
                <iframe
                  key={currentItem.id}
                  src={`https://www.youtube.com/embed/${currentItem.id}?autoplay=1&rel=0&vq=hd1080`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={currentItem.src}
                    alt={`Screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] dark:brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow">
                      Click to expand
                    </span>
                  </div>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(selectedIndex); }}
              aria-label="Expand to full screen"
              className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
            >
              <FaExpand className="text-xs sm:text-sm" />
            </button>

            {selectedIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg"
              >
                <FaChevronLeft className="text-sm" />
              </button>
            )}

            {selectedIndex < total - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg"
              >
                <FaChevronRight className="text-sm" />
              </button>
            )}

            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/50 backdrop-blur-sm text-white text-[11px] sm:text-xs px-2.5 py-1 rounded-full font-medium">
              {selectedIndex + 1} / {total}
            </div>

            {currentItem.type === "video" && (
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/60 backdrop-blur-sm text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 max-w-[60%] truncate">
                <FaPlay className="text-[10px] flex-shrink-0" />
                <span className="truncate">{currentItem.name}</span>
              </div>
            )}
          </div>

          {/* Thumbnail strip */}
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              disabled={selectedIndex === 0}
              className="flex-shrink-0 w-8 h-8 bg-ink hover:bg-ink/90 disabled:opacity-30 disabled:cursor-not-allowed text-canvas rounded-lg flex items-center justify-center transition-all duration-200 shadow"
            >
              <FaChevronLeft className="text-xs" />
            </button>

            <div className="thumb-strip flex gap-2 overflow-x-auto flex-1 pb-2 sm:pb-3">
              {mediaItems.map((item, i) => (
                <div
                  key={i}
                  ref={setThumbRef(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={item.type === "video" ? `Play ${item.name}` : `View image ${i + 1}`}
                  aria-current={i === selectedIndex}
                  onClick={() => select(i)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(i); } }}
                  className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
                    i === selectedIndex
                      ? "border-accent shadow-md"
                      : "border-line opacity-60 hover:opacity-100 hover:border-muted"
                  }`}
                >
                  {item.type === "video" ? (
                    <div className="relative w-24 h-14 sm:w-32 sm:h-[72px] md:w-40 md:h-[90px] bg-gray-900">
                      <img
                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <FaPlay className="text-white text-[10px] ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={`Thumb ${i + 1}`}
                      className="w-24 h-14 sm:w-32 sm:h-[72px] md:w-40 md:h-[90px] object-cover"
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={selectedIndex === total - 1}
              className="flex-shrink-0 w-8 h-8 bg-ink hover:bg-ink/90 disabled:opacity-30 disabled:cursor-not-allowed text-canvas rounded-lg flex items-center justify-center transition-all duration-200 shadow"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* ── Responsibilities ── */}
        <div className="pt-8 border-t border-line">
          <h3 className="font-display text-lg sm:text-xl font-semibold text-ink mb-4">
            Responsibilities
          </h3>
          <ul className="space-y-3 max-w-3xl">
            {senior.responsibility.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                <span className="w-6 h-6 bg-accent-soft text-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-semibold">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── More projects ── */}
        {otherProjects.length > 0 && (
          <div className="pt-6 sm:pt-8 border-t border-line">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                More projects
              </h2>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                View all
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group flex flex-col rounded-2xl border border-line p-3 hover:border-accent/40 hover:bg-accent-soft/40 transition-all duration-200"
                >
                  <div className="relative h-32 sm:h-28 overflow-hidden rounded-xl bg-gray-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${p.layout === "mobile" ? "object-contain" : "object-cover"}`}
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted mt-3">
                    {p.type}
                  </p>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-ink leading-snug mt-1 group-hover:text-accent transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={mediaItems as LightboxItem[]}
          initialIndex={lightboxIndex}
          layout="web"
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
