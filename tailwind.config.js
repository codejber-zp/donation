/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      purpleMidnight: '#423C66',
      purpleLight: '#645D93',
      purpleDark: '#241E47',
      purpleGray: '#595D7B',
      purpleTransparent10: 'rgba(178, 167, 244, 0.1)',
      purpleTransparent25: 'rgba(178, 167, 244, 0.25)',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
    },
    extend: {
      spacing: {
        xs: '0.75rem',
        sm: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '2.5rem',
        xxl: '3rem',
      },
      borderRadius: {
        md: '0.31rem',
      },
      height: {
        button: '3.25rem',
      },
      width: {
        button: '14.875rem',
      },
    },
  },
};
