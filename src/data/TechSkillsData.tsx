import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
export const techSkills = [
    {
    category: "Programming Languages",

    icon: <TerminalIcon className="text-6xl text-white" />,
    skills: [
      { label: "JavaScripts", icon: "image/skills/programming/js.png" },
      { label: "TypeScripts", icon: "image/skills/programming/typescript.png" },
      { label: "Python", icon: "image/skills/programming/python.png"},
      { label: "Java", icon: "image/skills/programming/java.png" },
      { label: "Html", icon: "image/skills/programming/html.png" },
      { label: "CSS", icon: "image/skills/programming/css.png" },
    ],
  },
  {
    category: "Front-End Develope Skills",
    icon: <WebIcon className="text-6xl text-white" />,
    skills: [
      { label: "React", icon: "image/skills/framework/react.png" },
      { label: "Next", icon:"image/skills/framework/nextjs.png" },
      { label: "Vue", icon: "image/skills/framework/vue.png" },
      { label: "MUI", icon: "image/skills/framework/mui.png" },
      { label: "Tailwind", icon: "image/skills/framework/tailwind.png" },
      { label: "Bootstrap", icon: "image/skills/framework/Bootstrap.png" },
    ],
  },
  {
    category: "Back-End Develope Skills",
    icon: <StorageIcon className="text-6xl text-white" />,
    skills: [
      { label: "Nodejs", icon: "image/skills/framework/node.png" },
      { label: "Nest", icon: "image/skills/framework/nestjs.png" },
      { label: "FastAPI", icon: "image/skills/framework/fastapi.png" },
      { label: "Express", icon: "image/skills/framework/express-js.png" },
      { label: "PostgresQL", icon: "image/skills/framework/Postgresql.png" },
      { label: "MySQL", icon: "image/skills/framework/mysql.png"},
      { label: "MongoDB", icon: "image/skills/framework/mongodb.png" },
    ],
  },

  {
    category: "Tools",
    icon: <BuildIcon className="text-6xl text-white" />,
    skills: [
      { label: "Git", icon: "image/skills/tools/git.png" },
      { label: "Postman", icon:"image/skills/tools/postman.png" },
      { label: "Docker", icon: "image/skills/tools/docker.png" },
      { label: "Figma", icon: "image/skills/tools/figma.png" },
      { label: "Github", icon: "image/skills/tools/github.png" },

    ],
  },
];
