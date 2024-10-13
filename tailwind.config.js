/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.{html,ejs}', // Include all HTML and EJS files in the views folder
    './public/**/*.{html,js}',  // Include HTML and JavaScript files in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
