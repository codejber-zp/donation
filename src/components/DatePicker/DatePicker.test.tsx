import React from 'react';
import { screen, render } from '@testing-library/react';

import DatePicker, { DatePickerProps } from './';

const defaultProps: DatePickerProps = {
  label: 'Date label',
  date: new Date(),
};
const renderComponent = (props: DatePickerProps = defaultProps) =>
  render(<DatePicker {...props} />);
describe('DatePicker', () => {
  test('should be render with proper role and label', () => {
    renderComponent();

    const datePicker = screen.getByRole('listbox', {
      name: /date label/i,
    });
    const label = screen.getByText(defaultProps.label);

    expect(datePicker).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  test('should be displayed with passed date', () => {
    renderComponent({ ...defaultProps, date: new Date(2025, 0) });

    const datePicker = screen.getByRole('listbox', {
      name: /date label/i,
    });
    expect(datePicker).toHaveTextContent('January');
    expect(datePicker).toHaveTextContent('2025');
  });
});
