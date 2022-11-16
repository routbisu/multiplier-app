import { act, render, screen } from '@testing-library/react';
import React from 'react';
import Home from '.';

describe('home page', () => {
  test('renders the correct number of buttons', async () => {
    render(<Home numberOfButtons={10} />);
    const items = await screen.findAllByRole('button');
    expect(items).toHaveLength(10);
  });
});
