// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and SITE_BASE are set by the deploy workflow from the repository name:
// a <owner>.github.io repository serves at the root, any other under /<repo>/.
// A custom domain (CNAME) is the root case.
export default defineConfig({
  site: process.env.SITE_URL || 'https://egeipek.info',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
