"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { projectData } from "@/data/ProjectsData";
import Lightbox from "@/component/UI/Lightbox";
import { FaGithub, FaChevronLeft, FaChevronRight, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stripRef = useRef<HTMLDivElement>(null);

  if (isNaN(id)) notFound();
  const project = projectData.find((p) => p.id === id);
  if (!project) notFound();

  const isMobile = project.layout === "mobile";
  const images = project.haveImage && project.images.length > 0 ? project.images : [project.image];

  const goPrev = () => setSelectedIndex((i) => Math.max(0, i - 1));
  const goNext = () => setSelectedIndex((i) => Math.min(images.length - 1, i + 1));

  const selectImage = (i: number) => {
    setSelectedIndex(i);
    thumbnailRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  useEffect(() => {
    thumbnailRefs.current[selectedIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col lg:flex-row gap-5 items-start"
        >

          {/* ── LEFT: Image viewer + thumbnails ── */}
          <div className="flex-1 min-w-0 space-y-3">

            {/* No screenshots placeholder */}
            {!project.haveImage && (
              <div className="aspect-video rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-4 text-center px-8">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <FaGithub className="text-3xl text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-500 text-sm">No screenshots available</p>
                  <p className="text-xs text-gray-400 mt-1">View the source code on GitHub</p>
                </div>
                {project.github.length > 0 && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow transition-all duration-200"
                  >
                    <FaGithub />
                    View Source Code
                  </a>
                )}
              </div>
            )}

            {/* Main image + thumbnails (only when haveImage) */}
            {project.haveImage && (
              <>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-xl border-2 border-gray-200"
                  onClick={() => setLightboxIndex(selectedIndex)}
                >
                  {isMobile ? (
                    <div className="relative aspect-video flex items-center justify-center overflow-hidden">
                      <img src={images[selectedIndex]} aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-30" />
                      <img src={images[selectedIndex]} alt={`Screenshot ${selectedIndex + 1}`} className="relative z-10 h-full max-h-[480px] object-contain" />
                    </div>
                  ) : (
                    <div className="aspect-video">
                      <img src={images[selectedIndex]} alt={`Screenshot ${selectedIndex + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                    </div>
                  )}

                  {/* Hover hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-4 py-2 rounded-full shadow">
                      Click to expand
                    </span>
                  </div>

                  {selectedIndex > 0 && (
                    <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg">
                      <FaChevronLeft className="text-xs" />
                    </button>
                  )}
                  {selectedIndex < images.length - 1 && (
                    <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg">
                      <FaChevronRight className="text-xs" />
                    </button>
                  )}

                  <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
                    {selectedIndex + 1} / {images.length}
                  </div>
                </div>

                {/* Thumbnail strip */}
                {images.length > 1 && (
                  <div className="flex items-center gap-2">
                    <button onClick={goPrev} disabled={selectedIndex === 0} className="flex-shrink-0 w-8 h-8 bg-gray-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-md flex items-center justify-center transition-all duration-200 shadow cursor-pointer">
                      <FaChevronLeft className="text-xs" />
                    </button>
                    <div ref={stripRef} className="thumb-strip flex gap-2 overflow-x-auto flex-1 pb-3">
                      {images.map((img, i) => (
                        <div
                          key={i}
                          ref={(el) => { thumbnailRefs.current[i] = el; }}
                          onClick={() => selectImage(i)}
                          className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-200 ${i === selectedIndex ? "border-slate-700 shadow-md" : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"}`}
                        >
                          {isMobile ? (
                            <img src={img} alt={`Thumb ${i + 1}`} className="w-14 h-20 object-cover object-top bg-gray-900" />
                          ) : (
                            <img src={img} alt={`Thumb ${i + 1}`} className="w-32 h-[72px] object-cover" />
                          )}
                        </div>
                      ))}
                    </div>
                    <button onClick={goNext} disabled={selectedIndex === images.length - 1} className="flex-shrink-0 w-8 h-8 bg-gray-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-md flex items-center justify-center transition-all duration-200 shadow cursor-pointer">
                      <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                )}
              </>
            )}

          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">

            {/* Cover image */}
            {project.haveImage && (
              <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 shadow-xl bg-gray-900 h-44">
                {isMobile ? (
                  <>
                    <img src={project.image} aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-40" />
                    <img src={project.image} alt={project.title} className="relative z-10 w-full h-full object-contain" />
                  </>
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                )}
              </div>
            )}

            {/* Info card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-xl p-5 space-y-4">

              {/* Badge + title */}
              <div>
                <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 mb-2">
                  {project.type}
                </span>
                <h1 className="text-xl font-extrabold text-gray-900 leading-snug">
                  {project.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {project.description}
              </p>

              <div className="h-px bg-gray-100" />

              {/* Meta */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 text-xs">Year</span>
                  <span className="font-semibold text-gray-700 text-xs">{project.year}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 text-xs">Platform</span>
                  <span className="font-semibold text-gray-700 text-xs capitalize">{project.layout}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 text-xs">Screenshots</span>
                  <span className="font-semibold text-gray-700 text-xs">{images.length}</span>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ color: '#4b5563' }}
                    >
                      {tech.icon && (
                        <img src={`../${tech.icon}`} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                      )}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-2 pt-1">
                {project.github.length > 0 && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
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
                    className="flex items-center justify-center gap-2 w-full border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                  >
                    <FaFigma />
                    View in Figma
                  </a>
                )}
              </div>

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
