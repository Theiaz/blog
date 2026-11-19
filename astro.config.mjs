import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // keep whitespace between elements as before (Astro 7 defaults to "jsx")
  compressHTML: true,
  integrations: [vue(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
