import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './test/test-utils';

describe('App', () => {
  it('renders the portfolio heading', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /Rudra Kumar Vishwakarma/i })).toBeInTheDocument();
  });

  it('renders the contact section and download resume button', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('heading', { level: 2, name: /let's connect/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', '/Rudra-Kumar-Vishwakarma-Resume.txt');
  });
});
