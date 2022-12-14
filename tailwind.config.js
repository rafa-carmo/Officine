/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2F80ED',
          300: '#5498F0'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
