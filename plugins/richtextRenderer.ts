import { defineNuxtPlugin } from "#app";
import {
  defineResolvers,
  plugin,
} from "@marvr/storyblok-rich-text-vue-renderer";
import StoryImage from "~/components/StoryImage.vue";
import VideoTube from "~/storyblok/VideoTube.vue";
import { NodeTypes } from "@marvr/storyblok-rich-text-types";
import FormBuilder from "~/storyblok/FormBuilder.vue";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(
    plugin({
      resolvers: defineResolvers({
        [NodeTypes.IMAGE]: ({ attrs }) =>
          h(StoryImage, {
            image: { filename: attrs.src, alt: attrs.alt },
            params: "0x500",
          }),
        components: {
          "video-tube": ({ fields }) =>
            h(VideoTube, {
              blok: { youtube_video_id: fields.youtube_video_id },
            }),
            "form-builder": ({ fields }) =>
            h(FormBuilder, { blok: { ...fields, embedded: true } }),
        },
      }),
    })
  );
});
