import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    authorRef: z.string(),
    publishDate: z.date(),
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
        isExternal: z.boolean(),
      })
      .optional(),
    draft: z.boolean().optional().default(true),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = { blog: blogCollection };
