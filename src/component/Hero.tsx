"use client";

import { FaArrowDown, FaEnvelope, FaRegFilePdf } from "react-icons/fa";
import { contacts, RESUME_HREF } from "@/data/ContactData";

const email = contacts.find((c) => c.label === "Email");

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 sm:gap-10 lg:gap-16">
          {/* ── LEFT ── */}
          <div className="w-full max-w-xl space-y-5 sm:space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <h1 className="font-display font-semibold text-ink text-[clamp(2.25rem,11vw,4.5rem)] leading-[0.95] tracking-[-0.01em]">
                Putthipong
                <br />
                <span className="text-accent">Chobngam.</span>
              </h1>
              <p className="text-lg sm:text-xl text-body">
                Full-stack developer &amp; software engineer
              </p>
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed max-w-md text-body">
              I&apos;m a motivated Information Technology graduate from KMITL
              with a strong focus on full-stack development, with hands-on
              experience across the full development process, from requirements
              analysis and solution design to development, testing, and
              deployment. Eager to keep learning and improving as part of a team.
            </p>

            {/* Next step: the work first, then a direct line */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-2xl bg-ink text-canvas text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                See the work
                <FaArrowDown className="size-3" />
              </a>
              {email && (
                <a
                  href={email.href}
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-2xl border border-line bg-canvas text-body text-sm font-semibold transition-colors hover:text-ink hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  <FaEnvelope className="size-3.5" />
                  Email me
                </a>
              )}
              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-2xl border border-line bg-canvas text-body text-sm font-semibold transition-colors hover:text-ink hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <FaRegFilePdf className="size-3.5" aria-hidden />
                Resume
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
