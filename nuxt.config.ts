import { defineNuxtConfig } from "nuxt";
import fs from "fs";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      https: {
        key: fs.readFileSync("cert/localhost+2-key.pem"),
        cert: fs.readFileSync("cert/localhost+2.pem"),
      },
      hmr: {
        protocol: "wss",
      },
    },
  },
  modules: ["@unocss/nuxt", "@vueuse/nuxt"],
  buildModules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.NUXT_PUBLIC_STORYBLOK_API_TOKEN,
        bridge: process.env.NODE_ENV !== "production",
        https: true,
      },
    ],
  ],
  css: ["@unocss/reset/tailwind.css"],
});
