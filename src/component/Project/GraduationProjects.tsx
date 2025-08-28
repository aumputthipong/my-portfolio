import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaExternalLinkAlt } from "react-icons/fa";

const GraduationProjects = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const projects = [
    {
      id: 1,
      title: "AI Garden System",
      description: `Developed and designed a full-stack web application 
      platform that enables users to analyze images and videos using AI computer vision services
       integrated into the platform, supporting object detection, regression, classification, 
       and image segmentation.`,
      responsibility: [
        `Designed a user-friendly UI to support non-technical users, including medical professors and medical students at Siriraj Hospital, to easily access AI computer vision services.`,
        "Transformed provided AI computer vision models into microservice-based APIs using Python and FastAPI, and integrated them into the platform.",
        `Developed a platform to support the integration of new AI services for AI developers.`,
      ],
      tech: [
        "React",
        "NestJs",
        "TypeScript",
        "Tailwind",
        "PostGreSQL",
        "Docker",
      ],
      images: [
        "/projects/senior/ai-web.png",
        "/projects/senior/ai-web (9).png",
        "/projects/senior/ai-web (3).png",
        "/projects/senior/ai-web (17).png",
        "/projects/senior/ai-web (2).png",
        "/projects/senior/ai-web (19).png",
        "/projects/senior/ai-web (18).png",
        "/projects/senior/ai-web (1).png",
        "/projects/senior/ai-web (20).png",
        "/projects/senior/ai-web (4).png",
        // "/projects/senior/ai-web (8).png",
        "/projects/senior/ai-web (7).png",
        "/projects/senior/ai-web (5).png",
        "/projects/senior/ai-web (6).png",
        "/projects/senior/ai-web (10).png",
        // "/projects/senior/ai-web (14).png",
        // "/projects/senior/ai-web (12).png",
        "/projects/senior/ai-web (11).png",
        "/projects/senior/ai-web (13).png",
      ],
      github: "https://github.com/aumputthipong/AI-garden-System.git",
      layout: "web",
      haveImage: true,
    },
  ];

  return (
<div className="max-w-6xl mx-auto py-20 px-4 lg:px-8">
  {/* Header Section */}
  <div className="text-center mb-16">
    <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
      My Senior Projects
    </h2>
    <div className="mx-auto w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
      Web Application Platform to Support Image and Video Analysis with AI
      in a Microservice Model
    </p>
  </div>

  {/* Projects Grid */}
  <div className="grid gap-12 group ">
    {projects.map((project, index) => (
      <div
        key={project.id}
        className=" flex flex-col lg:flex-row items-center gap-12 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
      >
  {/* Project Image */}
  <div className="w-full lg:w-1/2 h-80 relative">
    <div className="relative w-full h-full group ">
      {/* Background gradient behind the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-slate-700 dark:to-slate-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 z-0" />

      {/* Image Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl z-10">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View Button */}
        <div className=" absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => setOpenProject(index)}
            className=" cursor-pointer bg-white/95 dark:bg-slate-700 text-gray-900 dark:text-white px-6 py-3 rounded-full shadow-xl text-sm font-semibold flex items-center gap-2 hover:bg-white dark:hover:bg-slate-600 transition-all duration-200 transform hover:scale-105"
          >
            <FaExternalLinkAlt className="text-base "  />
            View Project Details
          </button>
        </div>
      </div>
    </div>
  </div>

   <div className="w-full lg:w-1/2 space-y-6">
          {/* Title */}
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            {project.title}
          </h3>

          {/* Overview */}
          <div>
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Overview
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Responsibilities
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {Array.isArray(project.responsibility) ? (
                project.responsibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))
              ) : (
                <p>{project.responsibility}</p>
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Technology
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-200 dark:border-slate-500 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>



      {openProject !== null && (
        <ProjectModal
          project={projects[openProject]}
          onClose={() => setOpenProject(null)}
        />
      )}
    </div>
  );
};

export default GraduationProjects;
