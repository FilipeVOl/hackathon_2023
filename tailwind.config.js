/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-base':'#050934',
        'gray-text': '#565555',
        'gray-div': '#D9D9D9',
        'gray-text': '#767474'
      },
      borderColor: {
        'blue-base': '#050934'
      },
      height: {
        '100': '30rem'
      }
    },
  },
  plugins: [

  ],
}