"use client"

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // สร้าง Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // อัพเดต active section เมื่อ section เข้ามาใน viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // กำหนดว่าจะเริ่มตรวจสอบเมื่อ section อยู่ที่ตรงกลางของหน้าจอ
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      }
    );

    // หา sections ทั้งหมดที่ต้องการ observe
    const sections = document.querySelectorAll("#home, #about-me, #projects, #contact");
    sections.forEach((section) => observer.observe(section));

    // Cleanup function
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // ฟังก์ชันสำหรับ scroll ไปยัง section
  const scrollToSection = (sectionId:string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // ฟังก์ชันสำหรับเช็คว่า section นั้นเป็น active หรือไม่
  const isActive = (sectionId:string) => activeSection === sectionId;

  return (
    <nav
      className={`fixed my-2 top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        "translate-y-0 opacity-100" 
      }`}
    >
      <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1 shadow-2xl">
        {/* Home Button */}
        <button
          onClick={() => scrollToSection("home")}
          className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            isActive("home")
              ? "text-white bg-black/80 shadow-lg"
              : "text-black/80 hover:text-black hover:bg-black/10"
          }`}
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

        {/* About Button */}
        <button 
          onClick={() => scrollToSection("about-me")}
          className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            isActive("about-me")
              ? "text-white bg-black/80 shadow-lg"
              : "text-black/80 hover:text-black hover:bg-black/10"
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
              clipRule="evenodd"
            />
          </svg>
          About
        </button>

        {/* Projects Button */}
        <button 
          onClick={() => scrollToSection("projects")}
          className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            isActive("projects")
              ? "text-white bg-black/80 shadow-lg"
              : "text-black/80 hover:text-black hover:bg-black/10"
          }`}
        >
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

        {/* Contact Button */}
        <button 
          onClick={() => scrollToSection("contact")}
          className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            isActive("contact")
              ? "text-white bg-black/80 shadow-lg"
              : "text-black/80 hover:text-black hover:bg-black/10"
          }`}
        >
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
          </svg>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;