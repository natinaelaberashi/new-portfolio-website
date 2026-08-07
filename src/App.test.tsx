import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the updated fraud operations profile summary', () => {
  render(<App />);
  expect(
    screen.getByText(/Fraud Operations Analyst \| Fraud Investigation \| Transaction Monitoring \| Risk Management \| Customer Verification \| Account Security/i)
  ).toBeInTheDocument();
});
