import React from 'react';
import { screen, render } from '@testing-library/react';

import Banner, { BannerProps } from './';

const defaultProps: BannerProps = {
  text: 'Lorem ipsum',
  'aria-label': 'Test banner',
};
const renderComponent = (props: BannerProps = defaultProps) =>
  render(<Banner {...props} />);
describe('Banner', () => {
  test('should be render with proper role', () => {
    renderComponent();
    const banner = screen.getByRole('note', {
      name: /test banner/i,
    });

    expect(banner).toBeInTheDocument();
  });

  test('should have a text', () => {
    renderComponent();
    const banner = screen.getByRole('note', {
      name: /test banner/i,
    });

    expect(banner).toHaveTextContent(defaultProps.text as string);
  });

  test('should have a text from react node', () => {
    renderComponent({
      ...defaultProps,
      text: <span>{defaultProps.text}</span>,
    });
    const banner = screen.getByRole('note', {
      name: /test banner/i,
    });

    expect(banner).toHaveTextContent(defaultProps.text as string);
  });
});
