import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoxList from './BoxList';

// Smoke Test
test('renders BoxList component without crashing', () => {
  render(<BoxList />);
});

// Snapshot Test
test('BoxList component matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Business Logic - Adding/Removing a Box
test('can add and remove a box', () => {
  render(<BoxList />);
  
  // Add box
  fireEvent.change(screen.getByLabelText(/Width:/i), { target: { value: '120' } });
  fireEvent.change(screen.getByLabelText(/Height:/i), { target: { value: '120' } });
  fireEvent.change(screen.getByLabelText(/Background Color:/i), { target: { value: 'lavender' } });
  fireEvent.click(screen.getByText(/add box/i));

  // Checks if box was added
  expect(screen.getByText('X')).toBeInTheDocument();

  // Removes box
  fireEvent.click(screen.getByText('X'));

  // Checks if box was removed
  expect(screen.queryByText('X')).not.toBeInTheDocument();
});
