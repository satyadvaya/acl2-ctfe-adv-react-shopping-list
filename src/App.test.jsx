import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render shopping list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Winter/i);
  expect(linkElement).toBeInTheDocument();
});
