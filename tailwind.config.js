/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        'med': '90%', // Adjust the width as needed
      },
    },
  },
  plugins: [],
}

