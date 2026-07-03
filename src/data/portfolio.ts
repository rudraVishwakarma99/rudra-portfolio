import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  hero: {
    name: "Rudra Kumar Vishwakarma",
    title: "Senior Frontend Engineer",
    tagline: "Frontend engineer with 3.9+ years of experience crafting scalable React, Next.js, and TypeScript applications for enterprise products.",
  },
  about: {
    intro: "I build fast, accessible, and maintainable frontend experiences for products that need to scale. My work sits at the intersection of UI engineering, design systems, and practical product delivery.",
    bullets: [
      "3.9+ years building React and TypeScript applications for enterprise products.",
      "Experienced in creating reusable UI systems, performance-focused interfaces, and clean product architecture.",
      "Focused on translating product ideas into reliable user experiences that are easy to maintain."
    ]
  },
  highlights: [
    "React, Next.js, TypeScript",
    "Design systems and component libraries",
    "Performance and accessibility focused",
    "Enterprise product delivery"
  ],
  projects: [
    {
      title: "SmartDrive Customer Portal Modernization",
      summary: "Modernized a legacy ASP.NET portal into a React-based single-page experience with better navigation, maintainability, and performance.",
      stack: ["React.js", "Redux", "TypeScript", "ASP.NET"],
      impact: "Improved page load experience and enabled a smoother, more scalable customer journey."
    },
    {
      title: "Solera React Infrastructure",
      summary: "Built and maintained a private component library used across multiple enterprise products to standardize UI and speed up delivery.",
      stack: ["React.js", "TypeScript", "NPM", "GitHub Actions"],
      impact: "Reduced UI setup time and helped teams ship consistent product interfaces faster."
    },
    {
      title: "SmartDrive Video Player Modernization",
      summary: "Replaced a legacy playback experience with a more reliable cross-platform React-based solution.",
      stack: ["React.js", "Electron.js", "TypeScript"],
      impact: "Improved supportability and expanded the experience across web and desktop environments."
    }
  ],
  contact: {
    email: "rudravishwakarmark@gmail.com",
    linkedin: "https://www.linkedin.com/in/rudra-kumar-vishwakarma"
  },
  skills: [
    {
      category: "Frontend Expertise",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "React Hooks"]
    },
    {
      category: "UI Architecture",
      items: ["Design Systems", "Component Libraries", "Accessibility (A11y)", "Responsive Web Design", "Figma to Code"]
    },
    {
      category: "Platform & Delivery",
      items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "GitHub Actions", "Jest", "CI/CD"]
    }
  ],
  experience: [
    {
      id: "1",
      role: "Senior Software Engineer",
      company: "SmartDrive Systems India Pvt. Ltd. (Solera Inc.)",
      period: "Nov 2025 - Present",
      highlights: [
        { text: "Work on frontend architecture and implementation for the SmartDrive platform, applying React.js best practices, modular TypeScript components, and scalable Redux patterns.", skillsUsed: ["React.js", "TypeScript", "Redux Toolkit"] },
        { text: "Support team growth by sharing practical guidance on TypeScript, performance optimization, and component-driven development.", skillsUsed: ["Mentorship", "Performance Optimization"] },
        { text: "Contribute to JSON-driven dynamic screen generators that help product and UX teams ship new UI screens faster with less frontend effort.", skillsUsed: ["React.js", "Next.js"] }
      ]
    },
    {
      id: "2",
      role: "Software Engineer II",
      company: "SmartDrive Systems India Pvt. Ltd. (Solera Inc.)",
      period: "Nov 2024 - Oct 2025",
      highlights: [
        { text: "Architected the Solera React Infrastructure, a private NPM component library that standardized UI across 3+ enterprise products.", skillsUsed: ["React.js", "TypeScript", "Component Libraries"] },
        { text: "Developed the Solera Uniformal CSS Framework, a proprietary utility CSS system supporting multi-theme branding and responsive layouts.", skillsUsed: ["Custom CSS", "Design Systems"] },
        { text: "Modernized the SmartDrive video player from Silverlight to React.js and Electron.js, improving cross-platform support and reducing support tickets.", skillsUsed: ["React.js", "TypeScript"] }
      ]
    },
    {
      id: "3",
      role: "Associate Software Engineer",
      company: "SmartDrive Systems India Pvt. Ltd. (Solera Inc.)",
      period: "Sep 2022 - Oct 2024",
      highlights: [
        { text: "Contributed to the SmartDrive Customer Portal modernization by migrating a legacy ASP.NET MPA to a React.js and Redux SPA with faster navigation and improved performance.", skillsUsed: ["React.js", "Redux", "Performance Optimization"] },
        { text: "Played a key role in the OmniTrack platform consolidation, unifying legacy systems into a single React SPA with a microservices backend.", skillsUsed: ["React.js", "Node.js", "Microservices"] },
        { text: "Implemented reusable UI components aligned with Solera UX standards and ensured WCAG 2.1 accessibility across critical modules.", skillsUsed: ["Accessibility", "Component Libraries"] }
      ]
    }
  ]
};