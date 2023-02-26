import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact({ prefreshEnabled: true })],
});
