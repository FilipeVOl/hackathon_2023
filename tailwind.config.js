/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      color:{
        'blue-base':'#050934',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}