"use client";

import { projectData } from "@/data/ProjectsData";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="h-full flex flex-col border-2 border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                {/* Banner image */}
                <div className="relative h-52 overflow-hidden bg-gray-900">
                  {/* Blurred bg for mobile portraits */}
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
                      project.layout === "mobile" ? "object-contain" : "object-cover group-hover:scale-110"
                    }`}
                  />
                </div>

                {/* Card body */}
                <div className="flex-1 flex flex-col p-5">
                  {/* Type badge + title */}
                  <span className="inline-block w-fit bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 mb-2">
                    {project.type}
                  </span>
                  <h3 className="font-bold text-gray-800 text-base leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tech.icon && (
                          <img src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                      <FaCalendarAlt />
                      {project.year}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                      <FaArrowRight className="text-xs" />
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
