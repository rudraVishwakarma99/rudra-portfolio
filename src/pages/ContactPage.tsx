import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Card } from '../ui-kit/Card';
import { Button } from '../ui-kit/Button';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: keyof ContactFormData, value: string): string => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address.';
      }
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for field
    const fieldError = validateField(name as keyof ContactFormData, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: ContactFormErrors = {};
    Object.keys(formData).forEach((key) => {
      const field = key as keyof ContactFormData;
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Mock an asynchronous submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <h2>Let&apos;s Connect</h2>
        <p>I enjoy solving complex product challenges, shaping design systems, and building scalable applications.</p>
      </header>

      <section className="content-section" aria-labelledby="contact-form-heading">
        {isSubmitted ? (
          <Card className="submit-success-card">
            <div className="success-icon" aria-hidden="true">✉️</div>
            <h3 id="contact-form-heading">Message Sent Successfully!</h3>
            <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)' }}>
              Thank you for reaching out, Rudra will get back to you shortly.
            </p>
            <Button 
              style={{ marginTop: '2rem' }}
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </Card>
        ) : (
          <Card className="contact-card">
            <h3 id="contact-form-heading" className="sr-only">Contact Form</h3>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  required
                />
                {errors.name && <span className="invalid-feedback">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="name@example.com"
                  disabled={isSubmitting}
                  required
                />
                {errors.email && <span className="invalid-feedback">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder="What would you like to discuss?"
                  disabled={isSubmitting}
                  required
                />
                {errors.message && <span className="invalid-feedback">{errors.message}</span>}
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a className="text-link" href={`mailto:${portfolioData.contact.email}`}>
                📧 {portfolioData.contact.email}
              </a>
              <a className="text-link" href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
                💼 LinkedIn Profile
              </a>
            </div>
          </Card>
        )}
      </section>
    </div>
  );
};
