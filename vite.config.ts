import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";
import "dotenv/config";

export default ({ mode }) => {
  //Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  //const env = loadEnv(mode, process.cwd());

  //require("dotenv").config({ path: `./.env` });

  return defineConfig({
    plugins: [preact({ prefreshEnabled: true })],
    define: {
      "process.env.VITE_SUPABASE_HOST_URL": process.env.ENV,
      "process.env.VITE_SUPABASE_API_KEY": process.env.ENV,
    },
  });
};
