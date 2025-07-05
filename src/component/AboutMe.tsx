"use client";
import React, { useEffect, useState } from "react";
import Skills from "./AboutMeComponent/Skills";
import Education from "./AboutMeComponent/Education";
import Introduction from "./AboutMeComponent/Introduction";
import { CastForEducation, ChevronRight, Code, CodeSharp, Home, Person, School } from "@mui/icons-material";
import { FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 px-4 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="sticky top-24 w-full md:w-1/4 self-start space-y-6">
            {/* หัวข้อหลัก */}
            <div>
              <span className="text-4xl lg:text-5xl font-bold  mb-2">
                About Me
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get to know more about my background and expertise.
              </p>
            </div>

            {/* หัวข้อย่อย + ลิงก์ */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 ">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    href: "#introduction",
                    label: "Introduction",
                    icon: <Person className="w-4 h-4" />,
                  },
                  {
                    href: "#skills",
                    label: "Skills",
                    icon: <CodeSharp className="w-4 h-4" />,
                  },
                  {
                    href: "#education",
                    label: "Education",
                    icon: <School className="w-4 h-4" />,
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      document
                        .getElementById(`${item.href.slice(1)}`) // Remove '#' from href
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <div
                      key={index}
                      className="group relative cursor-pointer rounded-xl p-4 transition-all duration-300 bg-gradient-to-r from-slate-50 via-gray-50 to-zinc-50 border-2 border-slate-200 shadow-md transform scale-[1.02]"
                    >                   
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-zinc-500 to-zinc-600 rounded-r-full shadow-lg"></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="relative p-2 rounded-lg transition-all duration-300 bg-gradient-to-br from-zinc-800 to-slate-600 shadow-lg">
                          <div className="transition-colors duration-300 text-white">
                             {item.icon}
                          </div>      
                          <div className="absolute inset-0 bg-gradient-to-br from-zinc-500 to-slate-500 rounded-lg blur-md opacity-30 -z-10"></div>
                        </div>     
                        <div className="flex-1">
                          <span className="font-semibold transition-colors duration-300 text-slate-800">
                            {item.label}
                          </span>
                        </div>         
                        <ChevronRight className="w-4 h-4 transition-all duration-300 text-zinc-600 transform translate-x-1" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 pl-6 relative bg">
            <div className="flex col-span-full gap-8 ">
              {/* timeline */}
              <div
                className="relative flex flex-col items-center"
                style={{ width: "40px" }}
              >
                <div className="absolute top-0 bottom-0 w-[4px] bg-[#333333]" />
                <div className="border-[4px] border-[#333333]  rounded-full z-10 p-1 bg-[#333333]  ">
                  <svg
                    className="w-6 h-6 text-white "
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
                  className="text-3xl lg:text-4xl font-bold text-gray-800 pb-6"
                  id="introduction"
                >
                  Introduction
                </h2>
                <Introduction />
              </div>
            </div>

            <div className="flex col-span-full gap-8 ">
              {/* timeline */}
              <div
                className="relative flex flex-col items-center"
                style={{ width: "40px" }}
              >
                <div className="absolute top-0 bottom-0 w-[4px] bg-[#333333]" />
                <div className="border-[4px] border-[#333333]  rounded-full z-10 p-1 bg-[#333333]  ">
                  <svg
                    className="w-6 h-6 text-white "
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
                  className="text-3xl lg:text-4xl font-bold text-gray-800 pb-6"
                  id="skills"
                >
                  Skills
                </h2>
                <Skills />
              </div>
            </div>

            <div className="flex col-span-full gap-8 ">
              {/* timeline */}
              <div
                className="relative flex flex-col items-center"
                style={{ width: "40px" }}
              >
                <div className="absolute top-0 bottom-0 w-[4px] bg-[#333333] rounded-full  " />
                <div className="border-[4px] border-[#333333]  rounded-full  z-10 p-1 bg-[#333333]  ">
                  <svg
                    className="w-6 h-6 text-white "
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
              <div className="col-span-full pb-12">
                <h2
                  className="text-3xl lg:text-4xl font-bold text-gray-800 pb-6"
                  id="education"
                >
                  Education
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
