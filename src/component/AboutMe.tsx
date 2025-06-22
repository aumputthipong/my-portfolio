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
            <h2 className="text-5xl font-bold mb-4 text-gray-800 ">About Me</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Get to know more about my background and expertise
            </p>
            <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
                <span className="w-2 h-2 bg-blue-700 rounded-full inline-block"></span>
                <a href="#introduction" className="hover:underline">
                  Introduction
                </a>
              </li>
              <li className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
                <span className="w-2 h-2 bg-blue-700 rounded-full inline-block"></span>
                <a href="#skills" className="hover:underline">
                  Skills
                </a>
              </li>
              <li className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
                <span className="w-2 h-2 bg-blue-700 rounded-full inline-block"></span>
                <a href="#education" className="hover:underline">
                  Education
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 pl-6 relative bg">
            
            <div className="flex col-span-full gap-6 ">
              {/* timeline */}
                <div className="relative flex flex-col items-center" style={{ width: "40px" }}>
                < div className="absolute top-0 bottom-0 w-[3px] bg-zinc-400" />
                <div className="border-3 border-zinc-400 bg-white rounded-full z-10 p-2 ">
                  <svg
                  className="w-6 h-6  text-indigo-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                  </svg>
                </div>
                </div>
              {/* content with head */}
              <div>
                <h2
                  className="text-4xl font-bold text-gray-800"
                  id="introduction"
                >
                  Introduction
                </h2>
                <Introduction />
              </div>
            </div>

              <div className="flex col-span-full gap-6 ">
              {/* timeline */}
                <div className="relative flex flex-col items-center" style={{ width: "40px" }}>
                < div className="absolute top-0 bottom-0 w-[3px] bg-zinc-400" />
                <div className="border-3 border-zinc-400 bg-white rounded-full z-10 p-2 ">
                  <svg
                  className="w-6 h-6  text-indigo-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                  </svg>
                </div>
                </div>
              {/* content with head */}
              <div className="">
                <h2
                  className="text-4xl font-bold text-gray-800"
                  id="introduction"
                >
                  Introduction
                </h2>
                <Introduction />
              </div>
            </div>


            <div className="flex items-center gap-3 col-span-full mb-4">
              <span className="w-4 h-4 bg-blue-700 rounded-full inline-block"></span>
              <h2 className="text-4xl font-bold text-gray-800" id="skills">
                Skills
              </h2>
            </div>
            <Skills />

            <div className="flex  items-center gap-3 col-span-full mb-4">
              <span className="w-4 h-4 bg-blue-700 rounded-full inline-block"></span>
              <h2 className="text-4xl font-bold text-gray-800" id="education">
                Education
              </h2>
            </div>
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
