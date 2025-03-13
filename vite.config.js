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
});
