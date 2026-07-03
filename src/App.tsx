import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { toggleTheme } from './store/uiSlice';
import { portfolioData } from './data/portfolio';
import { ExperienceTimeline } from './features/ExperienceTimeline';
import { ProjectSection } from './features/ProjectSection';
import { SkillGrid } from './features/SkillGrid';
import { Button } from './ui-kit/Button';
import { Card } from './ui-kit/Card';
import './styles/main.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="portfolio-layout">
      <nav className="theme-toggle-wrapper">
        <Button
          className="theme-btn"
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
      </nav>

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

      <main>
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
        <ProjectSection data={portfolioData.projects} />
        <SkillGrid data={portfolioData.skills} />
        <ExperienceTimeline data={portfolioData.experience} />
        <section id="contact" className="content-section" aria-labelledby="contact-heading">
          <Card className="contact-card">
            <h2 id="contact-heading">Let&apos;s Connect</h2>
            <p>
              I enjoy solving complex product challenges, shaping thoughtful design systems, and mentoring teams around delivery quality.
            </p>
            <div className="contact-actions">
              <a className="ui-link-button" href={`mailto:${portfolioData.contact.email}`}>
                Email Me
              </a>
              <a
                className="ui-link-button ui-link-button--secondary"
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default App;