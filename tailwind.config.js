/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['proxima-nova', 'sans-serif']
      },
      fontWeight: {
        'regular': 400,
        'semi': 600,
        'bold': 700,
        'extra-bold': 800
      },
      fontStyle: {
        'normal': 'normal',
        'italic': 'italic'
      }
    }
  },
  plugins: [],
}
