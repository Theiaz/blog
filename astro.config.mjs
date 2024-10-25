import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind({
      // needed, cause we are defining our own @layer directive
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
  ],
});
