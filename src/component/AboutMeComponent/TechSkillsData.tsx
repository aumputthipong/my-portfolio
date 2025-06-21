import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiMui,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiNestjs,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

export const techSkills = [
  {
    category: "Programming Languages",
    skills: [
      { label: "JavaScripts", icon: <SiReact className="text-blue-500" /> },
      { label: "TypeScripts", icon: <SiNextdotjs /> },
      { label: "Java", icon: <SiVuedotjs className="text-green-500" /> },
      { label: "Python", icon: <SiJavascript className="text-yellow-500" /> },
      { label: "Html", icon: <SiTypescript className="text-blue-600" /> },
      { label: "CSS", icon: <SiMui className="text-indigo-500" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { label: "Git", icon: <SiReact className="text-blue-500" /> },
      { label: "Postman", icon: <SiNextdotjs /> },
      { label: "Docker", icon: <SiVuedotjs className="text-green-500" /> },
      { label: "Figma", icon: <SiJavascript className="text-yellow-500" /> },
      { label: "Html", icon: <SiTypescript className="text-blue-600" /> },
      { label: "CSS", icon: <SiMui className="text-indigo-500" /> },
    ],
  },
  {
    category: "Front-End",
    skills: [
      { label: "React", icon: <SiReact className="text-blue-500" /> },
      { label: "Next", icon: <SiNextdotjs /> },
      { label: "Vue", icon: <SiVuedotjs className="text-green-500" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { label: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { label: "Material UI", icon: <SiMui className="text-indigo-500" /> },
      { label: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { label: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { label: "Express", icon: <SiExpress /> },
      { label: "Nodejs", icon: <SiNodedotjs className="text-green-600" /> },
      { label: "Nest", icon: <SiNestjs className="text-red-500" /> },
      { label: "FastAPI", icon: <SiFastapi className="text-blue-500" /> },
      { label: "PostgresQL", icon: <SiPostgresql className="text-blue-800" /> },
      { label: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
];
