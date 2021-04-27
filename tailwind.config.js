module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    // ...
    margin: ['hover'],
    width: ['group-hover', 'hover'],
  },
  plugins: [require('@tailwindcss/typography')],
}
