/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        describe: ['Montserrat', 'Hind', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#975AFF',
        secondary: '#2F2F2F',
        background: '#24252A',
      },
    },
  },
  plugins: [],
};
