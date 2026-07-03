import React from 'react';
import { ProjectItem } from '../types';
import { Card } from '../ui-kit/Card';

interface ProjectSectionProps {
  data: ProjectItem[];
  title?: string;
  intro?: string;
  limit?: number;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ data, title = 'Selected Projects', intro = 'Highlights from recent work that reflect my product and frontend engineering focus.', limit }) => {
  const visibleProjects = typeof limit === 'number' ? data.slice(0, limit) : data;

  return (
    <section id="projects" className="content-section" aria-labelledby="projects-heading">
      <div className="section-heading">
        <h2 id="projects-heading">{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <Card key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-meta">
              <span className="project-label">Stack</span>
              <div className="skill-list">
                {project.stack.map((item) => (
                  <span key={item} className="ui-badge project-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-impact">
              <span className="project-label">Impact</span>
              <p>{project.impact}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
