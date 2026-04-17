"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { projectData } from "@/data/ProjectsData";
import Lightbox from "@/component/UI/Lightbox";
import { FaGithub, FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (isNaN(id)) notFound();
  const project = projectData.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Ambient blobs */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 pt-24 pb-20 relative z-10">
        {/* Back */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-full border border-white/30 shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative h-[280px] md:h-[420px] w-full overflow-hidden rounded-lg border-2 border-gray-300 shadow-xl mb-10"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-white/40 shadow-sm mb-3">
              {project.type}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-md">
              {project.title}
            </h1>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex-1 space-y-8"
          >
            {/* About */}
            <div className="border-2 border-gray-300 rounded-lg shadow-xl bg-white p-6">
              <h2 className="text-lg font-bold text-gray-800 uppercase mb-3 tracking-wide">
                About this project
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">{project.description}</p>
            </div>

            {/* Tech stack */}
            <div className="border-2 border-gray-300 rounded-lg shadow-xl bg-white p-6">
              <h2 className="text-lg font-bold text-gray-800 uppercase mb-4 tracking-wide">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-full font-medium hover:shadow-md hover:border-gray-300 transition-all duration-200"
                  >
                    {tech.icon && (
                      <img src={tech.icon} alt={tech.name} className="h-4 w-4 object-contain" />
                    )}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub */}
            {project.github.length > 0 && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                View Source Code
              </a>
            )}
          </motion.div>

          {/* Right: meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:w-56 space-y-4"
          >
            <div className="border-2 border-gray-300 rounded-lg shadow-xl bg-white p-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCalendarAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Year</p>
                  <p className="text-gray-800 font-semibold text-sm">{project.year}</p>
                </div>
              </div>
              <div className="h-px bg-gray-100" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Category</p>
                  <p className="text-gray-800 font-semibold text-sm">{project.type}</p>
                </div>
              </div>
              <div className="h-px bg-gray-100" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Platform</p>
                  <p className="text-gray-800 font-semibold text-sm capitalize">{project.layout}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-6">
            Project Screenshots
          </h2>
          {project.haveImage && project.images.length > 0 ? (
            <div
              className={`grid gap-4 ${
                project.layout === "mobile"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-2 md:grid-cols-3"
              }`}
            >
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-gray-300 transition-all duration-300"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className={`w-full block transition-transform duration-500 group-hover:scale-105 ${
                      project.layout === "mobile"
                        ? "aspect-[9/19] object-contain object-top bg-gray-100"
                        : "h-44 object-cover"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-36 border-2 border-dashed border-gray-200 rounded-lg bg-white">
              <p className="text-gray-400 text-sm">No screenshots available</p>
            </div>
          )}
        </motion.div>
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
