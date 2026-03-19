"use client"

import React, { useEffect, useState } from "react";


const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  type SectionId = "home" | "about-me" | "projects" | "contact";

 useEffect(() => {
   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           setActiveSection(entry.target.id);
         }
       });
     },
     { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
   );

   const sections = document.querySelectorAll(
     "#home, #about-me, #projects, #contact",
   );
   sections.forEach((section) => observer.observe(section));
   return () => sections.forEach((section) => observer.unobserve(section));
 }, []);

 const scrollToSection = (sectionId: SectionId) => {
   document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
 };

 const isActive = (sectionId: SectionId) => activeSection === sectionId;


    const NAV_ITEMS: { id: SectionId; label: string; icon: React.ReactNode }[] = [
    {
      id: "home",
      label: "Home",
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "about-me",
      label: "About",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed my-2 top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 translate-y-0 opacity-100">
      <div className="flex items-center bg-white/40 backdrop-blur-xl border border-white/10 rounded-full px-2 sm:px-4 py-1 shadow-2xl gap-1 sm:gap-2">
        
        {/* Brand — ซ่อนบนมือถือ */}
        <div className="hidden sm:flex items-center">
          <span className="text-sm font-semibold text-black/80 px-3 py-2 tracking-wide whitespace-nowrap">
            Putthipong<span className="font-light text-black/50">.portfolio</span>
          </span>
          <div className="w-px h-5 bg-black/10 mx-2" />
        </div>

        {/* Nav Buttons */}
        {NAV_ITEMS.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`cursor-pointer flex items-center gap-1.5 rounded-full transition-all duration-300
              px-3 py-2 sm:px-4 sm:py-2
              ${isActive(id)
                ? "text-white bg-black/80 shadow-lg"
                : "text-black/80 hover:text-black hover:bg-black/10"
              }`}
            aria-label={label}
          >
            {icon}
            {/* ซ่อน label บนมือถือ แสดงแค่ icon */}
            <span className="hidden sm:inline text-sm">{label}</span>
          </button>
        ))}

      </div>
    </nav>
  );
};

export default Navbar;