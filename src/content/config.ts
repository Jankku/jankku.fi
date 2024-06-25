import { z, defineCollection, type ImageFunction } from 'astro:content';

const projectSchema = (image: ImageFunction) =>
  z
    .object({
      title: z.string(),
      description: z.string(),
      platform: z.array(z.enum(['web', 'server', 'android', 'mobile'])),
      features: z.array(z.string()),
      link: z.union([z.string(), z.string().url()]).optional(),
      github: z.string().url().optional(),
      logo: z.string(),
      screenshots: z.array(image()).optional(),
      gradient: z.enum([
        'kuntarekry',
        'liikennekartta',
        'eino',
        'alphawall',
        'yle-rss-reader',
        'notes',
        'elainvisa',
      ]),
      tags: z.array(z.string()),
    })
    .refine(({ github, link }) => github || link, {
      message: 'Either github or external link must be defined',
    });

export type Project = z.infer<ReturnType<typeof projectSchema>>;

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => projectSchema(image),
});

export const collections = {
  projects: projectsCollection,
};
