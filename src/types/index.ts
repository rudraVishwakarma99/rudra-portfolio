export interface JobHighlight {
  text: string;
  skillsUsed: string[];
}

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: JobHighlight[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  stack: string[];
  impact: string;
}

export interface PortfolioData {
  hero: { name: string; title: string; tagline: string; };
  about: { intro: string; bullets: string[]; };
  highlights: string[];
  projects: ProjectItem[];
  contact: { email: string; linkedin: string; };
  skills: SkillGroup[];
  experience: Job[];
}