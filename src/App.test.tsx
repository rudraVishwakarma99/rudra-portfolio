import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './test/test-utils';

describe('App', () => {
  it('renders the portfolio heading', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /Rudra Kumar Vishwakarma/i })).toBeInTheDocument();
  });

  it('renders the core portfolio sections', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('heading', { level: 2, name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /selected projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /featured highlights/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /let's connect/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', 'https://drive.google.com/file/d/12mMdq3MQfJmBx79-dg2t7ITd3xUO2MiD/view?usp=drivesdk');
  });
});
