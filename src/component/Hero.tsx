"use client";

import { FaArrowDown, FaEnvelope, FaRegFilePdf } from "react-icons/fa";
import { contacts, RESUME_HREF } from "@/data/ContactData";
import { projectData } from "@/data/ProjectsData";
import { seniorProject } from "@/data/SeniorProjectData";
import { FEATURED_PROJECT_IDS } from "./Project/ProjectShowcase";

const email = contacts.find((c) => c.label === "Email");
const lead = projectData.find((p) => p.id === FEATURED_PROJECT_IDS[0]);

const outlineButton =
  "inline-flex items-center gap-2 h-11 px-5 rounded-md border-2 border-ink/80 text-ink text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 lg:pt-24"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] items-center gap-14 lg:gap-12">
        {/* ── LEFT: who and what ── */}
        <div>
          <span aria-hidden className="block h-1 w-16 rounded-full bg-accent mb-6" />
          <h1 className="font-display font-bold text-ink text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-[0.04em]">
            Putthipong Chobngam
          </h1>
          <p className="mt-4 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-muted">
            Full-stack developer &amp; software engineer
          </p>

          <p className="mt-6 text-base leading-relaxed max-w-lg text-body">
            I&apos;m a motivated Information Technology graduate from KMITL
            with a strong focus on full-stack development, with hands-on
            experience across the full development process, from requirements
            analysis and solution design to development, testing, and
            deployment. Eager to keep learning and improving as part of a team.
          </p>

          {/* The work first, then a direct line, then the paper version */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-accent text-on-accent text-xs font-bold uppercase tracking-[0.18em] shadow-sm transition-[filter,transform] hover:brightness-105 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              See the work
              <FaArrowDown className="size-3" aria-hidden />
            </a>
            {email && (
              <a href={email.href} className={outlineButton}>
                <FaEnvelope className="size-3.5" aria-hidden />
                Email me
              </a>
            )}
            <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className={outlineButton}>
              <FaRegFilePdf className="size-3.5" aria-hidden />
              Resume
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
          </div>
        </div>

        {/* ── RIGHT: the two featured systems, as they look ── */}
        {lead && (
          <div aria-hidden className="relative mx-auto w-full max-w-xl lg:max-w-none aspect-[5/4]">
            {/* AI Garden, set back on the right */}
            <div className="absolute right-0 top-0 w-[76%]">
              <div className="absolute inset-0 translate-x-3 -translate-y-3 sm:translate-x-4 sm:-translate-y-4 rounded-lg border-2 border-accent" />
              <img
                src={seniorProject.image}
                alt=""
                className="relative w-full aspect-[16/10] object-cover object-top rounded-lg border border-line bg-card shadow-lg dark:brightness-90"
              />
            </div>
            {/* Turtask, in front on the left */}
            <div className="absolute left-0 bottom-0 w-[76%]">
              <div className="absolute inset-0 -translate-x-3 translate-y-3 sm:-translate-x-4 sm:translate-y-4 rounded-lg bg-accent" />
              <img
                src={lead.image}
                alt=""
                className="relative w-full aspect-[16/10] object-cover object-top rounded-lg border border-line bg-card shadow-xl dark:brightness-90"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
