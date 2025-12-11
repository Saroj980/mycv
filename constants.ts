import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Saroj Joshi",
  role: "WordPress/Wix & Full Stack Developer",
  email: "jsaroj284@gmail.com",
  phone: "9868795646",
  location: "Nepal",
  summary: "WordPress/Wix Developer with experience in Shopify, GHL, custom PHP systems, and UI design. Strong skills in WordPress customization, responsive design, plugin configuration, and modern CMS workflows. Also worked as remote Assistant DevOps at Trobustech for CI/CD and server automation tasks."
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "WordPress Developer",
    company: "LightWebGroup",
    period: "2022 - Present (Remote)",
    details: [
      "Built and customized WordPress and Wix websites.",
      "Worked on Shopify stores and GHL funnels.",
      "Designed banners and UIs using Canva & Photoshop.",
      "Website optimization, plugin integration, and maintenance."
    ]
  },
  {
    role: "Assistant DevOps",
    company: "Trobustech",
    period: "8 Months (Remote)",
    details: [
      "CI/CD pipelines and automation support.",
      "Server monitoring and Linux-based workflow support.",
      "Assisted engineering with testing and deployments."
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Ongoing",
    details: [
      "Developed school management system in core PHP.",
      "Created and maintained multiple business websites."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Hotel Jiyan",
    url: "hoteljiyan.com.np",
    description: "Hotel booking and management website."
  },
  {
    title: "Wholistic Brain Therapy",
    url: "wholisticbraintherapy.com",
    description: "Therapy services and appointment information."
  },
  {
    title: "Brain Tumor Center Nepal",
    url: "braintumorcenternepal.org.np",
    description: "Medical information portal."
  },
  {
    title: "LightWebGroup Projects",
    url: "lightwebgroup.com",
    description: "Agency portfolio and client projects."
  },
  {
    title: "Trobustech Portfolio",
    url: "trobustech.com",
    description: "Tech company portfolio and service showcase."
  }
];

export const SKILLS_DATA: string[] = [
  "WordPress", "Wix", "Shopify", "GHL", 
  "PHP", "HTML5", "CSS3", "JavaScript", 
  "React", "Laravel", "Linux", "CI/CD", 
  "Canva", "Photoshop", "UI/UX"
];

export const SOCIAL_LINKS = {
  github: "https://github.com/", // Placeholder based on request for GitHub deployment
  linkedin: "https://linkedin.com/", // Placeholder standard
};