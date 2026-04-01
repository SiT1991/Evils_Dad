import { defineConfig } from "vite";
import { chromeExtension } from "vite-plugin-chrome-extension";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "manifest.json"
    }
  },

  plugins: [
    chromeExtension()
  ]
});
