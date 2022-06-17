const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "light-primary": "#5761B2",
        "light-secondary": "#1FC5A8",
        "light-accent": "#8c0105ff",
        "dark-primary": "#1d3354ff",
        "dark-secondary": "#e9fff9ff",
        "dark-accent": "#d64045ff",
      },
    },
  },
  plugins: [],
};
