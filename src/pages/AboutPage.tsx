import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Card } from '../ui-kit/Card';

export const AboutPage: React.FC = () => (
  <div className="page-shell">
    <section className="content-section" aria-labelledby="about-page-heading">
      <Card className="about-card">
        <h2 id="about-page-heading">About Me</h2>
        <p>{portfolioData.about.intro}</p>
        <ul className="about-list">
          {portfolioData.about.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </Card>
    </section>
  </div>
);
