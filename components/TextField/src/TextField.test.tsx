import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '.';

describe('TextField', () => {
  function renderComponent(props?: any) {
    return render(<TextField {...props} />);
  }

  test('It should have a default value', () => {
    const defaultValue = 'Default Value';

    renderComponent({
      defaultValue
    });

    expect(screen.getByDisplayValue(defaultValue)).toBeInTheDocument();
  });

  test('It should not have a default value', () => {
    const defaultValue = 'Default Value';

    renderComponent();

    expect(screen.queryByDisplayValue(defaultValue)).toBeNull();
  });

  test('It should be disabled', () => {
    const defaultValue = 'Default Value';

    renderComponent({
      defaultValue,
      disabled: true
    });

    expect(screen.getByDisplayValue(defaultValue)).toBeDisabled();
  });

  test('It calls on change', () => {
    const defaultValue = 'Default Value';
    const mockChange = jest.fn();

    renderComponent({
      defaultValue,
      disabled: true,
      onChange: mockChange
    });

    const input = screen.getByDisplayValue(defaultValue);

    fireEvent.change(input, { target: { value: 'a' } });
    expect(mockChange).toHaveBeenCalled();
  });

  test('It matches the snapshot', () => {
    const { container } = render(<TextField />);
    expect(container).toMatchSnapshot();
  });
});
