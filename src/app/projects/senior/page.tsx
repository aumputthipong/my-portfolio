"use client";

import type { LightboxItem } from "@/component/UI/Lightbox";
import ProjectInfo from "@/component/Project/ProjectInfo";
import ProjectGallery from "@/component/Project/ProjectGallery";
import MoreProjects from "@/component/Project/MoreProjects";
import ProjectHighlights from "@/component/Project/ProjectHighlights";
import { seniorProject as senior, seniorVideos as videos } from "@/data/SeniorProjectData";
import { projectData } from "@/data/ProjectsData";

// Videos lead: they show the platform in use, which screenshots can't.
const mediaItems: LightboxItem[] = [
  ...videos.map((v) => ({ type: "video" as const, id: v.id, name: v.name })),
  ...senior.images.map((src) => ({ type: "image" as const, src })),
];

export default function SeniorProjectPage() {
  const otherProjects = projectData.slice(0, 3);

  return (
    <div className="min-h-screen bg-canvas">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-12 sm:pb-16 space-y-8 sm:space-y-10">

        <div className="grid gap-6 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_23rem] lg:gap-8 xl:gap-10">
          {/* Small screens read title → details → media; from lg the media moves to the
              left so the eye lands on it first, then reads across to facts and actions */}
          <ProjectInfo
            category="Senior project"
            title={senior.title}
            subtitle={senior.full_project_name}
            description={senior.shortDescription}
            facts={[
              { label: "Platform", value: "Web app" },
              { label: "Year", value: senior.year },
              { label: "Role", value: "Co-developer" },
              { label: "Used by", value: "Siriraj Hospital" },
            ]}
            tech={senior.tech}
            github="https://github.com/aumputthipong/AI-garden-System"
          />

          <div className="min-w-0 lg:order-first">
            <ProjectGallery items={mediaItems} layout="web" />
          </div>
        </div>

        <ProjectHighlights items={senior.responsibility} />

        <MoreProjects projects={otherProjects} />
      </div>
    </div>
  );
}
