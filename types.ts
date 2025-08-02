import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
  icon: string;
  gradient: string;
  tags: string[];
  tagColors: string[];
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
