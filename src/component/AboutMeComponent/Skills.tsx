"use client";

import React from "react";
import { motion } from "framer-motion";

import { techSkills } from "../../data/TechSkillsData";
import { Card } from "@mui/material";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="  w-full max-w-4xl mx-auto shadow-xl  rounded-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-300 overflow-hidden"
    >
      <div className="flex flex-col divide-y-2 divide-gray-300">
        {techSkills.map((section) => (
          <div
            key={section.category}
            className="flex flex-col sm:flex-row items-start p-6 text-left gap-6 bg-white"
          >
            <div className="flex sm:flex-col items-center gap-3 sm:gap-0 w-full sm:w-auto">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#333333] rounded-full flex items-center justify-center text-3xl">
                {section.icon}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 sm:hidden">
                {section.category}
              </h4>
            </div>

            <div className="w-full">
              <h4 className="hidden sm:block text-2xl font-bold text-gray-800 mb-4">
                {section.category}
              </h4>
              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {section.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex flex-col items-center gap-1 border-2 border-zinc-200 rounded-[15px] p-2  w-20 sm:w-20 hover:shadow-md transition-all duration-200 group"
                  >
                    <img
                      src={skill.icon}
className="h-8 sm:h-10 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"                    />
                    <span className="text-gray-800 px-3 py-1 text-xs font-medium text-center truncate">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
