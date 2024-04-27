/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 31px 0 rgba(8, 56, 153, 0.4)',
      }
    },
  },
  plugins: [],
}

