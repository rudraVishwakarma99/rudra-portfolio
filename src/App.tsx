import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { toggleTheme } from './store/uiSlice';
import { portfolioData } from './data/portfolio';
import { ExperienceTimeline } from './features/ExperienceTimeline';
import { SkillGrid } from './features/SkillGrid';
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
        <button 
          className="theme-btn"
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </nav>

      <header className="hero-section">
        <h1>{portfolioData.hero.name}</h1>
        <h2>{portfolioData.hero.title}</h2>
        <p className="tagline">{portfolioData.hero.tagline}</p>
      </header>

      <main>
        <SkillGrid data={portfolioData.skills} />
        <ExperienceTimeline data={portfolioData.experience} />
      </main>
    </div>
  );
};

export default App;