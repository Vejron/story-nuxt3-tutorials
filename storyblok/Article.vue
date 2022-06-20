<template>
  <div class=" sm:py-10">
    <div class="sm:p-8 p-4 bg-white mx-auto" style="max-width: fit-content">
      <article
        class="text-sm sm:text-base lg:text-lg max-w-[75ch] prose prose-slate"
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
        <RichTextRenderer :document="blok?.intro" />
        <RichTextRenderer :document="blok?.content" />
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

</style>
