<template>
  <div
    class="block flex flex-col h-full bg-white rounded-md shadow-lg overflow-hidden"
  >
    <div class="h-56 sm:h-72 relative overflow-hidden">
      <StoryImage
        class="absolute w-full h-full object-cover object-top"
        :image="blok.image"
        params="400x0"
      />
    </div>
    <div class="flex flex-col flex-grow">
      <h3 class="px-4 py-2 my-2 font-semibold text-xl">
        {{ blok.title }}
      </h3>
      <div
        class="line-clamp mx-4 group-hover:text-red-500 transition-color duration-500"
      >
        <RichTextRenderer
          v-if="blok.content?.intro"
          :document="blok.content?.intro"
        />
      </div>
      <div class="flex-grow"></div>
      <div class="p-4 flex w-full gap-8">
        <Component v-for="cta in blok.cta" :is="cta.component" :blok="cta" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>