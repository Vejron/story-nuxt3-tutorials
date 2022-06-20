import { defineNuxtConfig } from "nuxt";
import fs from "fs";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
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
  runtimeConfig: {
    apiSecret: '',
    public: {
      storyblokPublished: false,
    }
  },
  build: {
    transpile: ["@marvr/storyblok-rich-text-vue-renderer", "@headlessui/vue"],
  },
  modules: ['nuxt-windicss', "@vueuse/nuxt", '@formkit/nuxt',],
  buildModules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.NUXT_PUBLIC_STORYBLOK_API_TOKEN,
        bridge: !process.env.NUXT_PUBLIC_STORYBLOK_PUBLISHED,
        https: true,
      },
    ],
  ],
  windicss: {
    analyze: true
  },
});
