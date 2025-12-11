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
    category: "Laravel/PHP",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
    url: "#",
    description: "A comprehensive school management system handling student data, grading, and attendance designed with Core PHP.",
    tags: ["Core PHP", "MySQL", "Bootstrap"]
  },
  {
    title: "Hotel Jiyan",
    category: "WordPress/Wix",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop",
    url: "hoteljiyan.com.np",
    description: "Full-featured hotel booking website with room management and reservation systems.",
    tags: ["WordPress", "Booking Engine", "CSS3"]
  },
  {
    title: "Sales Funnels & Automation",
    category: "GHL/Shopify",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    url: "lightwebgroup.com",
    description: "High-conversion landing pages and marketing automation workflows for agency clients.",
    tags: ["GoHighLevel", "Automation", "UI Design"]
  },
  {
    title: "Wholistic Brain Therapy",
    category: "WordPress/Wix",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
    url: "wholisticbraintherapy.com",
    description: "Medical therapy service website offering appointment booking and information resources.",
    tags: ["WordPress", "Elementor", "SEO"]
  },
  {
    title: "Brain Tumor Center Nepal",
    category: "WordPress/Wix",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop",
    url: "braintumorcenternepal.org.np",
    description: "Informational portal for a medical center providing critical health resources.",
    tags: ["WordPress", "Custom Theme", "PHP"]
  },
  {
    title: "Trobustech Infrastructure",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1470&auto=format&fit=crop",
    url: "trobustech.com",
    description: "CI/CD pipeline configuration and server monitoring setup.",
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