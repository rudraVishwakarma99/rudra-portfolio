import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Card } from '../ui-kit/Card';

export const ExperiencePage: React.FC = () => (
  <div className="page-shell">
    <section className="content-section" aria-labelledby="experience-page-heading">
      <Card>
        <h2 id="experience-page-heading">Experience</h2>
        {portfolioData.experience.map((role) => (
          <article key={role.company} className="role-card ui-card">
            <header>
              <div>
                <h3>{role.role}</h3>
                <p className="company">{role.company}</p>
              </div>
              <span>{role.period}</span>
            </header>
            <ul className="about-list">
              {role.highlights.map((highlight) => (
                <li key={highlight.text}>{highlight.text}</li>
              ))}
            </ul>
          </article>
        ))}
      </Card>
    </section>
  </div>
);
