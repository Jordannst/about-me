// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical domain — canonical links and og:image URLs derive from this.
  site: 'https://jordannst.dev',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
      watch: {
        ignored: ['**/.local/**', '**/.git/**'],
      },
    }
  }
});
