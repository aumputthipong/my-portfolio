"use client";

import { projectData } from "@/data/ProjectsData";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaArrowRight, FaGithub, FaFigma } from "react-icons/fa";
import Link from "next/link";
import GraduationProjects from "./Project/GraduationProjects";
import Divider from "./UI/Divider";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const types = [...new Set(projectData.map((p) => p.type))];
  const tabs = ["All", ...types];

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="bg-zinc-50">
      {/* Senior Project */}
      <GraduationProjects />

      {/* Academic Projects */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="text-center mb-8 relative">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-800 mb-4 uppercase">
            My Academic Projects
          </h2>
          <Divider />
        </div>

        {/* Tab filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center bg-white rounded-full p-1.5 shadow-sm border border-gray-200 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
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
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    {project.github.length > 0 ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                        style={{ color: '#64748b' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#1e293b')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                      >
                        <FaGithub className="text-sm" />
                        Source Code
                      </a>
                    ) : typeof project.ref === "string" ? (
                      <a
                        href={project.ref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                        style={{ color: '#64748b' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#1e293b')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                      >
                        <FaFigma className="text-sm" />
                        Figma
                      </a>
                    ) : (
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                        <FaCalendarAlt />
                        {project.year}
                      </div>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      Details
                      <FaArrowRight className="text-[10px]" />
                    </Link>
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
