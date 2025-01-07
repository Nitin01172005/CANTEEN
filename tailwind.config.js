/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT:"1rem",
          sm:"3rem"
        }
      }
    },
  },
  plugins: [],
}

