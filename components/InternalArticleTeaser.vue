<template>
  <NuxtLink
    :to="to"
    class="block group h-full bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div
      class="h-56 sm:h-72 relative overflow-hidden"
    >
      <StoryImage
        class="absolute transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 w-full h-full object-cover object-top"
        :image="blok.content?.image"
        params="400x0"
      />
    </div>
    <h3 class="px-4 py-2 my-2 font-semibold text-xl">
      {{ blok.content?.title }}
    </h3>
    <div
      class="line-clamp mx-4 group-hover:text-red-500 transition-color duration-500"
    >
      <RichTextRenderer
        v-if="blok.content?.intro"
        :document="blok.content?.intro"
      />
    </div>
    <div class="italic text-gray-600 text-xs p-4 flex w-full justify-between">
      <p class="truncate">Published: {{ publishedAt }}</p>
      <p class="text-green-700 truncate">5 min read</p>
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

const to = computed(() => "/" + props.blok?.full_slug);

const publishedAt = useNiceDate(props.blok?.created_at ?? Date.now());
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
