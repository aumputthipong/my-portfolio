import { techSkills } from "../../data/TechSkillsData";

const Introduction = () => {
  const total = techSkills.reduce((sum, s) => sum + s.skills.length, 0);

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm p-6 lg:p-8">

      {/* Card header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs font-mono text-gray-400 flex items-center gap-2">
          <span className="w-6 h-px bg-blue-500" />
          <span className="text-blue-500">//</span> TECH STACK
        </p>
        <p className="text-xs font-mono text-gray-400">{total} technologies</p>
      </div>

      {/* Tech stack rows + Education card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT: Tech stack rows */}
        <div className="lg:col-span-2 space-y-1" id="skills">
          {techSkills.map((section, idx) => (
            <div
              key={section.category}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-2.5 ${
                idx !== techSkills.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="sm:w-44 flex items-center gap-2 flex-shrink-0">
                <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {section.category.replace("Programming ", "").replace("Development", "")}
                </p>
                <span className="text-[10px] font-mono text-gray-400">
                  {String(section.skills.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 flex-1">
                {section.skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 hover:border-slate-300 hover:shadow-sm text-[11px] font-mono px-2.5 py-1 rounded-md transition-all duration-200"
                    style={{ color: '#374151' }}
                  >
                    <img src={skill.icon} alt={skill.label} className="h-3.5 w-3.5 object-contain" />
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Education card (matching Hero ID card style) */}
        <div
          id="education"
          className="lg:col-span-1 bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-3 space-y-3 self-start"
        >
          {/* Card header */}
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-gray-400 tracking-wider">EDU_001</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
            </div>
          </div>

          {/* Logo area */}
          <div className="relative h-40 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50 border border-gray-100 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(148,163,184,0.12) 14px, rgba(148,163,184,0.12) 15px)`,
              }}
            />
            <img
              src="/image/KMITL_Logo.png"
              alt="KMITL"
              className="relative z-10 h-28 w-auto object-contain"
            />

            {/* Graduated badge */}
            <div className="absolute top-2 right-2 z-20 inline-flex items-center gap-1 bg-slate-900/85 backdrop-blur-sm border border-slate-700 px-2 py-0.5 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span className="text-[10px] font-semibold text-white">Graduated</span>
            </div>
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
