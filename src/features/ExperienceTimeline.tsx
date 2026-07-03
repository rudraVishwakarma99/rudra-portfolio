import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Job } from '../types';
import { Card } from '../ui-kit/Card';

interface TimelineProps { data: Job[]; }

export const ExperienceTimeline: React.FC<TimelineProps> = ({ data }) => {
  const activeFilter = useSelector((state: RootState) => state.ui.activeFilter);

  return (
    <section id="experience" className="content-section" aria-labelledby="exp-heading">
      <h3 id="exp-heading">Professional Experience</h3>
      <div aria-live="polite" className="sr-only">
        {activeFilter ? `Showing experience related to ${activeFilter}` : 'Showing all experience'}
      </div>
      <div className="timeline">
        {data.map((job) => {
          const filteredHighlights = activeFilter 
            ? job.highlights.filter(h => h.skillsUsed.includes(activeFilter))
            : job.highlights;

          if (activeFilter && filteredHighlights.length === 0) return null;

          return (
            <Card key={job.id} className="role-card">
              <header>
                <div>
                  <h4>{job.role}</h4>
                  <p className="company">{job.company}</p>
                </div>
                <time>{job.period}</time>
              </header>
              <ul>
                {filteredHighlights.map((highlight, idx) => (
                  <li key={idx}>{highlight.text}</li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
};