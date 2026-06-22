"use client";

import { projectData, type Project } from "@/data/ProjectsData";
import { seniorProject } from "@/data/SeniorProjectData";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaGithub, FaFigma } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ProjectShowcase from "./Project/ProjectShowcase";
import SectionHeader from "./UI/SectionHeader";
import TechBadge from "./UI/TechBadge";

const seniorAsProject: Project & { id: string | number; href: string } = {
  id: "senior" as unknown as number,
  title: seniorProject.title,
  type: "Software Development",
  description: seniorProject.shortDescription,
  tech: seniorProject.tech,
  ref: false,
  image: seniorProject.image,
  year: seniorProject.year,
  images: seniorProject.images,
  haveImage: true,
  layout: "web",
  href: "/projects/senior",
  github: "https://github.com/aumputthipong/AI-garden-System",
};

const allProjects: Array<Project & { href?: string }> = [
  seniorAsProject,
  ...projectData,
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const router = useRouter();
  const types = [...new Set(allProjects.map((p) => p.type))];
  const tabs = ["All", ...types];

  const filteredProjects =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="bg-white">
      <div className="max-w-6xl mx-auto pt-10 sm:pt-12 px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Projects" />
      </div>

      {/* Highlight showcase carousel: graduated + personal */}
      <ProjectShowcase />

      {/* Academic Projects */}
      <div className="max-w-6xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">

        {/* Tab filter */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="flex flex-wrap justify-center bg-white rounded-full p-1 shadow-sm border border-gray-200 gap-1 max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium rounded-full transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-accent text-white shadow-md"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {tab}
                <span className={`ml-1.5 text-[11px] sm:text-xs ${activeTab === tab ? "text-white/60" : "text-gray-400"}`}>
                  ({tab === "All" ? allProjects.length : allProjects.filter((p) => p.type === tab).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="group cursor-pointer"
              onClick={() => router.push(project.href ?? `/projects/${project.id}`)}
            >
              <div className="h-full flex flex-col rounded-2xl p-3 border border-transparent transition-all duration-300 group-hover:bg-gray-50 group-hover:border-gray-200 group-hover:shadow-sm">

                {/* Banner image */}
                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden rounded-xl bg-gray-900 flex-shrink-0">
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

                {/* Card body */}
                <div className="flex-1 flex flex-col pt-4">
                  <h3 className="font-display font-semibold text-gray-900 text-[15px] sm:text-base leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: '#6b7280' }}>
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <TechBadge key={i} tech={tech} />
                    ))}
                  </div>

                  {/* Category tag */}
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200" style={{ color: '#6b7280' }}>
                      {project.type}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto gap-2 flex-wrap">

                    {/* Left: external link */}
                    <div className="flex items-center min-w-0">
                      {project.github.length > 0 ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-md transition-all duration-200"
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
                          className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-md transition-all duration-200"
                          style={{ color: '#374151' }}
                        >
                          <FaFigma />
                          Figma
                        </a>
                      ) : null}
                    </div>

                    {/* Right: year */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[11px] sm:text-xs font-medium text-gray-400">
                        {project.year}
                      </span>
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
