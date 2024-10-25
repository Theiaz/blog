import eslint from "@eslint/js";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import prettierConfig from "eslint-config-prettier";
import pluginAstro from "eslint-plugin-astro";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),
  ...pluginAstro.configs.recommended,
  prettierConfig,
);
