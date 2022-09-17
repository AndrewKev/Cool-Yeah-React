/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dosis': ['"Dosis"', 'sans-serif']
      },
      colors: {
        'blue-donk': '#06283D',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
