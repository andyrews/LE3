/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'discord-accent': '#5865f2'
      },
      fontFamily: {
        sans: [
          'gg Sans',
        ]
      },
    }
  },
  daisyui: {
    themes: [
      "coffee"
    ]
  },
  plugins: [
    require("daisyui"),
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "rgb(30, 31, 34) transparent",
          "&::-webkit-scrollbar": {
            width: "8px", // Scrollbar width
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
            padding: "2px", // Adjust the padding around the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(30, 31, 34)",
            borderRadius: "9999px", // Round edges
            border: "2px solid transparent", // Optional border
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}

