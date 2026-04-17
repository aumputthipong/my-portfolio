"use client";

import Link from "next/link";
import { useState } from "react";
import Lightbox from "@/component/UI/Lightbox";
import VideoProject from "@/component/Project/VideoProject";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
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

export default function SeniorProjectPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
          className="relative h-56 md:h-72 overflow-hidden rounded-lg border-2 border-gray-300 shadow-xl"
        >
          <img
            src={senior.images[0]}
            alt={senior.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
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
              Senior Project
            </span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-gray-400 text-xs">{senior.year}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-gray-400 text-xs">Web Application</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug mb-1">
            {senior.title}
          </h1>
          <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-gray-200 pl-3 mb-4">
            {senior.full_project_name}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {senior.description}
          </p>

          <div className="h-px bg-gray-100 mb-5" />

          {/* Tech + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {senior.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={senior.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 self-start sm:self-center flex-shrink-0"
            >
              <FaGithub />
              Source Code
            </a>
          </div>
        </motion.div>

        {/* ── Responsibilities ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-6 md:p-8"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Responsibilities
          </p>
          <ul className="space-y-3">
            {senior.responsibility.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Screenshots ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-6"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Screenshots
            <span className="ml-2 font-normal normal-case tracking-normal text-gray-300">
              ({senior.images.length})
            </span>
          </p>

          {/* Uniform grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {senior.images.map((img, i) => (
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
        </motion.div>

        {/* ── Video Demo ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25 }}
          className="mt-6"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Video Demo
          </p>
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
