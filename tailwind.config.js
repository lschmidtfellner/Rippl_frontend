/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      'forma-djr-micro': ['forma-djr-micro', 'sans-serif']
    },
    fontWeight: {
      'regular': 400,
      'medium': 500,
      'bold' : 700,
      'extra-bold': 800
    },
    fontStyle: {
      'normal': 'normal',
      'italic': 'italic'
    }
  },
};
export const plugins = [];
