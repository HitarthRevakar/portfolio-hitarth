import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiPostgresql, SiPostman, SiKnexdotjs } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skills = {
  frontend: [
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Bootstrap 5", icon: SiBootstrap, color: "text-purple-600" }
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
    { name: "Knex.js", icon: SiKnexdotjs, color: "text-orange-600" },
    { name: "REST API", icon: TbApi, color: "text-blue-500" }
  ],
  database: [
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-white" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "VSCode", icon: FaCode, color: "text-blue-600" },  
    { name: "Figma", icon: FaFigma, color: "text-purple-500" }
  ]
};

export default skills;
