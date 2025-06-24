"use client";

import { projectData } from "@/data/ProjectsData";
import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./Project/ProjectModal";

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const [activeTab, setActiveTab] = useState("All");
  const types = [...new Set(projectData.map((project) => project.type))];
  const tabs = ["All", ...types];

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((project) => project.type === activeTab);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-slate-900 font-bold mb-4">
            Academic Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These are some of the web applications I have built.
          </p>

          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                  <span
                    className={`ml-2 text-xs ${
                      activeTab === tab ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    (
                    {tab === "All"
                      ? projectData.length
                      : projectData.filter((project) => project.type === tab)
                          .length}
                    )
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setOpenProject(index)}
                      className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 hover:bg-white transition-all duration-200 transform hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="flex-1 flex flex-col p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs text-gray-500 px-3 py-1">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                    >
                      <FaGithub className="text-base" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>
          {openProject !== null && (
            <ProjectModal
              project={projectData[openProject]}
              onClose={() => setOpenProject(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
