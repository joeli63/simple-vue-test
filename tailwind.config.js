const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'wp-green': {
          100: '#C8E4C3',
          200: '#77BB6E',
          300: '#61B057',
        },
        'wp-blue': {
          100: '#EFF6FA',
          200: '#B8D9E9',
          300: '#287FD4',
          400: '#13599E',
        },
        'wp-black': {
          100: '#F5F5F5',
          200: '#E2E2E2',
          300: '#5D5E5E',
          400: '#172944'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
