// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://emmwei.github.io',
  base: '/emma-portfolio/',
  vite: {
      plugins: [tailwindcss()],
    },
});
