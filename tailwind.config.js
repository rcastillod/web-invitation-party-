/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFE5B2',
        secondary: '#8B6131',
        'dark-grey': '#111018',
        'light-grey': '#26252C',
        'body-color': '#F8F1F9'
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ["vogamedium", 'sans-serif'],
      }
    },
  },
  plugins: [],
}