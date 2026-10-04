"use client";

import { notFound, useParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { projectData } from "@/data/ProjectsData";
import ProjectInfo from "@/component/Project/ProjectInfo";
import ProjectGallerySets, { GallerySet } from "@/component/Project/ProjectGallerySets";
import MoreProjects from "@/component/Project/MoreProjects";
import ProjectHighlights from "@/component/Project/ProjectHighlights";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const projectIndex = projectData.findIndex((p) => p.id === id);
  const project = projectData[projectIndex];
  if (!project) notFound();

  const otherProjects = [
    ...projectData.slice(projectIndex + 1),
    ...projectData.slice(0, projectIndex),
  ].slice(0, 3);

  const toItems = (srcs: string[]) => srcs.map((src) => ({ type: "image" as const, src }));
  const mainLabel = project.layout === "mobile" ? "Mobile app" : "Web app";
  const companion = project.mobileCompanion;

  const gallerySets: GallerySet[] = project.haveImage
    ? [
        { label: mainLabel, layout: project.layout, items: toItems(project.images) },
        ...(companion ? [{ label: companion.label, layout: "mobile" as const, items: toItems(companion.images) }] : []),
      ].filter((set) => set.items.length > 0)
    : [];

  return (
    <div className="min-h-screen bg-canvas">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-12 sm:pb-16 space-y-8 sm:space-y-10">

        <div className="grid gap-6 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_23rem] lg:gap-8 xl:gap-10">
          {/* Small screens read title → details → media; from lg the media moves to the
              left so the eye lands on it first, then reads across to facts and actions */}
          <ProjectInfo
            category={project.type}
            title={project.title}
            description={project.description}
            facts={[
              { label: "Platform", value: companion ? `${mainLabel} + ${companion.label}` : mainLabel },
              { label: "Year", value: project.year },
            ]}
            tech={project.tech}
            demo={project.demo}
            github={project.github || undefined}
            figma={typeof project.ref === "string" ? project.ref : undefined}
          />

          <div className="min-w-0 lg:order-first">
            {gallerySets.length > 0 ? (
              <ProjectGallerySets sets={gallerySets} />
            ) : (
              <div className="aspect-video rounded-2xl bg-surface border border-dashed border-line flex flex-col items-center justify-center gap-3 text-center px-6">
                <p className="font-semibold text-body text-sm">No screenshots for this project yet</p>
                {project.github.length > 0 && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-ink hover:bg-ink/90 text-canvas text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                  >
                    <FaGithub />
                    Read the source on GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {project.highlights && <ProjectHighlights items={project.highlights} />}

        <MoreProjects projects={otherProjects} />
      </div>
    </div>
  );
}
