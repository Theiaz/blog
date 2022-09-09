const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    maxWidth: {
      prose: "80ch",
    },
    extend: {
      colors: {
        "light-primary": "#eee",
        "light-secondary": "#111",
        "light-accent": "#FCA311",
        "dark-primary": "#111",
        "dark-secondary": "#eee",
        "dark-accent": "#FCA311",
      },
    },
  },
  plugins: [],
};
