"use client";
import React from "react";
import Skills from "./AboutMeComponent/Skills";
import Education from "./AboutMeComponent/Education";
import Introduction from "./AboutMeComponent/Introduction";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 px-4 bg-[#FDFAF6]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="sticky top-24 w-full md:w-2/4 md:h-fit self-start">
            <h2 className="text-5xl font-bold mb-4 text-indigo-800 ">About Me</h2>
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

          <div className="grid grid-cols-1 md:grid-cols-3 pl-6 relative bg">
            <div className="flex col-span-full gap-6 ">
              {/* timeline */}
              <div
                className="relative flex flex-col items-center"
                style={{ width: "40px" }}
              >
                <div className="absolute top-0 bottom-0 w-[6px] bg-indigo-600" />
                <div className="border-3 border-indigo-400 bg-white rounded-full z-10 p-2  ">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                    />
                  </svg>
                </div>
              </div>
              {/* content with head */}
              <div className="pb-12">
                <h2
                  className="text-4xl font-bold text-gray-800 pb-6"
                  id="introduction"
                >
                  Introduction
                </h2>
                <Introduction />
              </div>
            </div>

            <div className="flex col-span-full gap-6 ">
              {/* timeline */}
              <div
                className="relative flex flex-col items-center"
                style={{ width: "40px" }}
              >
                <div className="absolute top-0 bottom-0 w-[6px] bg-indigo-600" />
                <div className="border-3 border-indigo-400 bg-white rounded-full z-10 p-2  ">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                    />
                  </svg>
                </div>
              </div>
              {/* content with head */}
              <div className="pb-12">
                <h2
                  className="text-4xl font-bold text-gray-800 pb-6"
                  id="skills"
                >
                  Skills
                </h2>
                <Skills />
              </div>
            </div>

            <div className="flex col-span-full gap-6 ">
              {/* timeline */}
              <div
                className="relative flex flex-col items-center"
                style={{ width: "40px" }}
              >
                <div className="absolute top-0 bottom-0 w-[6px] bg-indigo-600 rounded-full  " />
                <div className="border-3 border-indigo-400 bg-white rounded-full  z-10 p-2  ">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                    />
                  </svg>
                </div>
              </div>
              {/* content with head */}
              <div className="pb-12">
                <h2
                  className="text-4xl font-bold text-gray-800 pb-6"
                  id="education"
                >
                  education
                </h2>
                <Education />
              </div>
            </div>

    

     
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
