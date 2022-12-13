module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ['Open Sans', 'Arial', 'sans-serif']
      },
      fontSize: {
        elementoryText: '18px'
      }
    },
  },
  plugins: [],
}