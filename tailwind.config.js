module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
      '3xl': '2100px'
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
