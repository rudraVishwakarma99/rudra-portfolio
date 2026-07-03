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

export interface PortfolioData {
  hero: { name: string; title: string; tagline: string; };
  skills: SkillGroup[];
  experience: Job[];
}