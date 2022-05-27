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
        "light-primary": "#fff",
        "light-secondary": "#1d3354ff",
        "light-accent": "#8c0105ff",
        "dark-primary": "#1d3354ff",
        "dark-secondary": "#e9fff9ff",
        "dark-accent": "#d64045ff",
      },
    },
  },
  plugins: [],
};
