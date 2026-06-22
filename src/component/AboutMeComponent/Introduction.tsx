import { techSkills } from "../../data/TechSkillsData";
import TechBadge from "../UI/TechBadge";

const Introduction = () => {
  const total = techSkills.reduce((sum, s) => sum + s.skills.length, 0);

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">

      {/* Card header */}
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <p className="text-[11px] sm:text-xs font-mono text-gray-400 flex items-center gap-2">
          <span className="w-5 sm:w-6 h-px bg-slate-900" />
          <span className="text-gray-400">{"//"}</span> TECH STACK
        </p>
        <p className="text-[11px] sm:text-xs font-mono text-gray-400">{total} technologies</p>
      </div>

      {/* Tech stack rows + Education card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

        {/* LEFT: Tech stack rows */}
        <div className="md:col-span-2 lg:col-span-2 space-y-1" id="skills">
          {techSkills.map((section, idx) => (
            <div
              key={section.category}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-2.5 ${
                idx !== techSkills.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="sm:w-40 lg:w-44 flex items-center gap-2 flex-shrink-0">
                <p className="text-[11px] sm:text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {section.category.replace("Programming ", "").replace("Development", "")}
                </p>
                <span className="text-[10px] font-mono text-gray-400">
                  {String(section.skills.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                {section.skills.map((skill) => (
                  <TechBadge key={skill.label} tech={{ name: skill.label, icon: skill.icon }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Education card (matching Hero ID card style) */}
        <div
          id="education"
          className="md:col-span-2 lg:col-span-1 bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-3 space-y-3 self-start max-w-sm mx-auto md:mx-0 w-full"
        >
          {/* Card header */}
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-gray-400 tracking-wider">EDUCATION</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
            </div>
          </div>

          {/* Logo area */}
          <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 22px, rgba(0,0,0,0.04) 22px 23px)`,
              }}
            />
            <img
              src="/image/KMITL_Logo.png"
              alt="KMITL"
              className="relative z-10 h-24 sm:h-28 w-auto object-contain"
            />

          </div>

          {/* Title + subtitle */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 leading-tight">
              B.Sc. Information Technology
            </h4>
            <p className="text-[11px] text-gray-500 mt-0.5">
              KMITL · Software Engineering
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-1 pt-2 border-t border-gray-100">
            <div>
              <p className="text-base font-extrabold text-gray-900 leading-none">2025</p>
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
                Graduated
              </p>
            </div>
            <div>
              <p className="text-base font-extrabold text-gray-900 leading-none">
                3.11<span className="text-gray-400 text-xs font-bold">/4.00</span>
              </p>
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
                GPAX
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Introduction;
