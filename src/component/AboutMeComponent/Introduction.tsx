import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { techSkills } from "../../data/TechSkillsData";
import TechBadge from "../UI/TechBadge";

const Introduction = () => {
  const total = techSkills.reduce((sum, s) => sum + s.skills.length, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

      {/* ── LEFT: Tech stack ── */}
      <div className="lg:col-span-3" id="skills">
        <div className="flex items-baseline justify-between mb-5">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">
            Tech stack
          </h3>
          <span className="text-[11px] font-mono text-gray-400">
            {total} technologies
          </span>
        </div>

        {techSkills.map((section) => (
          <div
            key={section.category}
            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-6 border-t border-gray-200 first:border-t-0"
          >
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <p className="text-sm font-semibold text-slate-900">
                {section.category.replace("Programming ", "").replace(" Development", "")}
              </p>
              <span className="text-[11px] font-mono text-gray-400">
                {String(section.skills.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <TechBadge key={skill.label} tech={{ name: skill.label, icon: skill.icon }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── RIGHT: About me + Education ── */}
      <div className="lg:col-span-2 lg:border-l lg:border-gray-200 lg:pl-8 space-y-8">

        {/* About me */}
        <div id="about">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
            About me
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            A highly motivated Software Engineering graduate from King Mongkut&apos;s
            Institute of Technology Ladkrabang (KMITL) with a strong focus on full-stack
            development. I have hands-on experience building projects using TypeScript,
            React, Next.js, NestJS, and Go. I am eager to keep learning, improve my coding
            practices, and apply software engineering best practices to problem-solving and
            project collaboration.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm font-medium">
            <a
              href="https://github.com/aumputthipong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors"
            >
              <FaGithub className="text-base" /> GitHub
            </a>
            <span className="w-px h-4 bg-gray-200" />
            <a
              href="https://www.linkedin.com/in/putthipong-chobngam/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors"
            >
              <FaLinkedin className="text-base" /> LinkedIn
            </a>
            <span className="w-px h-4 bg-gray-200" />
            <a
              href="mailto:putthipong.chb@gmail.com"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors"
            >
              <FaEnvelope className="text-base" /> Email
            </a>
          </div>
        </div>

        {/* Education */}
        <div id="education" className="pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 mb-5">
            Education
          </h3>

          <div className="flex items-center gap-4">
          <img
            src="/image/KMITL_Logo.png"
            alt="KMITL"
            className="h-14 sm:h-16 w-auto object-contain flex-shrink-0"
          />
          <div className="min-w-0">
            <h4 className="font-display text-base sm:text-lg font-semibold text-slate-900 leading-snug">
              B.Sc. Information Technology
            </h4>
            <p className="text-sm text-gray-500 mt-0.5">
              KMITL · Software Engineering
            </p>
            <p className="text-xs text-gray-400 mt-1.5">
              Graduated 2025 · GPAX 3.11 / 4.00
            </p>
          </div>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Introduction;
