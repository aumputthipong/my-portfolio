"use client";

import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 sm:gap-10 lg:gap-16">

          {/* ── LEFT ── */}
          <div className="w-full max-w-xl space-y-4 sm:space-y-5">

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Putthipong Chobngam
              </h1>
            </div>

            {/* Role with code icon */}
            <div className="flex items-center gap-2.5">
              <HiCode className="text-slate-700 text-xl sm:text-2xl flex-shrink-0" />
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700">
                Full-stack Developer / Software Engineer
              </span>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base leading-relaxed max-w-xl" style={{ color: '#4b5563' }}>
              Passionate, self-motivated developer focused on software engineering and
              full-stack development — building clean, useful interfaces. Always learning,
              always shipping.
            </p>

            {/* Info row (icons + text) */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm" style={{ color: '#4b5563' }}>
              <span className="inline-flex items-center gap-1.5">
                <MdLocationOn className="text-slate-500 text-base" />
                Bangkok, Thailand
              </span>
              <a
                href="mailto:putthipong.chb@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors break-all"
              >
                <MdEmail className="text-slate-700 text-base flex-shrink-0" />
                putthipong.chb@gmail.com
              </a>
              <span className="inline-flex items-center gap-1.5">
                <FaGraduationCap className="text-slate-500 text-base" />
                B.Sc. IT, KMITL · 2025
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/aumputthipong"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors"
              >
                <FaGithub className="text-base" /> GitHub
              </a>
              <span className="w-px h-4 bg-gray-200" />
              <a
                href="https://www.linkedin.com/in/putthipong-chobngam/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors"
              >
                <FaLinkedin className="text-base" /> LinkedIn
              </a>
            </div>

            {/* Scroll hint */}
            <div className="hidden lg:flex items-center gap-3 pt-4">
              <div className="w-10 h-px bg-gray-300" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* ── RIGHT: clean photo with offset frame ── */}
          <div className="w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[300px] flex-shrink-0">
            <div className="relative">
              {/* offset frame — signature */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-slate-300"
                aria-hidden
              />
              {/* photo */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-100">
                <img
                  src="/image/my_pic2.JPG"
                  alt="Putthipong Chobngam"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
