import React from 'react';
import { screen, render } from '@testing-library/react';

import Button, { ButtonProps } from './';

const defaultProps: ButtonProps = {
  text: 'Some text',
};
const renderComponent = (props: ButtonProps = defaultProps) =>
  render(<Button {...props} />);
describe('Button', () => {
  test('should be render with proper role', () => {
    renderComponent();
    screen.getByRole('button', { name: /Some text/i });
  });
});
