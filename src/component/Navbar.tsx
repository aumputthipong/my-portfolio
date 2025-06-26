"use client"

import React, { useEffect, useState } from "react";

const Navbar = () => {
   
  return (
    <nav
      className={`fixed my-2 top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        "translate-y-0 opacity-100" 
      }`}
    >
      {" "}
      <div className="flex items-center space-x-2sm   bg-white/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1 shadow-2xl">
        {/* Title */}

        <button
          onClick={() => document.getElementById("home")?.scrollIntoView()}
          className=" cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full  transition-all duration-300 text-black/80 hover:text-black hover:bg-black/10 "
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
              clipRule="evenodd"
            />
          </svg>
          Home
        </button>
        <button 
          onClick={() => document.getElementById("about-me")?.scrollIntoView()}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-black/80 hover:text-black hover:bg-black/10">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
              clipRule="evenodd"
            />
          </svg>
          About
        </button>

        {/* Projects */}
        <button 
          onClick={() => document.getElementById("projects")?.scrollIntoView()}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-black/80 hover:text-black hover:bg-black/10">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
          </svg>
          Projects
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
