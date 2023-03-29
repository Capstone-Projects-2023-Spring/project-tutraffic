import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders tutraffic app', () => {
  render(<App />);
  const linkElement = screen.getByTestId("app-component");
  expect(linkElement).toBeInTheDocument();
});
