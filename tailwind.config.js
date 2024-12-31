/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      // },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        marck: ['"Marck Script"', "cursive"],
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "light-yellow": "#FEF9E9",
        "light-red": "#ff8b7d",
        "light-blue": "#e0e7ff",
        "midnight-sapphire": "#280B8B",
        "honey-gold": "#EAA52C",
        "deep-red-wine": "#970F34",
        "burgundy-crush": "#850B2D",
        "crimson-bloom": "#C70039",
        "rich-mahagony": "#733307",
        "burnt-amber": "#A05019",
        "golden-sunrise": "#F0B323",
        "autumn-auburn": "#85280B",
        "deep-cerulean": "#0B378B",
        "regal-blue": "#e2e9ed",
      },
    },
  },
  plugins: [],
};
