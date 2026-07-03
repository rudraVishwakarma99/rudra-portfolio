import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { ProjectSection } from '../features/ProjectSection';
import { Badge } from '../ui-kit/Badge';

export const ProjectsPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique stack items dynamically
  const allTags = Array.from(
    new Set(portfolioData.projects.flatMap((p) => p.stack))
  );

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  const filteredProjects = selectedTag
    ? portfolioData.projects.filter((p) => p.stack.includes(selectedTag))
    : portfolioData.projects;

  return (
    <div className="page-shell animate-fade-in">
      <header className="page-header">
        <h2>Projects</h2>
        <p>Selected engineering work. Click on any technology tag below to filter by stack.</p>
      </header>

      <section className="filter-bar-section" aria-label="Project stack filter">
        <div className="filter-bar">
          <button
            className={`ui-badge ${selectedTag === null ? 'active' : ''}`}
            onClick={() => setSelectedTag(null)}
            aria-pressed={selectedTag === null}
          >
            All Projects
          </button>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              label={tag}
              isActive={selectedTag === tag}
              onClick={() => handleTagClick(tag)}
              aria-label={`Filter projects by ${tag}`}
            />
          ))}
        </div>
      </section>

      <ProjectSection 
        data={filteredProjects} 
        title={`${selectedTag ? `${selectedTag} ` : ''}Projects`} 
        intro={selectedTag ? `Showing projects built using ${selectedTag}.` : 'Selected work spanning product UI, scalable architecture, and measurable outcomes.'} 
      />
    </div>
  );
};
