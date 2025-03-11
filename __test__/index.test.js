import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app//page.tsx';

describe('Home Page', () => {
  test('renders the main title "CI/CD Foundation with AWS"', () => {
    render(<Home />);
    const title = screen.getByText(/CICD Foundation with AWS/i);
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
