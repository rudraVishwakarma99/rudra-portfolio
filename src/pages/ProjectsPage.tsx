import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ProjectSection } from '../features/ProjectSection';

export const ProjectsPage: React.FC = () => (
  <div className="page-shell">
    <ProjectSection data={portfolioData.projects} title="Projects" intro="Selected work spanning product UI, scalable architecture, and measurable outcomes." />
  </div>
);
