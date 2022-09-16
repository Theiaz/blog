import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

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
    image(),
  ],
});
