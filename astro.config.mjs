import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// GitHub Actions injects these values based on the repository owner and name.
const site = process.env.SITE_URL || 'https://miconde-98.github.io';
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/draft/') })],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }
});
