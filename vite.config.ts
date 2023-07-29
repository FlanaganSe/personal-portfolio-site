import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import type { InlineConfig } from "vitest";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
} as VitestConfigExport);
