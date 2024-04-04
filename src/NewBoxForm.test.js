import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewBoxForm from './NewBoxForm';

// Smoke Test
test('renders without crashing', () => {
  render(<NewBoxForm />);
});

// Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

// Form Submission Test
test('can add a new box', () => {
  const addBox = jest.fn();
  render(<NewBoxForm addBox={addBox} />);

  // Fills out the form
  fireEvent.change(screen.getByLabelText(/Width:/i), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText(/Height:/i), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText(/Background Color:/i), { target: { value: 'seagreen' } });
  
  // Submits the form
  fireEvent.click(screen.getByRole('button', { name: /add box/i }));

  // Checks if addBox function was called w/ correct parameters
  expect(addBox).toHaveBeenCalledWith({
    width: '100',
    height: '100',
    backgroundColor: 'seagreen',
    id: expect.any(String)
  });
});
