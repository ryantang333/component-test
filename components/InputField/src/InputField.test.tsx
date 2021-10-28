import React from 'react';
import { render } from '@testing-library/react';
import InputField from '.';

describe('InputField', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<InputField />);
    expect(container).toMatchSnapshot();
  });
});
