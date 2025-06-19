'use client'

import { Card } from '@mui/material';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiJavascript, SiTypescript,
  SiMui, SiBootstrap, SiTailwindcss, SiExpress, SiNodedotjs,
  SiNestjs, SiFastapi, SiPostgresql, SiMysql, SiMongodb
} from "react-icons/si";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';


const AboutMe = () => {


  const techSkills = [
  {
    category: "Front-End",
    skills: [
      { label: "React", icon: <SiReact className="text-blue-500" /> },
      { label: "Next", icon: <SiNextdotjs /> },
      { label: "Vue", icon: <SiVuedotjs className="text-green-500" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { label: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { label: "Material UI", icon: <SiMui className="text-indigo-500" /> },
      { label: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { label: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    ]
  },
  {
    category: "Backend",
    skills: [
      { label: "Express", icon: <SiExpress /> },
      { label: "Nodejs", icon: <SiNodedotjs className="text-green-600" /> },
      { label: "Nest", icon: <SiNestjs className="text-red-500" /> },
      { label: "FastAPI", icon: <SiFastapi className="text-blue-500" /> },
      { label: "PostgresQL", icon: <SiPostgresql className="text-blue-800" /> },
      { label: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ]
  }
];

  return (
    // Section container with padding and a unique ID for navigation
    <section id="about-me" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
        {/* Subtitle/Description */}
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Get to know more about my background and expertise
        </p>

        {/* Main content container: flexbox for left (text+skills) and right (stats) columns */}
        {/* On smaller screens, it will stack (flex-col). On medium screens and up, it will be a row (md:flex-row) */}
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left Column: About Text and Skills */}
          <div className="flex-1 text-left md:w-3/5">
            {/* About Me Paragraphs */}

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Timeline position="left">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
              </Timeline>
              {techSkills.map((section) => (
                <Card
                  key={section.category}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-left"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {section.category}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {section.skills.map((skill) => (
                      <div className="flex flex-col items-center gap-2">
                        <span key={skill.label} className="text-4xl">
                          {skill.icon}
                        </span>
                        <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium shadow-sm">
                          {skill.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Stat Cards */}
          <div className="flex-shrink-0 w-full md:w-2/5 flex flex-col gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hover:shadow-xl transition duration-300"
            >
              <Card className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-left">
                {/* Header with logos */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/image/KMITL_Logo.png"
                    alt="KMITL Logo"
                    className="h-10 w-auto"
                  />
                  <img
                    src="/image/ITKMITL_Logo.png"
                    alt="IT Logo"
                    className="h-10 w-auto"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 ml-auto">
                    Education
                  </h3>
                </div>

                {/* Timeline container */}
                <div className="relative pl-4 border-l-2 border-blue-500 ml-2">
                  {/* Education Item */}
                  <div className="mb-6 relative">
                    {/* Circle bullet */}

                    {/* Timeline content */}
                    <p className="text-gray-700 font-semibold">
                      B.Sc. in Information Technology (Software Engineering)
                    </p>
                    <p className="text-sm text-gray-600">
                      King Mongkut's Institute of Technology Ladkrabang (KMITL)
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Graduated: June 2024
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
