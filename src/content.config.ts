import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  cover: z.string().optional(),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  status: z.enum(['active', 'completed', 'wip']).default('completed'),
  cover: z.string().optional(),
  link: z.string().optional(),
  draft: z.boolean().default(false),
});

const blog = (base: string) =>
  defineCollection({ loader: glob({ pattern: '*.md', base }), schema: blogSchema });

const projects = (base: string) =>
  defineCollection({ loader: glob({ pattern: '*.md', base }), schema: projectSchema });

export const collections = {
  'pro-blog-de':      blog('./src/content/pro/blog/de'),
  'pro-blog-en':      blog('./src/content/pro/blog/en'),
  'pro-projects-de':  projects('./src/content/pro/projects/de'),
  'pro-projects-en':  projects('./src/content/pro/projects/en'),
  'hobby-blog-de':    blog('./src/content/hobby/blog/de'),
  'hobby-blog-en':    blog('./src/content/hobby/blog/en'),
  'hobby-projects-de': projects('./src/content/hobby/projects/de'),
  'hobby-projects-en': projects('./src/content/hobby/projects/en'),
};
