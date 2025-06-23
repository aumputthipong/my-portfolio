"use client";
import React from "react";
import Skills from "./AboutMeComponent/Skills";
import Education from "./AboutMeComponent/Education";
import Introduction from "./AboutMeComponent/Introduction";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 px-4 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
         <div className="sticky top-24 w-full md:w-1/4 self-start space-y-6">
  {/* หัวข้อหลัก */}
  <div>
    <h2 className="text-4xl font-bold text-slate-800 mb-2">About Me</h2>
    <p className="text-gray-600 text-sm leading-relaxed">
      Get to know more about my background and expertise.
    </p>
  </div>

  {/* หัวข้อย่อย + ลิงก์ */}
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
    <h3 className="text-lg font-semibold text-slate-700 mb-4">Quick Navigation</h3>
    <ul className="space-y-3">
      {[
        { href: '#introduction', label: 'Introduction' },
        { href: '#skills', label: 'Skills' },
        { href: '#education', label: 'Education' },
      ].map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="flex items-center gap-3 text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200"
          >
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
            <span>{item.label}</span>
          </a>
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
                  className="text-4xl font-bold text-gray-800 pb-6"
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
                  className="text-4xl font-bold text-gray-800 pb-6"
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
                  className="text-4xl font-bold text-gray-800 pb-6"
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
