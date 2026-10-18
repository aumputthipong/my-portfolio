import type { Metadata } from "next";
import { projectData } from "@/data/ProjectsData";

// The page is a client component, so its <title> comes from this server layout.
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectData.find((p) => p.id === Number(id));
  if (!project) return {};
  return { title: project.title, description: project.summary ?? project.description };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
