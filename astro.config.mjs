import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jschaefer.dev/",
  integrations: [
    vue(),
    tailwind({
      // needed, cause we are defining our own @layer directive
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    sitemap(),
  ],
});
