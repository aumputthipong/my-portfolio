import type { Metadata } from "next";
import { seniorProject } from "@/data/SeniorProjectData";

// The page is a client component, so its <title> comes from this server layout.
export const metadata: Metadata = {
  title: seniorProject.title,
  description: seniorProject.shortDescription,
};

export default function SeniorProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
