<template>
  <NuxtLink
    :to="to"
    class="block group h-full bg-gradient-to-tr from-gray-200 via-transparent to-light-900"
  >
    <div
      class="h-56 sm:h-72 relative flex flex-col justify-end overflow-hidden"
    >
      <StoryImage
          class="absolute transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 w-full h-full object-cover object-top"
          :image="blok.content.image"
          params="400x0"
        />
    </div>
    <div class="italic text-gray-600 text-sm p-4 flex w-full justify-between">
      <p>Published: {{ publishedAt }}</p>
      <p class="text-indigo-600">5 min read</p>
    </div>
    <h3 class="px-4 bg-slate-200 py-2 mb-2 font-semibold text-xl">
      {{ title }}
    </h3>
    <div
      class="line-clamp mx-4 mb-4 group-hover:text-red-500 transition-color duration-500"
    >
      <RichTextRenderer :document="intro" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const publishedAt = useNiceDate(props.blok?.created_at ?? Date.now());
const title = computed(() => props.blok?.content?.title);
const intro = computed(() => props.blok?.content?.intro);
const to = computed(() => {
  if (props.blok?.full_slug) {
    return "/" + props.blok.full_slug;
  }
});
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
