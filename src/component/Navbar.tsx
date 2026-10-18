"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import ThemeToggle from "@/component/UI/ThemeToggle";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();
  const isDetailPage = pathname.startsWith("/projects/");

  type SectionId = "home" | "about-me" | "projects" | "skills" | "contact";

  useEffect(() => {
    if (isDetailPage) return;
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
      "#home, #about-me, #projects, #skills, #contact",
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isDetailPage]);

  // Counts in-app page changes. The navbar lives in the root layout, so it survives
  // client navigation: past the first page, Back can use history and land the visitor
  // on the card they came from instead of the top of #projects.
  const pageViews = useRef(0);
  useEffect(() => {
    pageViews.current += 1;
  }, [pathname]);

  const goBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pageViews.current > 1) {
      e.preventDefault();
      router.back();
    }
  };

  // Real anchors, so sections can be opened in a new tab or copied. On the home page
  // the browser scrolls smoothly (html.scroll-smooth) under the navbar (scroll-padding-top).
  const sectionHref = (sectionId: SectionId) =>
    isDetailPage ? `/#${sectionId}` : `#${sectionId}`;

  const isActive = (sectionId: SectionId) =>
    !isDetailPage && activeSection === sectionId;

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
      id: "skills",
      label: "Skills",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
          <path d="m3 12 9 4.5 9-4.5" />
          <path d="m3 16.5 9 4.5 9-4.5" />
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
    <nav className="fixed my-2 top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 translate-y-0 opacity-100 max-w-[calc(100vw-1rem)]">
      <div className="flex items-center bg-canvas/40 backdrop-blur-xl border border-white/10 rounded-full px-1.5 sm:px-3 lg:px-4 py-1 shadow-2xl gap-0.5 sm:gap-1.5 lg:gap-2">
        {/* Back on small screens, where the brand block is hidden */}
        {isDetailPage && (
          <>
            <Link
              href="/#projects"
              onClick={goBack}
              aria-label="Back"
              className="md:hidden flex items-center justify-center w-9 h-9 pointer-coarse:w-11 pointer-coarse:h-11 rounded-full text-ink/80 hover:text-ink hover:bg-ink/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FaArrowLeft className="w-4 h-4" />
            </Link>
            <div className="md:hidden w-px h-5 bg-ink/10 mx-0.5 flex-shrink-0" />
          </>
        )}

        {/* Brand */}
        <div className="hidden md:flex items-center">
          {isDetailPage && (
            <Link
              href="/#projects"
              onClick={goBack}
              className="inline-flex items-center gap-1.5 rounded-full text-sm text-muted hover:text-ink px-3 py-2 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FaArrowLeft className="text-xs" />
              Back
            </Link>
          )}
          <Link href="/" className="font-display text-base font-semibold text-ink/80 px-3 py-2 tracking-wide whitespace-nowrap hover:text-ink transition-colors">
            Putthipong
            <span className="font-normal text-muted">.portfolio</span>
          </Link>
          <div className="w-px h-5 bg-ink/10 mx-2" />
        </div>

        {/* Nav Buttons */}
        {NAV_ITEMS.map(({ id, label, icon }) => (
          <Link
            key={id}
            href={sectionHref(id)}
            aria-current={isActive(id) ? "location" : undefined}
            className={`flex items-center gap-1.5 rounded-full transition-all duration-300
              px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 pointer-coarse:min-h-11
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas
              ${
                isActive(id)
                  ? "text-on-accent bg-accent shadow-lg"
                  : "text-ink/80 hover:text-ink hover:bg-ink/10"
              }`}
            aria-label={label}
          >
            {icon}
            <span className="hidden md:inline text-sm">{label}</span>
          </Link>
        ))}

        {/* Theme */}
        <div className="w-px h-5 bg-ink/10 mx-0.5 sm:mx-1 flex-shrink-0" />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
