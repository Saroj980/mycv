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
    title: "School Management System",
    category: "PHP",
    image: "/blackboard.png",
    url: "demo.bbnepal.com",
    description: "A comprehensive school management system handling student data, grading, and attendance designed with Core PHP.",
    tags: ["Core PHP", "MySQL", "Bootstrap"]
  },
  {
    title: "Hotel Jiyan",
    category: "WordPress/Wix",
    image: "/hoteljiyan.png",
    url: "hoteljiyan.com.np",
    description: "Full-featured hotel booking website with room management and reservation systems.",
    tags: ["WordPress", "Booking Engine", "CSS3"]
  },
  {
    title: "Lightwebgroup",
    category: "WordPress",
    image: "/lightwebgroup.png",
    url: "lightwebgroup.com",
    description: "IT Company",
    tags: ["WordPress", "javascript", "CSS3"]
  },
  {
    title: "Sales Funnels & Automation",
    category: "GHL/Shopify",
    image: "/wholisticbraintherapy.png",
    url: "wholisticbraintherapy.com",
    description: "Medical therapy service website offering appointment booking and information resources.",
    tags: ["GoHighLevel", "Automation", "UI Design"]
  },
  {
    title: "Brain Tumor Center Nepal",
    category: "WordPress/Wix",image: "/projects/wholisticbraintherapy.png",
    image: "/braintumor.png",
    url: "braintumorcenternepal.org.np",
    description: "Informational portal for a medical center providing critical health resources.",
    tags: ["WordPress", "Custom Theme", "PHP"]
  },
  {
    title: "Trobustech Infrastructure",
    category: "DevOps",
    image: "/trobustech.png",
    url: "trobustech.com",
    description: "IT company.",
    tags: ["Linux", "Docker", "CI/CD"]
  }
];

export const SKILLS_DATA: string[] = [
  "WordPress", "Wix", "Shopify", "GHL", 
  "PHP", "HTML5", "CSS3", "JavaScript", 
  "React", "Laravel", "Linux", "CI/CD", 
  "Canva", "Photoshop", "UI/UX"
];

export const SOCIAL_LINKS = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};
