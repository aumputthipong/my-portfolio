"use client";

import { motion } from "framer-motion";
import { techSkills } from "../../data/TechSkillsData";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border-2 border-gray-200 rounded-xl shadow-md p-5 space-y-3"
    >
      {techSkills.map((section) => (
        <div
          key={section.category}
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 py-1.5 border-b border-gray-100 last:border-0"
        >
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest sm:w-40 flex-shrink-0">
            {section.category}
          </p>
          <div className="flex flex-wrap gap-1.5 flex-1">
            {section.skills.map((skill) => (
              <span
                key={skill.label}
                className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 hover:bg-white hover:border-slate-300 hover:shadow-sm text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-200"
                style={{ color: '#4b5563' }}
              >
                <img src={skill.icon} alt={skill.label} className="h-3.5 w-3.5 object-contain" />
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
