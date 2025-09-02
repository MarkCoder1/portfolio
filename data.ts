import { Job, SkillCategory } from "./types";
import {
  faReact,
  faVuejs,
  faNodeJs,
  faPython,
  faGitAlt,
  faDocker,
  faAws,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCogs } from "@fortawesome/free-solid-svg-icons";

export const jobs: Job[] = [
  {
    period: "2022 - Present",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    description:
      "Lead development of multiple high-traffic web applications serving 100k+ users. Mentored junior developers and implemented best practices for code quality and performance.",
    skills: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    period: "2020 - 2022",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.",
    skills: ["Vue.js", "Python", "Django", "MongoDB"],
  },
  {
    period: "2019 - 2020",
    title: "Frontend Developer",
    company: "WebAgency",
    location: "New York, NY",
    description:
      "Specialized in creating responsive, interactive user interfaces for various client projects. Focused on performance optimization and cross-browser compatibility.",
    skills: ["JavaScript", "CSS3", "jQuery", "Sass"],
  },
];

export const skillCategories = [
  {
    skills: [
      { name: "HTML", svgPath: "/html.svg"}, // Replace with real paths
      { name: "CSS", svgPath: "/css.svg"}, // Replace with real paths
      { name: "JavaScript", svgPath: "/javascript.svg"}, // Replace with real paths
      { name: "React", svgPath: "/react.svg"}, // Replace with real paths
      { name: "Next.js", svgPath: "/next.png" },
      { name: "Flutter", svgPath: "/flutter.svg" },
      { name: "Tailwind", svgPath: "/tailwind.svg" },
    


      { name: "Git", svgPath: "/git.svg" },
      { name: "Github", svgPath: "/github.svg" },
      { name: "MongoDB", svgPath: "/mongo.svg" },
      { name: "Firebase", svgPath: "/firebase.svg" },
      { name: "Typescript", svgPath: "/typescript.svg" },
      { name: "Supabase", svgPath: "/supabase.png" },
      { name: "Python", svgPath: "/python.svg" },
      { name: "Contentful", svgPath: "/contenful.png" },
    ],
  },
];
