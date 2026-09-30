import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { Project } from "@/data/ProjectsData";

export default function MoreProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div className="pt-6 sm:pt-8 border-t border-line">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">More projects</h2>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted hover:text-accent transition-colors"
        >
          View all
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {projects.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.id}`}
            className="group flex items-center gap-3 rounded-2xl border border-line p-2.5 hover:border-accent/40 hover:bg-accent-soft/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded-xl bg-surface">
              <img
                src={p.image}
                alt=""
                className={`h-full w-full dark:brightness-90 ${p.layout === "mobile" ? "object-contain" : "object-cover object-top"}`}
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted truncate">{p.type}</p>
              <h3 className="font-display text-sm sm:text-base font-semibold text-ink leading-snug mt-0.5 group-hover:text-accent transition-colors line-clamp-2">
                {p.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
