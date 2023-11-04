/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',

  
      },
      spacing: {
        xPadding: "60px",
        xPadding2: "20px",
        myMargin: "80px",
        mtMargin: "30px",
      },

      fontFamily: {

      }


    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
