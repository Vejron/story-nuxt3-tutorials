<template>
  <div v-editable="blok" :class="{'sm:text-center': blok.centered}">
    <Component
      :is="blok.level ?? 'h2'"
      class="text-2xl sm:text-4xl font-bold"
      >{{ blok.heading }}</Component
    >
    <div class="prose prose-slate text-lg max-w-xl" :class="{'sm:mx-auto': blok.centered}">
      <rich-text-renderer :document="blok.content" />
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
});
</script>
