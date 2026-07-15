import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output — deploys directly to Cloudflare Pages or Vercel with no adapter.
  output: 'static',
  site: 'https://novacompetition.ca',
});
