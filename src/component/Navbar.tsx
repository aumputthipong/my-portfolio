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
    <nav className="fixed inset-x-0 top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-line/70">
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 sm:gap-3">
          {isDetailPage && (
            <Link
              href="/#projects"
              onClick={goBack}
              aria-label="Back to projects"
              className="flex items-center justify-center gap-2 h-9 pointer-coarse:h-11 px-2 md:px-3 rounded-md text-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FaArrowLeft className="size-3.5" />
              <span className="hidden md:inline text-xs font-semibold uppercase tracking-[0.15em]">Back</span>
            </Link>
          )}
          {/* Monogram: a square stamp, the site's mark */}
          <Link
            href="/"
            aria-label="Putthipong Chobngam, home"
            className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <span className="grid place-items-center size-9 rounded-md border-2 border-ink text-ink text-sm font-bold tracking-[0.08em]">
              PC
            </span>
            <span className="hidden lg:inline text-sm font-bold uppercase tracking-[0.2em] text-ink">Putthipong</span>
          </Link>
        </div>

        <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2">
          {NAV_ITEMS.map(({ id, label, icon }) => (
            <Link
              key={id}
              href={sectionHref(id)}
              aria-current={isActive(id) ? "location" : undefined}
              aria-label={label}
              className={`relative flex items-center justify-center h-10 pointer-coarse:h-11 px-2.5 md:px-3 rounded-md transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                after:absolute after:left-2.5 after:right-2.5 md:after:left-3 md:after:right-3 after:bottom-1 after:h-0.5 after:rounded-full after:transition-transform after:duration-300 after:bg-accent
                ${
                  isActive(id)
                    ? "text-ink after:scale-x-100"
                    : "text-muted hover:text-ink after:scale-x-0"
                }`}
            >
              <span className="md:hidden">{icon}</span>
              <span className="hidden md:inline text-xs font-semibold uppercase tracking-[0.18em]">{label}</span>
            </Link>
          ))}

          <div className="w-px h-5 bg-line mx-1 flex-shrink-0" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
