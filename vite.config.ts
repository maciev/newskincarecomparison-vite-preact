import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  define: { "process.env": process.env },
  plugins: [preact({ prefreshEnabled: true })],
});
