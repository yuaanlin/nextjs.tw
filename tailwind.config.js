/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    'pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    'components/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '18rem',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant, addUtilities, e }) {
      addVariant('data-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`data-active${separator}${className}`)}[data-active="true"]`;
        })
      });
      addUtilities({
        '.next-tw-shadow': {
          boxShadow: '0px 6px 12px 0px rgb(0 0 0 / 10%)'
        },
        '.next-tw-hover-shadow': {
          boxShadow: '0px 6px 12px 0px rgb(0 0 0 / 15%)'
        },
      })
    })
  ],
};
