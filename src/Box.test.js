import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from './Box';

// Smoke Test
test('renders Box component without crashing', () => {
  render(<Box id="1" width="100" height="100" backgroundColor="pink" removeBox={() => {}} />);
});

// Snapshot Test
test('Box component matches snapshot', () => {
  const { asFragment } = render(<Box id="1" width="100" height="100" backgroundColor="pink" removeBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
