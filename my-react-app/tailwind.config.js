/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        'blue-cd' : '#3635E8',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
        ],
}

