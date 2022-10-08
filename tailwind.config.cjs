/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "rich-black": "#00171F",
        "prussian-blue": "#00263C",
        "blue-sapphire": "#005980",
        "celadon-blue": "007EA7",
        "carolina-blue": "#009ED8",
        "cyan-blue": "#17B0EA",
      },
      fontFamily: {
        Silkscreen: ["Silkscreen", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1s ease-out .8s 1 normal both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
      },
    },
  },
  plugins: [],
};
