import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://revista.uct.cl",
  integrations: [svelte(), sitemap()],
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true },
  vite: { plugins: [tailwindcss()] },
});
