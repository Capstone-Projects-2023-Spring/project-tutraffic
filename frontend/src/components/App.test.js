import { render, screen, waitFor } from '@testing-library/react';
import { App } from './App';

test('renders tutraffic app', async () => {
  await waitFor(() => {
    render(<App />);
  });
  const linkElement = screen.getByTestId("app-component");
  expect(linkElement).toBeInTheDocument();
});
