import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app//page.tsx';

describe('Home Page', () => {
  test('renders the main title "DevOps Week 2025"', () => {
    render(<Home />);
    const title = screen.getByText(/DevOps Week 2025/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the event details correctly', () => {
    render(<Home />);
    const dateDetail = screen.getByText(/March 10-14 \(Mon - Fri\)/i);
    const locationDetail = screen.getByText(/Floor G\. Training Room - Online/i);
    const forDetail = screen.getByText(/Anyone ready to dive into DevOps/i);

    expect(dateDetail).toBeInTheDocument();
    expect(locationDetail).toBeInTheDocument();
    expect(forDetail).toBeInTheDocument();
  });
});
