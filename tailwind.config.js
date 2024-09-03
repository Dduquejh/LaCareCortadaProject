/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
        slideUp: 'slideUp 0.3s ease-in',
      },
      screens:{
        'lg': '1400px',
      },
      fontFamily: {
        'old-english': ['"Old English Text MT"', 'serif'],
      },
    },
  },
  plugins: [],
}

