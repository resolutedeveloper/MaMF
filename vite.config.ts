import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ✅ Use the stable JS plugin instead
import path from "path";
import pluginChecker from 'vite-plugin-checker';

// ❌ Remove: `lovable-tagger` for now (requires Vite 5 native support)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
    },
  },
  plugins: [
    pluginChecker({ typescript: true }),
    react(), // ✅ Replaced SWC plugin
    // ❌ componentTagger() removed for compatibility
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
