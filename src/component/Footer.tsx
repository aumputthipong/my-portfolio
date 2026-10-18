import React from "react";

// Name and copyright only: the contact channels live in the Contact section right above
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-ink text-canvas/90 dark:bg-surface dark:text-body dark:border-t dark:border-line py-4 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-3 text-center sm:text-left">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
          Putthipong Chobngam
        </p>
        <p className="text-xs text-canvas/70 dark:text-muted">
          © {year} Putthipong Chobngam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
