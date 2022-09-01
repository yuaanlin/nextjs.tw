/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    'components/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '6rem',
        xl: '12rem',
        '2xl': '18rem',
      },
    },
  },  plugins: [],
};
