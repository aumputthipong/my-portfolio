"use client";

import { projectData } from "@/data/ProjectsData";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaGithub, FaFigma } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GraduationProjects from "./Project/GraduationProjects";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const router = useRouter();
  const types = [...new Set(projectData.map((p) => p.type))];
  const tabs = ["All", ...types];

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="bg-zinc-50">
      <div className="max-w-6xl mx-auto pt-12 px-4">
        {/* Section indicator */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-gray-400" /> Projects
          </p>
          <p className="text-xs font-mono text-gray-400">03 / 04</p>
        </div>
      </div>

      {/* Senior Project */}
      <GraduationProjects />

      {/* Academic Projects */}
      <div className="max-w-6xl mx-auto pb-12 px-4">

        {/* Tab filter */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap justify-center bg-white rounded-full p-1 shadow-sm border border-gray-200 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-slate-800 text-white shadow-md"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {tab}
                <span className={`ml-1.5 text-xs ${activeTab === tab ? "text-white/60" : "text-gray-400"}`}>
                  ({tab === "All" ? projectData.length : projectData.filter((p) => p.type === tab).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              <div className="h-full flex flex-col rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">

                {/* Banner image */}
                <div className="p-3 pb-0 bg-white flex-shrink-0">
                  <div className="relative h-48 overflow-hidden rounded-xl bg-gray-900">
                    {project.layout === "mobile" && (
                      <img
                        src={project.image}
                        aria-hidden
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-50"
                      />
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                        project.layout === "mobile" ? "object-contain" : "object-cover"
                      }`}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-4 py-2 rounded-lg shadow flex items-center gap-1.5">
                        View Details
                        <FaArrowRight className="text-[10px]" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex-1 flex flex-col p-5">
                  <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: '#6b7280' }}>
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 border border-gray-100 bg-gray-50 text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ color: '#6b7280' }}
                      >
                        {tech.icon && (
                          <img src={tech.icon} alt={tech.name} className="h-3 w-3 object-contain" />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Category tag */}
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200" style={{ color: '#6b7280' }}>
                      {project.type}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto gap-2">

                    {/* Left: external link */}
                    <div className="flex items-center min-w-0">
                      {project.github.length > 0 ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 text-xs font-semibold px-2.5 py-1 rounded-md transition-all duration-200"
                          style={{ color: '#374151' }}
                        >
                          <FaGithub />
                          Code
                        </a>
                      ) : typeof project.ref === "string" ? (
                        <a
                          href={project.ref}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 text-xs font-semibold px-2.5 py-1 rounded-md transition-all duration-200"
                          style={{ color: '#374151' }}
                        >
                          <FaFigma />
                          Figma
                        </a>
                      ) : null}
                    </div>

                    {/* Right: year + Details button */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs font-medium text-gray-400">
                        {project.year}
                      </span>
                      <Link
                        href={`/projects/${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        Details
                        <FaArrowRight className="text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
