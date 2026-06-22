"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import { projectData } from "@/data/ProjectsData";
import Lightbox from "@/component/UI/Lightbox";
import { FaGithub, FaChevronLeft, FaChevronRight, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";
import { useImageCarousel } from "@/hooks/useImageCarousel";
import SectionHeader from "@/component/UI/SectionHeader";
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-10 pb-10 sm:pb-12 relative z-10 space-y-5">

        <SectionHeader
          label={project.type}
          index={`PROJ_${String(project.id).padStart(3, "0")} · ${project.year}`}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col lg:flex-row gap-4 sm:gap-5 items-start"
        >

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-0 w-full space-y-3">

            {!project.haveImage && (
              <div className="aspect-video rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-3 sm:gap-4 text-center px-4 sm:px-8">
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
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow transition-all duration-200"
                  >
                    <FaGithub />
                    View Source Code
                  </a>
                )}
              </div>
            )}

            {project.haveImage && (
              <>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900"
                  onClick={() => setLightboxIndex(selectedIndex)}
                >
                  {isMobile ? (
                    <div className="relative aspect-video flex items-center justify-center overflow-hidden">
                      <img src={images[selectedIndex]} aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-30" />
                      <img src={images[selectedIndex]} alt={`Screenshot ${selectedIndex + 1}`} className="relative z-10 h-full max-h-[320px] sm:max-h-[480px] object-contain" />
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

                  {selectedIndex > 0 && (
                    <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg">
                      <FaChevronLeft className="text-xs" />
                    </button>
                  )}
                  {selectedIndex < images.length - 1 && (
                    <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg">
                      <FaChevronRight className="text-xs" />
                    </button>
                  )}

                  <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm text-white text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium">
                    {selectedIndex + 1} / {images.length}
                  </div>
                </div>

                {images.length > 1 && (
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button onClick={goPrev} disabled={selectedIndex === 0} className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-md flex items-center justify-center transition-all duration-200 shadow cursor-pointer">
                      <FaChevronLeft className="text-[10px] sm:text-xs" />
                    </button>
                    <div className="thumb-strip flex gap-1.5 sm:gap-2 overflow-x-auto flex-1 pb-2 sm:pb-3">
                      {images.map((img, i) => (
                        <div
                          key={i}
                          ref={setThumbRef(i)}
                          onClick={() => select(i)}
                          className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-md sm:rounded-lg border-2 transition-all duration-200 ${i === selectedIndex ? "border-accent shadow-md" : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"}`}
                        >
                          {isMobile ? (
                            <img src={img} alt={`Thumb ${i + 1}`} className="w-10 h-16 sm:w-14 sm:h-20 object-cover object-top bg-gray-900" />
                          ) : (
                            <img src={img} alt={`Thumb ${i + 1}`} className="w-20 h-12 sm:w-24 sm:h-14 md:w-32 md:h-[72px] object-cover" />
                          )}
                        </div>
                      ))}
                    </div>
                    <button onClick={goNext} disabled={selectedIndex === images.length - 1} className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-md flex items-center justify-center transition-all duration-200 shadow cursor-pointer">
                      <FaChevronRight className="text-[10px] sm:text-xs" />
                    </button>
                  </div>
                )}
              </>
            )}

          </div>

          {/* ── RIGHT ── */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-20">

            <div className="space-y-4">

              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-gray-400 tracking-wider">PROJ_{String(project.id).padStart(3, "0")}</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                </div>
              </div>

              <div>
                <span className="inline-block bg-gray-100 text-gray-500 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 mb-2">
                  {project.type}
                </span>
                <h1 className="font-display text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
                  {project.title}
                </h1>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {project.description}
              </p>

              <div className="h-px bg-gray-100" />

              <div>
                <p className="text-[11px] font-mono text-gray-400 mb-2 sm:mb-2.5 flex items-center gap-1.5">
                  <span className="text-gray-400">{"//"}</span> TECH STACK
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <TechBadge key={i} tech={tech} iconSrc={tech.icon ? `/${tech.icon}` : undefined} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none">{project.year}</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Year</p>
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none capitalize">{project.layout}</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Platform</p>
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none">{images.length}</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Shots</p>
                </div>
              </div>

              {(project.github.length > 0 || typeof project.ref === "string") && (
                <div className="space-y-2 pt-1">
                  {project.github.length > 0 && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <FaGithub />
                      View Source Code
                    </a>
                  )}
                  {typeof project.ref === "string" && (
                    <a
                      href={project.ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-200"
                    >
                      <FaFigma />
                      View in Figma
                    </a>
                  )}
                </div>
              )}

            </div>
          </div>

        </motion.div>
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
