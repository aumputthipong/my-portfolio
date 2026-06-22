import React from "react";
import { socialLinks } from "@/data/ContactData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-slate-900 text-gray-200 py-4 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
        {/* Name */}
        <h3 className="font-display text-sm sm:text-base font-semibold tracking-wide">
          Putthipong Chobngam
        </h3>
        {/* Social Icons */}
        <div className="flex items-center gap-2 text-base">
          {socialLinks.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-slate-800"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
        {/* Copyright */}
        <p className="text-[10px] sm:text-xs text-gray-500">
          © {year} Putthipong Chobngam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
