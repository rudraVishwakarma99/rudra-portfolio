import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ProjectSection } from '../features/ProjectSection';
import { Card } from '../ui-kit/Card';

export const HomePage: React.FC = () => (
  <>
    <header className="hero-section">
      <h1>{portfolioData.hero.name}</h1>
      <h2>{portfolioData.hero.title}</h2>
      <p className="tagline">{portfolioData.hero.tagline}</p>
      <div className="hero-actions">
        <a className="ui-link-button" href="https://drive.google.com/file/d/12mMdq3MQfJmBx79-dg2t7ITd3xUO2MiD/view?usp=drivesdk" target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <a className="text-link" href={`mailto:${portfolioData.contact.email}`}>
          {portfolioData.contact.email}
        </a>
        <a className="text-link" href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </header>

    <section className="content-section" aria-labelledby="highlights-heading">
      <Card className="highlights-card">
        <h2 id="highlights-heading">Featured Highlights</h2>
        <div className="highlights-list">
          {portfolioData.highlights.map((item) => (
            <span key={item} className="highlight-pill">
              {item}
            </span>
          ))}
        </div>
        <div className="stats-strip">
          {portfolioData.stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>

    <section id="about" className="content-section" aria-labelledby="about-heading">
      <Card className="about-card">
        <h2 id="about-heading">About Me</h2>
        <p>{portfolioData.about.intro}</p>
        <ul className="about-list">
          {portfolioData.about.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </Card>
    </section>

    <ProjectSection data={portfolioData.projects} limit={2} title="Selected Projects" intro="A snapshot of recent work that reflects my frontend engineering focus and product impact." />
  </>
);
