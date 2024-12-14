import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import vuePugPlugin from "vue-pug-plugin";

export default defineConfig({
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          // 'preprocessOptions' is passed through to the pug compiler
          plugins: [vuePugPlugin],
        },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
