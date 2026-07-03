import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Card } from '../ui-kit/Card';

export const ContactPage: React.FC = () => (
  <div className="page-shell">
    <section className="content-section" aria-labelledby="contact-page-heading">
      <Card className="contact-card">
        <h2 id="contact-page-heading">Let&apos;s Connect</h2>
        <p>
          I enjoy solving complex product challenges, shaping thoughtful design systems, and mentoring teams around delivery quality.
        </p>
        <div className="contact-actions">
          <a className="ui-link-button" href={`mailto:${portfolioData.contact.email}`}>
            Email Me
          </a>
          <a className="ui-link-button ui-link-button--secondary" href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </Card>
    </section>
  </div>
);
