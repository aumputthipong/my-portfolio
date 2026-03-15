import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaExternalLinkAlt } from "react-icons/fa";

import { GoProjectRoadmap } from "react-icons/go";
import { AiFillProject } from "react-icons/ai";
import { BiLayout } from "react-icons/bi";
import VideoProject from "./VideoProject";
import { LuCodeXml } from "react-icons/lu";
import Divider from "../UI/Divider";

const GraduationProjects = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const projects = [
    {
      id: 1,
      full_project_name:
        "Web Application Platform to Support Image and Video Analysis with AI in a Microservice Model",
      title: "AI Garden System",
      description: `Full-stack web application 
      platform that enables users to analyze images and videos using AI computer vision services
       integrated into the platform, supporting object detection, regression, classification, 
       and image segmentation.`,
      responsibility: [
        `Designed a user-friendly UI to support non-technical users, including medical professors and medical students, to easily access AI computer vision services.
`,
        "Implemented existing AI computer vision models as microservice-based AI services that the web platform can call and use.",
        `Developed a web platform that supports adding and integrating new AI services, for AI developers.`,
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
        // "/projects/senior/ai-web (17).png",
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

        // "/projects/senior/ai-web (11).png",
        "/projects/senior/ai-web (21).png",
        "/projects/senior/ai-web (23).png",
        "/projects/senior/ai-web (22).png",
        "/projects/senior/ai-web.png",
        "/projects/senior/ai-web (9).png",
        "/projects/senior/ai-web (13).png",
      ],
      github: "https://github.com/aumputthipong/AI-garden-System.git",
      layout: "web",
      haveImage: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 lg:px-8 ">
      {/* Header Section */}
      <div className="text-center mb-8 relative ">
        {/* Title with Gradient */}
        <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-800 mb-4 uppercase">
          My Senior Project
        </h2>
        {/*Divider */}
        <Divider />
      </div>

      {/* Projects Card */}
      <div className="grid gap-8 ">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white border  border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            {/* Card Header */}
            <div className="px-10 py-6 bg-zinc-800 flex items-center gap-5">
              <LuCodeXml className="text-white/70 w-6 h-6 flex-shrink-0" />
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col gap-0.5">
                <p className="text-white text-2xl font-bold tracking-tight">
                  {project.full_project_name}
                </p>
                <span className="text-white/40 text-sm font-medium tracking-widest uppercase">
                  AI Garden System
                </span>
              </div>
            </div>
            {/* Card Body */}
            <div className=" p-8 m-4 rounded-2xl border border-gray-200 group">
              <div className="flex flex-col lg:flex-row items-start gap-10 ">
                {/* Left: Image + Tech */}
                <div className="w-full lg:w-1/2 mt-12">
                  <div className="relative w-full group">
                    <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          onClick={() => setOpenProject(index)}
                          className="cursor-pointer bg-white text-gray-900 px-6 py-3 rounded-full shadow-md text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-200"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Info */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h4 className="text-3xl font-bold text-indigo-700 mb-2 uppercase">
                      {project.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-m">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-indigo-700 mb-3 uppercase tracking-wide">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2 text-gray-500 text-m">
                      {Array.isArray(project.responsibility) ? (
                        project.responsibility.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))
                      ) : (
                        <p>{project.responsibility}</p>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Tech Badges */}
              <div className="pt-2 mx-2">
                <h4 className="text-2xl font-bold text-indigo-700 mb-3 uppercase tracking-wide ">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center bg-white text-indigo-600 gap-1.5 text-s px-3 py-1.5 rounded-full border border-indigo-200 font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 "
                    >
                      <img src={tech.icon} className="h-4 w-4 object-contain" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <VideoProject />
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
