/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
    },
    colors: {
      'blue': '#0079FF',
      'light-blue': '#60ABFF',
      'light-gray': '#697C9A',
      'light-blue-gray': '#4B6A9B',
      'very-light-gray': '#F6F8FF',
      'very-dark-gray': '#2B3442',
      'off-white': '#FEFEFE',
      'white': '#FFFFFF',
      'black': '#141D2F',
      'very-dark-blue-gray': '#1E2A47',
      'error': '#F74646'
    },
  },
  plugins: [],
}
