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
    "Co-developed a web platform that lets non-technical users run image and video analysis with AI models (classification, object detection, image regression, instance segmentation), deployed on the IT faculty's server for use by Siriraj Hospital medical instructors and students.",
  shortDescription:
    "A web platform that lets non-technical users run image and video analysis with AI models, deployed on the IT faculty's server for Siriraj Hospital medical instructors and students.",
  responsibility: [
    "Co-developed a web platform that lets non-technical users run image and video analysis with AI models (classification, object detection, image regression, instance segmentation), deployed on the IT faculty's server for use by Siriraj Hospital medical instructors and students.",
    "Built an admin panel where admins connect new AI microservices by API endpoint and configure how results are displayed, without changing application code.",
    "Designed the PostgreSQL schema with TypeORM and implemented shared workspaces with member invitations, access control, AI usage approval, and analysis history.",
    "Deployed the system with Docker and Nginx, using GitHub Actions to build and publish Docker images.",
  ],
  tech: [
    { name: "React", icon: "image/skills/framework/react.png" },
    { name: "NestJS", icon: "image/skills/framework/nestjs.png" },
    { name: "TypeScript", icon: "image/skills/programming/typescript.png" },
    { name: "PostgreSQL", icon: "image/skills/framework/Postgresql.png" },
    { name: "TypeORM" },
    { name: "Tailwind", icon: "image/skills/framework/tailwind.png" },
    { name: "Docker", icon: "image/skills/tools/docker.png" },
    { name: "Nginx" },
    { name: "GitHub Actions", icon: "image/skills/tools/github.png" },
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
