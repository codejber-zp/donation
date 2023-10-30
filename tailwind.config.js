/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            'purple': '#423C66',
            'purpleLight': '#645D93',
            'purpleDark': '#241E47'
        },
        fontFamily: {
            sans: ['Work Sans', 'sans-serif'],
        },
        extend: {
            spacing: {
                'space1': '0.75rem',
                'space2': '1rem',
                'space3': '1.5rem',
                'space4': '2rem',
                'space5': '2.5rem',
                'space6': '3rem',
            },
        }
    },
}