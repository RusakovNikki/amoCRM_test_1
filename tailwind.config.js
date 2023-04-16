/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { background: 'inherit' },
          '100%': { background: 'yellow' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '700ms'
      },
      width: {
        90: '23rem'
      },
      height: {
        90: '23rem'
      }
    }
  },
  plugins: []
}