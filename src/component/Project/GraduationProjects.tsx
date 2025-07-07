import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaExternalLinkAlt } from "react-icons/fa";

const GraduationProjects = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const projects = [
    {
      id: 1,
      title: "Web Application Platform to Support Image and Video Analysis with AI in a Microservice Model",
      description:
      `Design and Developed a full-stack web application platform that enables users to analyze images and videos using AI models integrated into the platform,
       supporting object detection, regression, classification, and image segmentation.`
        ,
        objective:["Designed user-friendly UI to support non-technical users accessing AI computer vision."
          ,`Enhanced the platform to support integration of new AI services and enable AI developers to use the platform as a bridge to end users.
`],
      tech: [
        "React",
        "NestJs",
        "TypeScript",
        "Tailwind",
        "PostGreSQL",
        "Docker",
      ],
      images: [
        "/projects/senior/ai-web (3).png",
       "/projects/senior/ai-web (17).png",
        "/projects/senior/ai-web (2).png",
        "/projects/senior/ai-web (1).png",
        "/projects/senior/ai-web (18).png",
           "/projects/senior/ai-web (19).png",
              "/projects/senior/ai-web (20).png",
        "/projects/senior/ai-web.png",
        "/projects/senior/ai-web (9).png",
        "/projects/senior/ai-web (5).png",
        "/projects/senior/ai-web (6).png",
        "/projects/senior/ai-web (7).png",
        // "/projects/senior/ai-web (4).png",
        "/projects/senior/ai-web (14).png",
        "/projects/senior/ai-web (8).png",
        // "/projects/senior/ai-web (12).png",
        "/projects/senior/ai-web (11).png",
        "/projects/senior/ai-web (10).png",
      // "/projects/senior/ai-web (13).png",
     

      ],
      github: "https://github.com/aumputthipong/AI-garden-System.git",
      layout: "web",
      haveImage: true,
    },
  ];

  return (
   <div className="max-w-6xl mx-auto  py-10   ">
  {/* Header Section */}
  <div className=" mb-12">
          <span className="text-4xl lg:text-5xl font-bold  mb-6">
      My Thesis Projects
    </span>

  </div>

  {/* Projects Grid/List */}
 
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row items-center gap-10  overflow-hidden p-6 bg-white  group"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 h-72 relative overflow-hidden rounded-xl shadow-sm">
              <div className="relative w-full h-full group">
                {/* Project Image */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setOpenProject(index)}
                    className="cursor-pointer bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 hover:bg-white transition-all duration-200 transform hover:scale-105"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    View Details
                  </button>
                </div>

           
              </div>
            </div>

            {/* Project Content */}
            <div className="w-full lg:w-1/2 ">
            
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 pb-4 border-b border-gray-100 ">
                {project.title}
              </h3>
              <p className="text-black font-semibold text-xl leading-relaxed  ">
                Overview
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
           
              {/* Buttons */}
          <div className="flex flex-col gap-2">
  <p className="text-black font-semibold text-xl leading-relaxed">
    objective
  </p>
  
  {Array.isArray(project.objective) ? (
    <ul className="text-gray-600 text-sm leading-relaxed mb-4 pl-4 space-y-2">
      {project.objective.map((item, index) => (
        <li key={index} className="list-disc marker:text-gray-400">
          {item}
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-600 text-sm leading-relaxed mb-4">
      {project.objective}
    </p>
  )}
</div>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>   

          </div>
        ))}
   

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
