"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-10 px-4"
    >
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

          {/* ── LEFT ── */}
          <div className="flex-1 w-full space-y-5">

            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-gray-600">
                Available for work · Bangkok GMT+7
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Hello, I&apos;m
              </h1>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mt-1">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Putthipong
                </span>
                <span className="text-blue-600">.</span>
              </h1>
            </div>

            {/* Role with code icon + typing */}
            <div className="flex items-center gap-2.5">
              <HiCode className="text-blue-500 text-2xl flex-shrink-0" />
              <TypeAnimation
                sequence={[
                  "Full-stack Engineer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Web Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                className="text-xl lg:text-2xl font-semibold text-slate-700"
              />
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed max-w-xl" style={{ color: '#4b5563' }}>
              Passionate, self-motivated developer focused on software engineering and
              full-stack web — building clean, useful interfaces. Always learning,
              always shipping.
            </p>

            {/* Info row (icons + text) */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ color: '#4b5563' }}>
              <span className="inline-flex items-center gap-1.5">
                <MdLocationOn className="text-red-500 text-base" />
                Bangkok, Thailand
              </span>
              <a
                href="mailto:putthipong.chb@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
              >
                <MdEmail className="text-blue-500 text-base" />
                putthipong.chb@gmail.com
              </a>
              <span className="inline-flex items-center gap-1.5">
                <FaGraduationCap className="text-slate-500 text-base" />
                B.Sc. IT, KMITL · GPAX 3.11
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                View My Work
                <FaArrowRight className="text-xs" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
              >
                <FaEnvelope className="text-sm" />
                Contact Me
              </button>
            </div>

            {/* Scroll hint */}
            <div className="hidden lg:flex items-center gap-3 pt-4">
              <div className="w-10 h-px bg-gray-300" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* ── RIGHT: ID card (compact) ── */}
          <div className="w-full max-w-[260px] flex-shrink-0">
            <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-3 space-y-3">

              {/* Card header */}
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-gray-400 tracking-wider">ID_001</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                </div>
              </div>

              {/* Photo area — closer to original ~220px */}
              <div className="relative h-56 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50 border border-gray-100">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(148,163,184,0.12) 14px, rgba(148,163,184,0.12) 15px)`,
                  }}
                />
                <img
                  src="image/my_pic2.JPG"
                  alt="Putthipong Chobngam"
                  className="relative z-10 w-full h-full object-cover object-top"
                />

                {/* Online badge */}
                <div className="absolute top-2 right-2 z-20 inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm border border-gray-200 px-2 py-0.5 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-[10px] font-semibold text-gray-700">Online</span>
                </div>
              </div>

              {/* Name + role */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  Putthipong Chobngam <span className="text-gray-400 font-semibold">(AUM)</span>
                </h3>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Front-end / Full-stack Developer
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-1 pt-2 border-t border-gray-100">
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none">8+</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none">3.11</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
                    GPAX
                  </p>
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-none">2025</p>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
                    Grad
                  </p>
                </div>
              </div>

              {/* Social row */}
              <div className="flex items-center gap-1.5 pt-2 border-t border-gray-100">
                <a
                  href="https://github.com/aumputthipong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1 bg-gray-50 hover:bg-gray-900 hover:text-white border border-gray-200 hover:border-gray-900 text-gray-700 text-[11px] font-semibold py-1.5 rounded-md transition-all duration-200"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/putthipong-chobngam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1 bg-gray-50 hover:bg-blue-600 hover:text-white border border-gray-200 hover:border-blue-600 text-gray-700 text-[11px] font-semibold py-1.5 rounded-md transition-all duration-200"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
