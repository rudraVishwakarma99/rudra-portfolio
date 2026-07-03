import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  hero: {
    name: "Rudra Kumar Vishwakarma",
    title: "Senior Frontend Engineer",
    tagline: "Building performant, scalable user interfaces and design systems for complex web products.",
  },
  skills: [
    {
      category: "Frontend Engineering",
      items: ["React.js", "TypeScript", "Redux Toolkit", "Next.js", "Vite"]
    },
    {
      category: "UI Architecture",
      items: ["Component Libraries", "Design Systems", "Sass", "Custom CSS", "Accessibility"]
    },
    {
      category: "Product Delivery",
      items: ["Performance Optimization", "Code Reviews", "Mentorship", "Cross-functional Collaboration"]
    }
  ],
  experience: [
    {
      id: "1",
      role: "Senior Software Engineer",
      company: "SmartDrive Systems India Pvt. Ltd. (Solera Inc.)",
      period: "Nov 2025 - Present",
      highlights: [
        { text: "Lead frontend architecture initiatives and shape reusable, modular UI patterns across product teams.", skillsUsed: ["React.js", "TypeScript"] },
        { text: "Spearheaded JSON-driven screen generation approaches to accelerate delivery of configurable workflows.", skillsUsed: ["React.js", "Next.js"] },
        { text: "Partnered closely with product and design teams to improve usability, consistency, and maintainability.", skillsUsed: ["Accessibility", "Design Systems"] }
      ]
    },
    {
      id: "2",
      role: "Software Engineer II",
      company: "SmartDrive Systems India Pvt. Ltd. (Solera Inc.)",
      period: "Nov 2024 - Oct 2025",
      highlights: [
        { text: "Architected and maintained the Solera React Infrastructure library to standardize shared frontend components.", skillsUsed: ["React.js", "TypeScript", "Component Libraries"] },
        { text: "Developed a proprietary utility CSS framework to support scalable styling across enterprise interfaces.", skillsUsed: ["Custom CSS", "Sass"] },
        { text: "Improved front-end reliability and maintainability through thoughtful component design and code quality practices.", skillsUsed: ["React.js", "Performance Optimization"] }
      ]
    }
  ]
};