import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './test/test-utils';

describe('App', () => {
  it('renders the portfolio heading', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /Rudra Kumar Vishwakarma/i })).toBeInTheDocument();
  });

  it('renders primary navigation links for the multi-page experience', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders the core portfolio sections', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('heading', { level: 2, name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /selected projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /featured highlights/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', 'https://drive.google.com/file/d/12mMdq3MQfJmBx79-dg2t7ITd3xUO2MiD/view?usp=drivesdk');
  });
});
