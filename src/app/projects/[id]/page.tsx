"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import { projectData } from "@/data/ProjectsData";
import Lightbox from "@/component/UI/Lightbox";
import { FaGithub, FaChevronLeft, FaChevronRight, FaFigma, FaArrowLeft, FaExpand } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useImageCarousel } from "@/hooks/useImageCarousel";
import TechBadge from "@/component/UI/TechBadge";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (isNaN(id)) notFound();
  const project = projectData.find((p) => p.id === id);
  if (!project) notFound();

  const isMobile = project.layout === "mobile";
  const images = project.haveImage && project.images.length > 0 ? project.images : [project.image];

  const { index: selectedIndex, goPrev, goNext, select, setThumbRef } = useImageCarousel(images.length);

  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-28 pb-12 sm:pb-16 relative z-10 space-y-8">

        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-accent transition-colors"
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
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-400">
              <span className="text-accent font-semibold">{project.type}</span>
              <span aria-hidden>·</span>
              <span className="capitalize">{project.layout}</span>
              <span aria-hidden>·</span>
              <span>{project.year}</span>
            </div>
            {(project.github.length > 0 || typeof project.ref === "string") && (
              <div className="flex items-center gap-2">
                {project.github.length > 0 && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200"
                  >
                    <FaGithub className="text-xs" />
                    Code
                  </a>
                )}
                {typeof project.ref === "string" && (
                  <a
                    href={project.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200"
                  >
                    <FaFigma className="text-xs" />
                    Figma
                  </a>
                )}
              </div>
            )}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600 max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((tech, i) => (
              <TechBadge key={i} tech={tech} iconSrc={tech.icon ? `/${tech.icon}` : undefined} />
            ))}
          </div>
        </motion.div>

        {/* ── Image / carousel (full width) ── */}
        {!project.haveImage && (
          <div className="aspect-video rounded-3xl bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-3 sm:gap-4 text-center px-4 sm:px-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <FaGithub className="text-2xl sm:text-3xl text-gray-400" />
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-xs sm:text-sm">No screenshots available</p>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-1">View the source code on GitHub</p>
            </div>
            {project.github.length > 0 && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-sm font-semibold px-5 sm:px-6 py-3 rounded-xl shadow transition-all duration-200"
              >
                <FaGithub />
                View Source Code
              </a>
            )}
          </div>
        )}

        {project.haveImage && (
          <div className="space-y-3">
            <div
              className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gray-900 shadow-sm"
              onClick={() => setLightboxIndex(selectedIndex)}
            >
              {isMobile ? (
                <div className="relative aspect-video flex items-center justify-center overflow-hidden">
                  <img src={images[selectedIndex]} aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-30" />
                  <img src={images[selectedIndex]} alt={`Screenshot ${selectedIndex + 1}`} className="relative z-10 h-full max-h-[360px] sm:max-h-[560px] object-contain" />
                </div>
              ) : (
                <div className="aspect-video">
                  <img src={images[selectedIndex]} alt={`Screenshot ${selectedIndex + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
              )}

              <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow">
                  Click to expand
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(selectedIndex); }}
                aria-label="Expand image to full screen"
                className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
              >
                <FaExpand className="text-xs sm:text-sm" />
              </button>

              {selectedIndex > 0 && (
                <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg">
                  <FaChevronLeft className="text-sm" />
                </button>
              )}
              {selectedIndex < images.length - 1 && (
                <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg">
                  <FaChevronRight className="text-sm" />
                </button>
              )}

              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/50 backdrop-blur-sm text-white text-[11px] sm:text-xs px-2.5 py-1 rounded-full font-medium">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex items-center gap-2">
                <button onClick={goPrev} disabled={selectedIndex === 0} className="flex-shrink-0 w-8 h-8 bg-gray-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center transition-all duration-200 shadow cursor-pointer">
                  <FaChevronLeft className="text-xs" />
                </button>
                <div className="thumb-strip flex gap-2 overflow-x-auto flex-1 pb-2 sm:pb-3">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      ref={setThumbRef(i)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View image ${i + 1}`}
                      aria-current={i === selectedIndex}
                      onClick={() => select(i)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(i); } }}
                      className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${i === selectedIndex ? "border-accent shadow-md" : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"}`}
                    >
                      {isMobile ? (
                        <img src={img} alt={`Thumb ${i + 1}`} className="w-12 h-20 sm:w-16 sm:h-24 object-cover object-top bg-gray-900" />
                      ) : (
                        <img src={img} alt={`Thumb ${i + 1}`} className="w-24 h-14 sm:w-32 sm:h-[72px] md:w-40 md:h-[90px] object-cover" />
                      )}
                    </div>
                  ))}
                </div>
                <button onClick={goNext} disabled={selectedIndex === images.length - 1} className="flex-shrink-0 w-8 h-8 bg-gray-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center transition-all duration-200 shadow cursor-pointer">
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          layout={project.layout}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
