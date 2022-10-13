/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      colors: {
        'ui-gray': {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A',
          200: '#C4C4CC',
          100: '#E1E1E6',
        },

        'ui-cyan': {
          500: '#61DAFB',
          400: '#81D8F7',
        },

        'ui-black': '#000000',
      },
    },
  },
  plugins: [],
}
