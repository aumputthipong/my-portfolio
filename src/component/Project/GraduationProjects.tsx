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
};

const GraduationProjects = () => {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto px-4 pb-14">
      <div
        className="group border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white cursor-pointer"
        onClick={() => router.push("/projects/senior")}
      >
        <div className="flex flex-col lg:flex-row min-h-[360px]">

          {/* Image side — light bg with floating screenshot */}
          <div className="relative lg:w-[55%] h-72 lg:h-auto bg-slate-100 flex items-center justify-center overflow-hidden p-5 lg:p-8">
            <img
              src={seniorProject.image}
              alt={seniorProject.title}
              className="w-full h-full object-cover rounded-xl shadow-xl transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none rounded-xl">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-4 py-2 rounded-lg shadow flex items-center gap-1.5">
                View Full Project
                <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            {/* Mobile title overlay */}
            <div className="absolute bottom-5 left-5 right-5 lg:hidden">
              <span className="inline-block bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-white/40 mb-2">
                Senior Project · 2025
              </span>
              <h3 className="text-white font-bold text-xl drop-shadow-md">
                {seniorProject.title}
              </h3>
            </div>
          </div>

          {/* Info side */}
          <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-center gap-5">

            {/* Badge + year + title (desktop) */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                  Senior Project
                </span>
                <span className="text-xs text-gray-400 font-medium">· 2025</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 leading-snug">
                {seniorProject.title}
              </h3>
            </div>

            {/* Full project name */}
            <p className="text-xs leading-relaxed italic border-l-2 border-gray-200 pl-3" style={{ color: '#9ca3af' }}>
              {seniorProject.full_project_name}
            </p>

            <div className="h-px bg-gray-100 my-1" />

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
              {seniorProject.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {seniorProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 hover:bg-white hover:border-slate-300 hover:shadow-sm text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200"
                  style={{ color: '#4b5563' }}
                >
                  <img src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-1 flex justify-end">
              <Link
                href="/projects/senior"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
              >
                View Full Project
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
