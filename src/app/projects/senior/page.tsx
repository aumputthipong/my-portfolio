"use client";

import { useState } from "react";
import Lightbox, { LightboxItem } from "@/component/UI/Lightbox";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { seniorProject as senior, seniorVideos as videos } from "@/data/SeniorProjectData";
import { useImageCarousel } from "@/hooks/useImageCarousel";
import SectionHeader from "@/component/UI/SectionHeader";
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

  const handleMainClick = () => setLightboxIndex(selectedIndex);

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="fixed top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-10 pb-10 sm:pb-12 relative z-10 space-y-5">

        <SectionHeader label="Senior Project" index={`PROJ_SENIOR · ${senior.year}`} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col lg:flex-row gap-4 sm:gap-5 items-start"
        >

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-0 w-full space-y-3">

            {/* Main viewer */}
            <div
              className="relative group overflow-hidden rounded-xl bg-gray-900 shadow-xl border-2 border-gray-200"
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow">
                        Click to expand
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Prev arrow */}
              {selectedIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
              )}

              {/* Next arrow */}
              {selectedIndex < total - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              )}

              {/* Counter */}
              <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm text-white text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium">
                {selectedIndex + 1} / {total}
              </div>

              {/* Video label */}
              {currentItem.type === "video" && (
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full flex items-center gap-1.5 max-w-[60%] truncate">
                  <FaPlay className="text-[10px] flex-shrink-0" />
                  <span className="truncate">{currentItem.name}</span>
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={goPrev}
                disabled={selectedIndex === 0}
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-md flex items-center justify-center transition-all duration-200 shadow"
              >
                <FaChevronLeft className="text-[10px] sm:text-xs" />
              </button>

              <div className="thumb-strip flex gap-1.5 sm:gap-2 overflow-x-auto flex-1 pb-2 sm:pb-3">
                {mediaItems.map((item, i) => (
                  <div
                    key={i}
                    ref={setThumbRef(i)}
                    onClick={() => select(i)}
                    className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-md sm:rounded-lg border-2 transition-all duration-200 ${
                      i === selectedIndex
                        ? "border-slate-700 shadow-md"
                        : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"
                    }`}
                  >
                    {item.type === "video" ? (
                      <div className="relative w-20 h-12 sm:w-24 sm:h-14 md:w-32 md:h-[72px] bg-gray-900">
                        <img
                          src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                            <FaPlay className="text-white text-[8px] sm:text-[10px] ml-0.5" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={`Thumb ${i + 1}`}
                        className="w-20 h-12 sm:w-24 sm:h-14 md:w-32 md:h-[72px] object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={goNext}
                disabled={selectedIndex === total - 1}
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-md flex items-center justify-center transition-all duration-200 shadow"
              >
                <FaChevronRight className="text-[10px] sm:text-xs" />
              </button>
            </div>

            {/* Responsibilities */}
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm p-4 sm:p-5">
              <p className="text-[11px] font-mono text-gray-400 mb-3 sm:mb-4 flex items-center gap-1.5">
                <span className="text-blue-500">{"//"}</span> RESPONSIBILITIES
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                {senior.responsibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] sm:text-xs font-bold text-gray-500">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-20">

            <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-4 space-y-4">

              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-gray-400 tracking-wider">PROJ_SENIOR</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                </div>
              </div>

              <div>
                <span className="inline-block bg-gray-100 text-gray-500 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 mb-2">
                  Senior Project · {senior.year}
                </span>
                <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
                  {senior.title}
                </h1>
                <p className="text-[11px] mt-1.5 leading-relaxed" style={{ color: '#9ca3af' }}>
                  {senior.full_project_name}
                </p>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {senior.description}
              </p>

              <div className="h-px bg-gray-100" />

              <div>
                <p className="text-[11px] font-mono text-gray-400 mb-2 sm:mb-2.5 flex items-center gap-1.5">
                  <span className="text-blue-500">{"//"}</span> TECH STACK
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {senior.tech.map((tech, i) => (
                    <TechBadge key={i} tech={tech} iconSrc={`/${tech.icon}`} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none">{senior.year}</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Year</p>
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none">{videos.length}</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Videos</p>
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none">{senior.images.length}</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Shots</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
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
