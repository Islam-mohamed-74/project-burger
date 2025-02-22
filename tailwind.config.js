/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../project-burger/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#FFCC00",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
      },
      container: {
        center: true,
        padding: {
          DEFULT: "1rem",
          sm: "1.5rem",
        },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// theme: {

//   extend: {},
//   gridTemplateColumns: {
//     300: "repeat(auto-fill, minmax(300px, 1fr))",
//     450: "repeat(auto-fill, minmax(450px, 1fr))",
//   },

// },
