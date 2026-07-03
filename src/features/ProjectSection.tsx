import React from 'react';
import { ProjectItem } from '../types';
import { Card } from '../ui-kit/Card';

interface ProjectSectionProps {
  data: ProjectItem[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ data }) => (
  <section id="projects" className="content-section" aria-labelledby="projects-heading">
    <div className="section-heading">
      <h2 id="projects-heading">Selected Projects</h2>
      <p>Highlights from recent work that reflect my product and frontend engineering focus.</p>
    </div>
    <div className="projects-grid">
      {data.map((project) => (
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
