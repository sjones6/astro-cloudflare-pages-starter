import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z
      .string()
      .max(100, 'The title length must be less than or equal to 100 chars'),
    description: z.string(),
    author: z.string(),
    authorTwitter: z.string(),
    date: z.string(),
    draft: z.coerce.boolean().default(false).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
