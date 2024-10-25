import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
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
