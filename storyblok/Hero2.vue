<template>
  <div v-editable="blok" class="relative mb-8 bg-green-100" :style="bgStyle">
    <img
      class="h-full w-full object-cover"
      :style="bgStyle"
      :src="imgUrl"
      :alt="props.blok.image?.alt"
      srcset=""
    />
    <div
      class="pt-8 px-4 lg:px-0 max-w-6xl mx-auto absolute inset-0 flex items-start"
      :class="{
        'bg bg-gradient-to-t from-gray-700/20 via-gray-700/50 to-transparent':
          blok.overlay,
      }"
    >
    <div class="flex flex-col justify-between h-full bg-orange-500/50 px-8 p-6 backdrop-blur max-w-md transform translate-y-8">
      <Component
        class="text-4xl sm:text-4xl md:text-5xl font-bold text-white"
        :is="blok.level ?? 'h1'"
        >{{ blok.heading }}</Component
      >

      <div class="prose prose-black text-lg flex-shrink">
        <rich-text-renderer :document="blok?.content" />
      </div>
      <div class="flex justify-start gap-8 mt-2 sm:mt-4 sm:text-xl font-bold">
        <Component v-for="cta in blok.cta" :is="cta.component" :blok="cta">
        </Component>
      </div>
    </div>
      
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

const bgStyle = computed(
  () =>
    [
      { height: "calc(100vh - 5rem)" },
      { height: "calc(40rem)" },
      { height: "calc(30rem)" },
    ][props.blok?.height ?? 2]
);

const imgUrl = computed(() => props.blok.image?.filename + "/m/1920x0");
</script>

<style lang="css" scoped>
.glow {
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
}
</style>
