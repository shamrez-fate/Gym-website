/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#131313',
        'surface-container': '#1f1f1f',
        'surface-container-high': '#2a2a2a',
        primary: '#76FF03',
        'on-surface': '#e2e2e2',
        'on-surface-variant': '#cfc4c5',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(118,255,3,0.25)',
      },
      spacing: {
        'section-gap': '160px',
      },
    },
  },
  plugins: [],
};
