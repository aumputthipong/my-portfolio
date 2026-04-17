"use client";

import Link from "next/link";
import { useState } from "react";
import Lightbox from "@/component/UI/Lightbox";
import VideoProject from "@/component/Project/VideoProject";
import { FaGithub, FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const seniorProject = {
  full_project_name:
    "Web Application Platform to Support Image and Video Analysis with AI in a Microservice Model",
  title: "AI Garden System",
  description: `Full-stack web application platform that enables users to analyze images and videos using AI computer vision services integrated into the platform, supporting object detection, regression, classification, and image segmentation.`,
  responsibility: [
    "Designed a user-friendly UI to support non-technical users, including medical professors and medical students, to easily access AI computer vision services.",
    "Implemented existing AI computer vision models as microservice-based AI services that the web platform can call and use.",
    "Developed a web platform that supports adding and integrating new AI services, for AI developers.",
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
            src={seniorProject.images[0]}
            alt={seniorProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-white/40 shadow-sm mb-3">
              Senior Project · {seniorProject.year}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-md">
              {seniorProject.title}
            </h1>
          </div>
        </motion.div>

        {/* Full project name bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-8 border-l-4 border-gray-300 pl-4"
        >
          <p className="text-xs text-gray-400 leading-relaxed">{seniorProject.full_project_name}</p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex-1 space-y-6"
          >
            {/* About */}
            <div className="border-2 border-gray-300 rounded-lg shadow-xl bg-white p-6">
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-3">
                About this project
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">{seniorProject.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="border-2 border-gray-300 rounded-lg shadow-xl bg-white p-6">
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-4">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {seniorProject.responsibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="border-2 border-gray-300 rounded-lg shadow-xl bg-white p-6">
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {seniorProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-full font-medium hover:shadow-md hover:border-gray-300 transition-all duration-200"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-4 w-4 object-contain" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub */}
            <a
              href={seniorProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaGithub className="text-lg" />
              View Source Code
            </a>
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
                  <p className="text-gray-800 font-semibold text-sm">{seniorProject.year}</p>
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
                  <p className="text-gray-800 font-semibold text-sm">Web Application</p>
                </div>
              </div>
              <div className="h-px bg-gray-100" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Type</p>
                  <p className="text-gray-800 font-semibold text-sm">Senior Project</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {seniorProject.images.map((img, i) => (
              <div
                key={i}
                className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-gray-300 transition-all duration-300"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
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
        </motion.div>

        {/* Video demos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-12"
        >
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-6">
            Video Demo
          </h2>
          <VideoProject />
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={seniorProject.images}
          initialIndex={lightboxIndex}
          layout="web"
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
