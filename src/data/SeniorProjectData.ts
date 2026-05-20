export type SeniorVideo = {
  id: string;
  name: string;
  desc: string;
};

export const seniorVideos: SeniorVideo[] = [
  {
    id: "fFF1u_CTjZM",
    name: "AI Usage Workflow",
    desc: "Demo of how to use AI services within the platform",
  },
  {
    id: "B7YQeZ6N9No",
    name: "Adding New AI Services",
    desc: "Demo of how to integrate new AI services into the platform",
  },
];

export const seniorProject = {
  full_project_name:
    "Web Application Platform to Support Image and Video Analysis with AI in a Microservice Model",
  title: "AI Garden System",
  description:
    "Full-stack web application platform that enables users to analyze images and videos using AI computer vision services, supporting object detection, regression, classification, and image segmentation.",
  shortDescription:
    "Full-stack web application platform enabling users to analyze images and videos using AI computer vision services — supporting object detection, regression, classification, and image segmentation.",
  responsibility: [
    "Designed a user-friendly UI to support non-technical users, including medical professors and students, to easily access AI computer vision services.",
    "Implemented existing AI computer vision models as microservice-based AI services that the web platform can call and use.",
    "Developed a web platform that supports adding and integrating new AI services for AI developers.",
  ],
  tech: [
    { name: "React", icon: "image/skills/framework/react.png" },
    { name: "NestJs", icon: "image/skills/framework/nestjs.png" },
    { name: "TypeScript", icon: "image/skills/programming/typescript.png" },
    { name: "Tailwind", icon: "image/skills/framework/tailwind.png" },
    { name: "PostGreSQL", icon: "image/skills/framework/Postgresql.png" },
    { name: "Docker", icon: "image/skills/tools/docker.png" },
  ],
  images: [
    "/projects/senior/ai-web (3).png",
    "/projects/senior/ai-web (2).png",
    "/projects/senior/ai-web (19).png",
    "/projects/senior/ai-web (18).png",
    "/projects/senior/ai-web (1).png",
    "/projects/senior/ai-web (20).png",
    "/projects/senior/ai-web (4).png",
    "/projects/senior/ai-web (7).png",
    "/projects/senior/ai-web (5).png",
    "/projects/senior/ai-web (6).png",
    "/projects/senior/ai-web (10).png",
    "/projects/senior/ai-web (21).png",
    "/projects/senior/ai-web (23).png",
    "/projects/senior/ai-web (22).png",
    "/projects/senior/ai-web.png",
    "/projects/senior/ai-web (9).png",
    "/projects/senior/ai-web (13).png",
  ],
  image: "/projects/senior/ai-web (3).png",
  year: 2025,
};
