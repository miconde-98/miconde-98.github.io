import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.coerce.date(),
    language: z.enum(['fr', 'en']),
    category: z.enum(['economy', 'econometrics', 'data', 'energy', 'research']),
    published: z.boolean().default(false),
    featured: z.boolean().default(false),
    cover: z.string().optional().default(''),
    tags: z.string().optional().default('')
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title_fr: z.string(), title_en: z.string(),
    summary_fr: z.string(), summary_en: z.string(),
    category: z.enum(['research', 'data', 'ml', 'visualization']),
    status: z.enum(['ongoing','revision','completed']),
    tools: z.string().optional().default(''),
    github: z.string().url().or(z.literal('')).optional().default(''),
    document: z.string().optional().default(''),
    published: z.boolean().default(false),
    featured: z.boolean().default(false)
  })
});

export const collections = { posts, projects };
