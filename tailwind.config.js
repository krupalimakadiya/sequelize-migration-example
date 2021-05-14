module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
          // Simple 16 column grid
         '16': 'repeat(16, minmax(0, 1fr))',

          // Complex site-specific column configuration
         'footer': '200px minmax(900px, 1fr) 100px',
        }
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      gridTemplateColumns: ['hover', 'focus'],
    },
  },
  plugins: [],
}
