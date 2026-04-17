"use client";

import { useState, useRef, useEffect } from "react";
import Lightbox from "@/component/UI/Lightbox";
import VideoProject from "@/component/Project/VideoProject";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const senior = {
  full_project_name:
    "Web Application Platform to Support Image and Video Analysis with AI in a Microservice Model",
  title: "AI Garden System",
  description:
    "Full-stack web application platform that enables users to analyze images and videos using AI computer vision services, supporting object detection, regression, classification, and image segmentation.",
  responsibility: [
    "Designed a user-friendly UI to support non-technical users, including medical professors and students, to easily access AI computer vision services.",
    "Implemented existing AI computer vision models as microservice-based AI services that the web platform can call and use.",
    "Developed a web platform that supports adding and integrating new AI services for AI developers.",
  ],
  tech: [
    { name: "React", icon: "image/skills/framework/react.png" },
    { name: "NestJs", icon: "image/skills/framework/nestjs.png" },
    { name: "TypeScript", icon: "image/skills/programming/typescript.png" },
    { name: "Tailwind", icon: "image/skills/framework/tailwind.png" },
    { name: "PostGreSQL", icon: "image/skills/framework/Postgresql.png" },
    { name: "Docker", icon: "image/skills/tools/docker.png" },
  ],
  images: [
    "/projects/senior/ai-web (3).png",
    "/projects/senior/ai-web (2).png",
    "/projects/senior/ai-web (19).png",
    "/projects/senior/ai-web (18).png",
    "/projects/senior/ai-web (1).png",
    "/projects/senior/ai-web (20).png",
    "/projects/senior/ai-web (4).png",
    "/projects/senior/ai-web (7).png",
    "/projects/senior/ai-web (5).png",
    "/projects/senior/ai-web (6).png",
    "/projects/senior/ai-web (10).png",
    "/projects/senior/ai-web (21).png",
    "/projects/senior/ai-web (23).png",
    "/projects/senior/ai-web (22).png",
    "/projects/senior/ai-web.png",
    "/projects/senior/ai-web (9).png",
    "/projects/senior/ai-web (13).png",
  ],
  github: "https://github.com/aumputthipong/AI-garden-System.git",
  year: 2025,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
      {children}
    </p>
  );
}

export default function SeniorProjectPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goPrev = () => setSelectedIndex((i) => Math.max(0, i - 1));
  const goNext = () => setSelectedIndex((i) => Math.min(senior.images.length - 1, i + 1));

  const selectImage = (i: number) => setSelectedIndex(i);

  useEffect(() => {
    thumbnailRefs.current[selectedIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 relative z-10 space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col lg:flex-row gap-5 items-start"
        >

          {/* ── LEFT: Image viewer + thumbnails ── */}
          <div className="flex-1 min-w-0 space-y-3">

            {/* Main image */}
            <div
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-xl border-2 border-gray-200"
              onClick={() => setLightboxIndex(selectedIndex)}
            >
              <div className="aspect-video">
                <img
                  src={senior.images[selectedIndex]}
                  alt={`Screenshot ${selectedIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Hover hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-4 py-2 rounded-full shadow">
                  Click to expand
                </span>
              </div>

              {/* Prev arrow */}
              {selectedIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
              )}

              {/* Next arrow */}
              {selectedIndex < senior.images.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              )}

              {/* Counter */}
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
                {selectedIndex + 1} / {senior.images.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin' }}>
              {senior.images.map((img, i) => (
                <div
                  key={i}
                  ref={(el) => { thumbnailRefs.current[i] = el; }}
                  onClick={() => selectImage(i)}
                  className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    i === selectedIndex
                      ? "border-slate-700 shadow-md"
                      : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"
                  }`}
                >
                  <img src={img} alt={`Thumb ${i + 1}`} className="w-32 h-[72px] object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">

            {/* Cover image */}
            <div className="overflow-hidden rounded-xl border-2 border-gray-200 shadow-xl bg-gray-900 h-44">
              <img src={senior.images[0]} alt={senior.title} className="w-full h-full object-cover" />
            </div>

            {/* Info card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-xl p-5 space-y-4">

              {/* Badge + title */}
              <div>
                <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 mb-2">
                  Senior Project · {senior.year}
                </span>
                <h1 className="text-xl font-extrabold text-gray-900 leading-snug">
                  {senior.title}
                </h1>
              </div>

              {/* Full project name */}
              <p className="text-xs italic leading-relaxed border-l-2 border-gray-200 pl-3" style={{ color: '#9ca3af' }}>
                {senior.full_project_name}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {senior.description}
              </p>

              <div className="h-px bg-gray-100" />

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {senior.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ color: '#4b5563' }}
                    >
                      <img src={`../${tech.icon}`} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub */}
              <a
                href={senior.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaGithub />
                View Source Code
              </a>

              <div className="h-px bg-gray-100" />

              {/* Responsibilities */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Responsibilities</p>
                <ul className="space-y-3">
                  {senior.responsibility.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: '#4b5563' }}>
                      <span className="w-5 h-5 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-gray-500">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Meta — bottom */}
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-xs">Year</span>
                  <span className="font-semibold text-gray-700 text-xs">{senior.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-xs">Screenshots</span>
                  <span className="font-semibold text-gray-700 text-xs">{senior.images.length}</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Video Demo ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="bg-white border-2 border-gray-200 rounded-xl shadow-xl p-6"
        >
          <SectionLabel>Video Demo</SectionLabel>
          <VideoProject />
        </motion.div>

      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={senior.images}
          initialIndex={lightboxIndex}
          layout="web"
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
