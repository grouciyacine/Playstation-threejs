/** @type {import('tailwindcss').Config} */
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      screens:{
        'mini':'200px',
        'mini1':'380px'
      },
        colors:{
      primary:'#00439C',
      secondary:'#0070D1',
      'black-100':'#1F1F1F',
      
    },
    fontFamily:{
      sans:['Open Sans',"sans-serif"]
    }
  },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/blue-gradient-background-6517.jpeg')",
      "play": "url('/src/assets/2310056.jpg')",
      "games":"url('src/assets/games.jpg')"
    },
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [{ family: "Open Sans", variants: ["400", "700"] }],
    }),
  ],
}

