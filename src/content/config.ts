import { z, defineCollection } from "astro:content";
const airdrops = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    link: z.string().url(),
    tge: z.string(),
  }),
});
export const collections = { airdrops };
