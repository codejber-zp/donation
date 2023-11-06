import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

const renderComponent = () => render(<App />);

describe('App', () => {
  test('should datepicker change date on click', async () => {
    renderComponent();
    const defaultMonthName = new Date().toLocaleString('en', { month: 'long' });
    const datePicker = screen.getByRole('listbox', {
      name: /every month until/i,
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
    renderComponent();
    const defaultMonthName = new Date().toLocaleString('en', { month: 'long' });
    const datePicker = screen.getByRole('listbox', {
      name: /every month until/i,
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
