/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths for where Tailwind classes are used
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        mint: "#c5e7dc",
        pine: "#293134",
        cherry: "#d85144",
        plum: "#60162c",
        mustard: "#ffdb99",
        slateNight: "#37474f",
        teal: "#0d6060",
        sage: "#f4f6f3",
      },
      spacing: {
        96: "24rem", // You can add custom spacing sizes
      },
    },
  },
  plugins: [],
};

export default config;


