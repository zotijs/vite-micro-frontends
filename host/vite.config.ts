import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteHeader: "http://localhost:5001/assets/headerRemoteEntry.js",
        remoteFooter: "http://localhost:5002/assets/footerRemoteEntry.js",
        remoteCounter: "http://localhost:5003/assets/counterRemoteEntry.js",
      },
      shared: ["@reduxjs/toolkit", "react", "react-dom", "react-redux"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
