/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'old-english': ['"Old English Text MT"', 'serif'],
      },
    },
  },
  plugins: [],
}

