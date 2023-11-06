import React from 'react';
import { screen, render } from '@testing-library/react';

import Heading, { HeadingProps } from './';

const defaultProps: HeadingProps = {
  title: 'Lorem ipsum',
  subtitle: 'dolor sit amet, consectetur adipiscing elit',
};
const renderComponent = (props: HeadingProps = defaultProps) =>
  render(<Heading {...props} />);
describe('Heading', () => {
  beforeEach(() => {
    renderComponent();
  });

  test('should be render with proper role', () => {
    const heading = screen.getByRole('banner', {
      name: /header/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('should have title and subtitle displayed', () => {
    const heading = screen.getByRole('banner', {
      name: /header/i,
    });
    expect(heading).toHaveTextContent(defaultProps.title);
    expect(heading).toHaveTextContent(defaultProps.subtitle as string);
  });

  test('should have icon rendered', () => {
    renderComponent({ ...defaultProps, icon: <img src='' /> });
    const icon = screen.getByRole('img', {
      name: /heading icon/i,
    });
    expect(icon).toBeInTheDocument();
  });
});
