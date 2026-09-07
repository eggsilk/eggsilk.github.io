// @ts-check
import { defineConfig } from 'astro/config';

// `site` is a placeholder until the domain is decided. It only feeds the
// citation line and canonical URLs; nothing else depends on it.
export default defineConfig({
  site: 'https://egeipek.example',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
