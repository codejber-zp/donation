import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DatePicker, { DatePickerProps } from './';

const defaultProps: DatePickerProps = {
  label: 'Date label',
};
const renderComponent = (props: DatePickerProps = defaultProps) =>
  render(<DatePicker {...props} />);
describe('DatePicker', () => {
  beforeEach(() => {
    renderComponent();
  });

  test('should be render with proper role and label', () => {
    const datePicker = screen.getByRole('listbox', {
      name: /date label/i,
    });
    const label = screen.getByText(defaultProps.label);

    expect(datePicker).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  test('should change on click', async () => {
    const defaultMonthName = new Date().toLocaleString('en', { month: 'long' });
    const datePicker = screen.getByRole('listbox', {
      name: /date label/i,
    });
    expect(datePicker).toHaveTextContent(defaultMonthName);

    const goMonthForwardButton = screen.getByRole('button', {
      name: /chevron right/i,
    });

    await waitFor(() => {
      userEvent.click(goMonthForwardButton);
    });

    const newDate = new Date();
    newDate.setMonth(newDate.getMonth() + 1);
    const nextMonth = newDate.toLocaleString('en', { month: 'long' });
    expect(datePicker).toHaveTextContent(nextMonth);
  });

  test('should not allow to choose date from past', async () => {
    const defaultMonthName = new Date().toLocaleString('en', { month: 'long' });
    const datePicker = screen.getByRole('listbox', {
      name: /date label/i,
    });
    expect(datePicker).toHaveTextContent(defaultMonthName);

    const goMonthBackButton = screen.getByRole('button', {
      name: /chevron left/i,
    });

    await waitFor(() => {
      userEvent.click(goMonthBackButton);
    });

    expect(datePicker).toHaveTextContent(defaultMonthName);
  });
});
