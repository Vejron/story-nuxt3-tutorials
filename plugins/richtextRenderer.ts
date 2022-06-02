import { defineNuxtPlugin } from "#app";
import {
  defineResolvers,
  plugin,
} from "@marvr/storyblok-rich-text-vue-renderer";
import StoryImage from "~/components/StoryImage.vue";
import { NodeTypes } from "@marvr/storyblok-rich-text-types";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(
    plugin({
      resolvers: defineResolvers({
        [NodeTypes.IMAGE]: ({ attrs }) =>
          h(StoryImage, {
            image: { filename: attrs.src, alt: attrs.alt },
            params: "0x500",
          }),
      }),
    })
  );
});

