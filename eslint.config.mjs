import eslint from "@eslint/js";
import { vueTsConfigs, withVueTs } from "@vue/eslint-config-typescript";
import prettierConfig from "eslint-config-prettier";
import pluginAstro from "eslint-plugin-astro";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

export default withVueTs(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  pluginAstro.configs.recommended,
  prettierConfig,
);
