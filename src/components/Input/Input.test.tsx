import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input, { InputProps } from './';

const defaultProps: InputProps = {
  label: 'Some label',
  'aria-label': 'some label',
  value: '',
  placeholder: '0.00',
};
const renderComponent = (props: InputProps = defaultProps) =>
  render(<Input {...props} />);
describe('Input', () => {
  beforeEach(() => {});

  test('should be render with proper role and label', () => {
    renderComponent();

    const input = screen.getByRole('textbox', {
      name: /some label/i,
    });
    const label = screen.getByText(defaultProps.label);

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  test('should display initial placeholder ', () => {
    renderComponent();

    const input = screen.getByRole('textbox', {
      name: /some label/i,
    });
    expect(input).toHaveAttribute('placeholder', '0.00');
  });

  test.each([
    ['not add comma', { amount: '123', formattedAmount: '123' }],
    ['add one comma', { amount: '1234', formattedAmount: '1,234' }],
    ['add two commas', { amount: '1234567', formattedAmount: '1,234,567' }],
    [
      'add one comma and format a dot',
      { amount: '123456.78', formattedAmount: '123,456.78' },
    ],
    [
      'not add comma and format a dot',
      { amount: '1.02', formattedAmount: '1.02' },
    ],
  ])('should %s', async (_, testCase) => {
    renderComponent({ ...defaultProps, value: testCase.amount });

    const input = screen.getByRole('textbox', {
      name: /some label/i,
    });

    expect(input).toHaveValue(testCase.formattedAmount);
  });
});
