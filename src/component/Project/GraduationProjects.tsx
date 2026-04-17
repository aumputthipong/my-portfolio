"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Divider from "../UI/Divider";

const seniorProject = {
  full_project_name:
    "Web Application Platform to Support Image and Video Analysis with AI in a Microservice Model",
  title: "AI Garden System",
  description:
    "Full-stack web application platform enabling users to analyze images and videos using AI computer vision services — supporting object detection, regression, classification, and image segmentation.",
  tech: [
    { name: "React", icon: "image/skills/framework/react.png" },
    { name: "NestJs", icon: "image/skills/framework/nestjs.png" },
    { name: "TypeScript", icon: "image/skills/programming/typescript.png" },
    { name: "Tailwind", icon: "image/skills/framework/tailwind.png" },
    { name: "PostGreSQL", icon: "image/skills/framework/Postgresql.png" },
    { name: "Docker", icon: "image/skills/tools/docker.png" },
  ],
  image: "/projects/senior/ai-web (3).png",
};

const GraduationProjects = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      {/* Header */}
      <div className="text-center mb-8 relative">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-800 mb-4 uppercase">
          My Senior Project
        </h2>
        <Divider />
      </div>

      {/* Banner card */}
      <div className="group border-2 border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Image side */}
          <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
            <img
              src={seniorProject.image}
              alt={seniorProject.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            {/* Mobile-only title overlay */}
            <div className="absolute bottom-4 left-5 right-5 lg:hidden">
              <span className="inline-block bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-white/40 mb-2">
                Senior Project · 2025
              </span>
              <h3 className="text-white font-bold text-xl drop-shadow-md">
                {seniorProject.title}
              </h3>
            </div>
          </div>

          {/* Info side */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {/* Desktop title */}
              <div className="hidden lg:block">
                <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 mb-3">
                  Senior Project · 2025
                </span>
                <h3 className="text-2xl font-bold text-gray-800 leading-snug">
                  {seniorProject.title}
                </h3>
              </div>

              {/* Full project name */}
              <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-gray-200 pl-3">
                {seniorProject.full_project_name}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {seniorProject.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {seniorProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/projects/senior"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Full Project
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduationProjects;
