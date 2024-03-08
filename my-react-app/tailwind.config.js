/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/ui/Button.jsx",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "blue-cd": "#3635E8",
        "blue-txt": "#8685F1",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
