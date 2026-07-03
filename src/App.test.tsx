import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './test/test-utils';

describe('App', () => {
  it('renders the portfolio heading', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /Rudra Kumar Vishwakarma/i })).toBeInTheDocument();
  });
});
