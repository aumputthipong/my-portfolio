"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { seniorProject } from "@/data/SeniorProjectData";
import TechBadge from "../UI/TechBadge";

const GraduationProjects = () => {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
      <div
        className="group border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white cursor-pointer"
        onClick={() => router.push("/projects/senior")}
      >
        <div className="flex flex-col lg:flex-row">

          {/* Image side */}
          <div className="relative lg:w-1/2 h-56 sm:h-64 md:h-72 lg:h-auto overflow-hidden bg-slate-50 flex items-center justify-center p-3 sm:p-4 lg:p-5 border-b lg:border-b-0 lg:border-r border-gray-200">
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
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-4 py-2 rounded-lg shadow flex items-center gap-1.5">
                View Details
                <FaArrowRight className="text-[10px]" />
              </span>
            </div>

            {/* Mobile title overlay */}
            <div className="absolute bottom-4 left-4 right-4 lg:hidden z-20">
              <span className="inline-block bg-slate-100 text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full mb-2 tracking-widest uppercase">
                Senior Project · 2025
              </span>
            </div>
          </div>

          {/* Info side */}
          <div className="lg:w-1/2 p-4 sm:p-5 lg:p-6 flex flex-col gap-3">

            {/* Badge + year (desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="inline-block bg-slate-100 text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-[0.2em] uppercase">
                Senior Project
              </span>
              <span className="text-xs font-mono text-gray-400">{seniorProject.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-900 leading-tight">
              {seniorProject.title}
            </h3>

            {/* Tagline */}
            <p className="text-[11px] sm:text-xs italic leading-snug" style={{ color: '#9ca3af' }}>
              {seniorProject.full_project_name}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4b5563' }}>
              {seniorProject.shortDescription}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1">
              {seniorProject.tech.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-3">
              <Link
                href="/projects/senior"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group/btn"
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
