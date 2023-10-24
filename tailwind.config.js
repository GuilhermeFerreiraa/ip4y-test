/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#00D636",
        secondary: "#00C59F",
        background: "#272424",
        bg_light: "#0B0B0B",
        backgroundInherit: "#000000",
      },
    },
  },
  plugins: [],
};
