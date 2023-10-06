import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://wvlab/github.io",
  compressHTML: true,
  integrations: [mdx()],
});
