import { render, screen } from '@testing-library/react';
import App from './App';

test('renders news headlines', () => {
  render(<App />);
  expect(screen.getByText(/Top Headlines/i)).toBeInTheDocument();
  expect(screen.getByText(/Burger King is betting/i)).toBeInTheDocument();
});