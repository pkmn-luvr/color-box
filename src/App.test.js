import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Smoke Test
test('renders App component without crashing', () => {
  render(<App />);
});

// Snapshot Test
test('App component matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
