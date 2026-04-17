"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { projectData } from "@/data/ProjectsData";
import Lightbox from "@/component/UI/Lightbox";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (isNaN(id)) notFound();
  const project = projectData.find((p) => p.id === id);
  if (!project) notFound();

  const isMobile = project.layout === "mobile";

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 pt-16 pb-20 relative z-10">

        {/* Back */}
        <div className="mb-5">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-full border border-white/30 shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Portfolio
          </Link>
        </div>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden rounded-lg border-2 border-gray-300 shadow-xl"
        >
          {isMobile ? (
            /* Mobile: 3 phone mockups stepped */
            <div className="bg-gray-900 h-64 flex items-end justify-center gap-3 px-10 overflow-hidden">
              {project.images.slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  className={`flex-1 max-w-[120px] rounded-t-2xl overflow-hidden shadow-2xl border border-white/10 transition-all ${
                    i === 1 ? "h-56" : "h-44 opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Preview ${i + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Web: full screenshot compact */
            <div className="relative h-56 md:h-72 bg-gray-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          )}
        </motion.div>

        {/* ── Info card ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-6 md:p-8"
        >
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
              {project.type}
            </span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-gray-400 text-xs">{project.year}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-gray-400 text-xs capitalize">{project.layout}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug mb-3">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="h-px bg-gray-100 mb-5" />

          {/* Tech + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                  >
                    {tech.icon && (
                      <img src={`../${tech.icon}`} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                    )}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {project.github.length > 0 && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 self-start sm:self-center flex-shrink-0"
              >
                <FaGithub />
                Source Code
              </a>
            )}
          </div>
        </motion.div>

        {/* ── Screenshots ── */}
        {project.haveImage && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="mt-6"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Screenshots
              <span className="ml-2 font-normal normal-case tracking-normal text-gray-300">
                ({project.images.length})
              </span>
            </p>

            {isMobile ? (
              /* Mobile: portrait grid — 3 col → 4 col */
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-gray-900"
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full aspect-[9/16] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow">
                        <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Web: uniform grid */
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-28 md:h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow">
                        <svg className="w-3 h-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {!project.haveImage && (
          <div className="mt-6 flex items-center justify-center h-28 border-2 border-dashed border-gray-200 rounded-lg bg-white">
            <p className="text-gray-400 text-sm">No screenshots available</p>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          initialIndex={lightboxIndex}
          layout={project.layout}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
