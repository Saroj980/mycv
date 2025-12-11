export interface Project {
  title: string;
  url: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}