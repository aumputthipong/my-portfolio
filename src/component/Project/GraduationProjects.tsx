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
      <div className="text-center mb-10 relative">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-800 mb-4 uppercase">
          My Senior Project
        </h2>
        <Divider />
      </div>

      {/* Banner card */}
      <div className="group border-2 border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row min-h-[340px]">

          {/* Image side */}
          <div className="relative lg:w-[55%] h-72 lg:h-auto overflow-hidden bg-gray-900">
            <img
              src={seniorProject.image}
              alt={seniorProject.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />

            {/* Year pill */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center bg-black/50 backdrop-blur-sm text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                2025
              </span>
            </div>

            {/* Mobile title overlay */}
            <div className="absolute bottom-5 left-5 right-5 lg:hidden">
              <span className="inline-block bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-white/40 mb-2">
                Senior Project
              </span>
              <h3 className="text-white font-bold text-xl drop-shadow-md">
                {seniorProject.title}
              </h3>
            </div>
          </div>

          {/* Info side */}
          <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-4">

              {/* Badge + title (desktop) */}
              <div className="hidden lg:block space-y-2.5">
                <span className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                  Senior Project
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900 leading-snug">
                  {seniorProject.title}
                </h3>
              </div>

              {/* Full project name */}
              <p className="text-xs leading-relaxed italic border-l-2 border-gray-200 pl-3" style={{ color: '#9ca3af' }}>
                {seniorProject.full_project_name}
              </p>

              <div className="h-px bg-gray-100" />

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {seniorProject.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {seniorProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 text-xs px-3 py-1.5 rounded-full font-medium hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                    style={{ color: '#4b5563' }}
                  >
                    <img src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/projects/senior"
              className="inline-flex items-center gap-2 self-start bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
            >
              View Full Project
              <FaArrowRight className="text-xs group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduationProjects;
