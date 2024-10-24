import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginVue from "eslint-plugin-vue";
export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    files: ["**/*.ts", "**/*.astro", "**/*.vue"],
    rules: {},
  },
];
