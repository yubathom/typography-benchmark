const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1120px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'brandpink': {
          500: '#d6378a',
          300: '#efaace'
        },
        'brandblue': {
          500: '#1b497e',
          300: '#91b0d3'
        },
        'red': {
          500: '#ff483c',
          300: '#ffcfcc'
        },
        'green': {
          500: '#52cc6c',
          300: '#e3fcdd'
        },
        'yellow': {
          500: '#ffd014',
          300: '#fff6d0'
        },
        'gray': {
          50: '#F9F9F9'
        },
        cyan: colors.cyan,
      }
    }
  }
}
