/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FFB445',
        'brand-orange-faded': '#ffb545e7',
      },
    },
  },
  plugins: [],
}