"use client";

import React from "react";

import { techSkills } from "./TechSkillsData";
import { Card } from "@mui/material";
const Skills = () => {

  return (
    <>
      {techSkills.map((section) => (
        <Card
          key={section.category}
          className="flex items-start border border-gray-200 rounded-lg shadow-sm p-6 text-left gap-6"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl">
            🛠️
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              {section.category}
            </h4>
            <div className="flex flex-wrap gap-4">
              {section.skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-1 border-2 border-zinc-200 rounded-[15px] p-2 w-20"
                >
                  <img src={skill.icon} className="h-8"/>
                  <div className="text-gray-800 px-3 py-1 text-xs font-medium text-center truncate">
                    {skill.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}

export default Skills
