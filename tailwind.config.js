/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'loading-bar': 'loading-bar 2s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};