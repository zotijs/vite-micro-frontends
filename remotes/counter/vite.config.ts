import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "counter_app",
      filename: "counterRemoteEntry.js",
      exposes: {
        "./Counter": "./src/components/counter/Counter",
      },
      shared: ["@reduxjs/toolkit", "clsx", "react", "react-dom", "react-redux"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
