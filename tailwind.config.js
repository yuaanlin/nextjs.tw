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
    plugin(function({ addVariant, e }) {
      addVariant('data-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`data-active${separator}${className}`)}[data-active="true"]`;
        })
      });
    })
  ],
};
