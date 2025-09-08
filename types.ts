import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Job {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}


export interface Project {
  title: string;
  description: string;
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  techImages: string[]; // 👈 Array of image paths instead of JSX icons
}


interface Skill {
  name: string;
  icon: IconDefinition;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}
