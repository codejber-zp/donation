import React from 'react';
import { screen, render } from '@testing-library/react';

import Text, { TextProps } from './';

const defaultProps: TextProps = {
  text: 'Lorem ipsum',
};
const renderComponent = (props: TextProps = defaultProps) =>
  render(<Text {...props} />);
describe('Text', () => {
  beforeEach(() => {
    renderComponent();
  });

  test('should be render with proper role', () => {
    const text = screen.getByRole('note', {
      name: /text/i,
    });
    expect(text).toBeInTheDocument();
  });

  test('should have text displayed', () => {
    const text = screen.getByRole('note', {
      name: /text/i,
    });
    expect(text).toHaveTextContent(defaultProps.text);
  });
});
