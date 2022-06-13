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
  build: {
    transpile: ["@marvr/storyblok-rich-text-vue-renderer"],
  },
  modules: ["@unocss/nuxt", "@vueuse/nuxt", '@formkit/nuxt',],
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
  unocss: {
    typography: {
      cssExtend: {
        code: {
          color: "#8b5cf6",
        },
        ".prose pre": {
          border: "2px solid red",
          "background-color": "black",
          color: "white",
        },
        "a:hover": {
          color: "#f43f5e",
        },
        "a:visited": {
          color: "#14b8a6",
        },
      },
    },
  },
});
