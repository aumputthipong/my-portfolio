"use client";
import { techSkills } from "@/data/TechSkillsData";
import Section from "./UI/Section";
import SectionHeader from "./UI/SectionHeader";
import TechBadge from "./UI/TechBadge";

// After the projects, so the stack backs up work the visitor has already seen
const Skills = () => {
  // Unique count: Go sits under both Languages and Back-End
  const total = new Set(techSkills.flatMap((s) => s.skills.map((k) => k.label))).size;

  return (
    <Section id="skills" bg="bg-surface" className="py-16 sm:py-20">
      <SectionHeader label="Skills" index={`${total} technologies`} />

      <div>
        {techSkills.map((section) => (
          <div
            key={section.category}
            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-8 py-3 sm:py-6 border-t border-line first:border-t-0"
          >
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-ink">
                {section.category
                  .replace("Programming ", "")
                  .replace(" Development", "")}
              </h3>
              <span className="text-xs font-semibold text-muted tabular-nums">
                {String(section.skills.length).padStart(2, "0")}
              </span>
            </div>
            {/* Phones get a plain list instead of the badge wall, so Contact below
                is reached a screen sooner */}
            <p className="sm:hidden text-sm leading-relaxed text-body">
              {section.skills.map((skill) => skill.label).join(", ")}
            </p>
            <div className="hidden sm:flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <TechBadge
                  key={skill.label}
                  tech={{ name: skill.label, icon: skill.icon }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
