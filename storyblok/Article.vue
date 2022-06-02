<template>
  <div class="bg-drop flex flex-col">
    <div class="sm:p-8 p-4 sm:my-10 mx-auto bg-white">
      <article
        class="text-base prose prose-slate lg:text-lg mx-auto"
        v-editable="blok"
      >
        <h1 class="not-prose font-bold text-3xl sm:text-5xl lg:text-6xl">
          {{ blok.title }}
        </h1>
        <div class="italic text-gray-600 text-sm my-4 lg:my-6">
          <p>Published: {{ publishedAt }}</p>
        </div>
        <StoryImage
          class="transform rotate-2"
          :image="blok.image"
          params="500x0"
        />
        <RichTextRenderer :document="blok.intro" />
        <RichTextRenderer :document="blok.content" />
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
  story: {
    type: Object,
    required: true,
  },
});
const publishedAt = useNiceDate(props.story?.created_at ?? Date.now());
</script>

<style lang="css" scoped>
.bg-drop {
  background-attachment: fixed;
  background-image: url("data:image/svg+xml;utf8,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(3) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M15 22h10m-10-4h10M35 2h10M35 38h10m-50 0H5M-5 2H5'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(258.5,59.4%,59.4%,1)' fill='none'/><path d='M18-5V5m4-10V5m16 10v10M18 35v10m4-10v10M2 15v10'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(339.6,82.2%,51.6%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
}
</style>
