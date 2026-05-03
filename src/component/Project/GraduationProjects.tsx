"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

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
  year: 2025,
};

const GraduationProjects = () => {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <div
        className="group border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white cursor-pointer"
        onClick={() => router.push("/projects/senior")}
      >
        <div className="flex flex-col lg:flex-row">

          {/* Image side — gradient bg with diagonal stripe overlay */}
          <div className="relative lg:w-1/2 h-72 lg:h-auto overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center p-4 lg:p-5 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(148,163,184,0.12) 14px, rgba(148,163,184,0.12) 15px)`,
              }}
            />
            <img
              src={seniorProject.image}
              alt={seniorProject.title}
              className="relative z-10 w-full h-full object-cover rounded-xl shadow-xl transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-4 py-2 rounded-lg shadow flex items-center gap-1.5">
                View Full Project
                <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            {/* Mobile title overlay */}
            <div className="absolute bottom-5 left-5 right-5 lg:hidden z-20">
              <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full mb-2 tracking-widest uppercase">
                Senior Project · 2025
              </span>
            </div>
          </div>

          {/* Info side */}
          <div className="lg:w-1/2 p-5 lg:p-6 flex flex-col gap-3">

            {/* Badge + year (desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-[0.2em] uppercase">
                Senior Project
              </span>
              <span className="text-xs font-mono text-gray-400">{seniorProject.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-extrabold text-gray-900 leading-tight">
              {seniorProject.title}
            </h3>

            {/* Tagline (full project name) */}
            <p className="text-xs italic leading-snug" style={{ color: '#9ca3af' }}>
              {seniorProject.full_project_name}
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
              {seniorProject.description}
            </p>

            {/* Tech chips (mono style) */}
            <div className="flex flex-wrap gap-1">
              {seniorProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 hover:border-slate-300 hover:shadow-sm text-[11px] font-mono px-2.5 py-1 rounded-md transition-all duration-200"
                  style={{ color: '#374151' }}
                >
                  <img src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-3">
              <Link
                href="/projects/senior"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group/btn"
              >
                View Details
                <FaArrowRight className="text-xs group-hover/btn:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduationProjects;
