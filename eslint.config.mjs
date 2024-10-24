import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import pluginAstro from "eslint-plugin-astro";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...pluginAstro.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.ts", "**/*.astro", "**/*.vue"],
    rules: {},
  }
);
