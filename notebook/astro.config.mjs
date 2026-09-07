// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://egeipek.info',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
