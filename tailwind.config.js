/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        flicker: "pulse 2500ms linear infinite",
      },
    },
    colors: {
      green: "rgb(0, 48, 51)",
      "dark-green": "rgb(0, 32, 34)",
    },
  },
  plugins: [],
};
