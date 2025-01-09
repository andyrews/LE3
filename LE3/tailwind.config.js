/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'discord-primary': '#313338',
        'discord-secondary': '#2b2d31',
        'discord-tertiary': '#1e1f22',
        'discord-accent': '#5865f2'
      },
    }
  },
  plugins: [
    require("daisyui"),
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "rgb(30, 31, 34) transparent",
          scrollbarGutter: "stable both-edges"
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}

