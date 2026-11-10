import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://revista.uct.cl",
  integrations: [svelte()],
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true },
  vite: { plugins: [tailwindcss()] },
});
