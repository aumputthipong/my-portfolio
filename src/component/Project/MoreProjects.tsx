import Link from "next/link";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { projectData } from "@/data/ProjectsData";
import { seniorProject } from "@/data/SeniorProjectData";
import { contacts } from "@/data/ContactData";
import { FEATURED_PROJECT_IDS } from "./ProjectShowcase";

type Suggestion = {
  href: string;
  type: string;
  title: string;
  image: string;
  layout: "web" | "mobile";
};

const capstone: Suggestion = {
  href: "/projects/senior",
  type: "Capstone project",
  title: seniorProject.title,
  image: seniorProject.image,
  layout: "web",
};

const toSuggestion = (p: (typeof projectData)[number]): Suggestion => ({
  href: `/projects/${p.id}`,
  type: p.type,
  title: p.title,
  image: p.image,
  layout: p.layout,
});

// Featured work first (FEATURED_PROJECT_IDS, then the capstone, as on the home page), then everything
// else newest first, so a visitor finishing one project meets the strongest work
// next instead of whatever happens to follow it in the data file.
const ordered: Suggestion[] = [
  ...FEATURED_PROJECT_IDS.flatMap((id) => projectData.filter((p) => p.id === id)).map(toSuggestion),
  capstone,
  ...projectData
    .filter((p) => !FEATURED_PROJECT_IDS.includes(p.id))
    .sort((a, b) => b.year - a.year)
    .map(toSuggestion),
];

const email = contacts.find((c) => c.label === "Email");

/** The end of a project page: three more projects, then a direct way to get in touch. */
export default function MoreProjects({ currentHref }: { currentHref: string }) {
  const projects = ordered.filter((p) => p.href !== currentHref).slice(0, 3);

  return (
    <div className="pt-6 sm:pt-8 border-t border-line space-y-10">
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">More projects</h2>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            View all
            <FaArrowRight className="size-2.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((p) => (
            <Link
              key={p.href}
              href={p.href}
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
                <p className="text-xs font-mono font-medium uppercase tracking-[0.05em] text-muted truncate">{p.type}</p>
                <h3 className="font-display text-sm sm:text-base font-semibold text-ink leading-snug mt-0.5 group-hover:text-accent transition-colors line-clamp-2">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Closing line: the visitor who read this far shouldn't have to go back home to reach out */}
      {email && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg sm:text-xl font-semibold text-ink">
            Interested in working together<span className="text-accent">?</span>
          </p>
          <a
            href={email.href}
            className="inline-flex items-center gap-2 self-start sm:self-auto h-11 px-6 rounded-2xl bg-ink text-canvas text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <FaEnvelope className="size-3.5" />
            Email me
          </a>
        </div>
      )}
    </div>
  );
}
