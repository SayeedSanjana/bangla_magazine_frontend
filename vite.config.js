import { fileURLToPath, URL } from "node:url";
import path from "path"; // ✅ Ensure 'path' is imported

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // ✅ Correct alias for @
      "~": path.resolve(__dirname, "./src"), // ✅ Additional alias (if needed)
    },
  },
  server: {
    historyApiFallback: {
      // ✅ Tell Vite NOT to redirect PDF/static requests to index.html
      rewrites: [{ from: /^\/pdfs\/.*$/, to: (ctx) => ctx.parsedUrl.pathname }],
    },
  },
});
