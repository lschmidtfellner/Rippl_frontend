/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
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
