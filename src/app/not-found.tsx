import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Page not found",
};

// Shown for unknown routes and for project ids that don't exist (/projects/99),
// so a broken or outdated link still leads back to the work.
export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-xl">
          <h1 className="font-display font-semibold text-ink text-4xl sm:text-5xl leading-[1.05] tracking-[-0.01em] text-balance">
            This page doesn&apos;t exist<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-body text-pretty">
            The link may be mistyped, or the project it pointed to has moved. Everything
            I&apos;ve built is still on the home page.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-2xl bg-ink text-canvas text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              See the projects
              <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center h-11 px-6 rounded-2xl border border-line bg-canvas text-body text-sm font-semibold transition-colors hover:text-ink hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
