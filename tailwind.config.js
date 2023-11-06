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
      midnightGray: '#4D6475',
      purpleTransparent10: 'rgba(178, 167, 244, 0.1)',
      purpleTransparent25: 'rgba(178, 167, 244, 0.25)',
      blueGray50: '#E9EEF2',
      lightGray: '#F3F5FE',
      lightGray2: '#E8EAF2',
      lightGray3: '#F4F8FA',
      white: '#FFFFFF',
      salmon: '#FFDBCB',
    },
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        dollar: "url('/public/dollar.svg')",
        'chevron-right': "url('/public/chevron-right.svg')",
        'chevron-left': "url('/public/chevron-left.svg')",
      },
      spacing: {
        xxs: '0.25rem',
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
