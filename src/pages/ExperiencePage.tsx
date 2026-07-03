import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SkillGrid } from '../features/SkillGrid';
import { ExperienceTimeline } from '../features/ExperienceTimeline';

export const ExperiencePage: React.FC = () => (
  <div className="page-shell">
    <header className="page-header">
      <h2>Professional Experience</h2>
      <p>A look at my professional journey. Click on the skills below to highlight and filter specific highlights.</p>
    </header>
    
    <SkillGrid data={portfolioData.skills} />
    
    <ExperienceTimeline data={portfolioData.experience} />
  </div>
);
