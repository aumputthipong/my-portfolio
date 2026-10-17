import React from "react";
import { socialLinks } from "@/data/ContactData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-ink text-canvas/90 dark:bg-surface dark:text-body dark:border-t dark:border-line py-4 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
        {/* Name */}
        <p className="font-display text-sm sm:text-base font-semibold tracking-wide">
          Putthipong Chobngam
        </p>
        {/* Social Icons */}
        <div className="flex items-center gap-2 text-base">
          {socialLinks.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-canvas/70 hover:text-canvas dark:text-muted dark:hover:text-ink transition-colors duration-200 p-2 rounded-full hover:bg-canvas/10 dark:hover:bg-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
        {/* Copyright */}
        <p className="text-xs text-canvas/70 dark:text-muted">
          © {year} Putthipong Chobngam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
