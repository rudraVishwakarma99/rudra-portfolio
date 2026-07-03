import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { toggleTheme } from './store/uiSlice';
import { portfolioData } from './data/portfolio';
import { ExperienceTimeline } from './features/ExperienceTimeline';
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
          <a className="ui-link-button" href="/Rudra-Kumar-Vishwakarma-Resume.txt" download>
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
        <SkillGrid data={portfolioData.skills} />
        <ExperienceTimeline data={portfolioData.experience} />
      </main>
    </div>
  );
};

export default App;