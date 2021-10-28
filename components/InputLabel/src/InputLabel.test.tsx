import React from 'react';
import { render } from '@testing-library/react';
import InputLabel from '.';

describe('InputLabel', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<InputLabel />);
    expect(container).toMatchSnapshot();
  });
});
