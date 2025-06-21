"use client";
import React from "react";
import Skills from "./AboutMeComponent/Skills";
import Education from "./AboutMeComponent/Education";
import Introduction from "./AboutMeComponent/Introduction";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="sticky top-24 w-full md:w-2/4 md:h-fit self-start">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Get to know more about my background and expertise
            </p>
            <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
                <span className="w-2 h-2 bg-blue-700 rounded-full inline-block"></span>
                <a href="#about-me" className="hover:underline">
                  Introduction
                </a>
              </li>
              <li className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
                <span className="w-2 h-2 bg-blue-700 rounded-full inline-block"></span>
                <a href="#about-me-skills" className="hover:underline">
                  Skills
                </a>
              </li>
              <li className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
                <span className="w-2 h-2 bg-blue-700 rounded-full inline-block"></span>
                <a href="#about-me-education" className="hover:underline">
                  Education
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-6 relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-1 bg-blue-700 rounded-full"
              style={{ zIndex: 0 }}
            />
                
            <div className="flex items-center gap-3 col-span-full mb-4">
              <span className="w-4 h-4 bg-blue-700 rounded-full inline-block"></span>
              <h2 className="text-4xl font-bold text-gray-800">Introduction</h2>
            </div>
            <Introduction />

            <div className="flex items-center gap-3 col-span-full mb-4">
              <span className="w-4 h-4 bg-blue-700 rounded-full inline-block"></span>
              <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
            </div>
            <Skills />
            
            <div className="flex  items-center gap-3 col-span-full mb-4">
              <span className="w-4 h-4 bg-blue-700 rounded-full inline-block"></span>
              <h2 className="text-4xl font-bold text-gray-800">Education</h2>
            </div>
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
