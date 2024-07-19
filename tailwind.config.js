/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app.jsx",
    "./src/components/*.jsx",
    "./src/components/*/*jsx",
    "./src/components/*/*/*jsx",
],
  theme: {
    extend: {},
  },
  plugins: [
    function({addVariant}){
      addVariant('child','&>*');
      addVariant('child-hover','&>*:hover');
    }
  ],
  darkMode:"class"
}

