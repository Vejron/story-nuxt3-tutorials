<template>
  <NuxtLink
    v-if="!embedded"
    :to="to"
    class="block flex flex-col group h-full bg-white rounded-md shadow-lg overflow-hidden"
  >
    <div class="h-56 sm:h-72 relative overflow-hidden">
      <StoryImage
        class="absolute transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 w-full h-full object-cover object-top"
        :image="blok?.content?.image"
        params="400x0"
      />
    </div>
    <div class="flex flex-col flex-grow">
      <h3 class="px-4 py-2 my-2 font-semibold text-xl">
        {{ blok?.content?.title }}
      </h3>
      <div
        class="line-clamp mx-4 group-hover:text-red-500 transition-color duration-500"
      >
        <RichTextRenderer
          v-if="blok.content?.intro"
          :document="blok?.content?.intro"
        />
      </div>
      <div class="flex-grow"></div>
      <div class="italic text-gray-600 text-xs p-4 flex w-full justify-between">
        <p class="truncate">Published: {{ publishedAt }}</p>
        <p class="text-green-700 truncate">5 min read</p>
      </div>
    </div>
  </NuxtLink>

  <NuxtLink
    v-else
    :to="to"
    class="block flex group relative rounded-2xl bg-blue-200 overflow-hidden !no-underline"
  >
    <div class="px-4 flex flex-col">
      <h3>
        {{ blok?.content?.title }}
      </h3>
      <div
        class="line-clamp group-hover:text-red-500 transition-color duration-500"
      >
        <RichTextRenderer
          v-if="blok.content?.intro"
          :document="blok?.content?.intro"
        />
      </div>
      <div class="flex-grow"></div>
      <div class="italic text-gray-600 text-xs flex w-full justify-between">
        <p class="truncate">Published: {{ publishedAt }}</p>
        <p class="text-green-700 truncate hidden sm:block">5 min read&nbsp;</p>
      </div>
    </div>
    <div class="w-2/5 flex-shrink-0 relative overflow-hidden">
      <StoryImage
        class="!m-0 clip-left absolute transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 w-full h-full object-cover object-top"
        :image="blok?.content?.image"
        params="400x0"
      />
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
  embedded : {
    type: Boolean,
    default: false,
  }
});
const lang = useCurrentLang();
const to = computed(() =>
  lang.value.lang === "sv"
    ? "/" + props.blok?.full_slug
    : "/" + lang.value.lang + "/" + props.blok?.full_slug
);

const publishedAt = useNiceDate(props.blok?.created_at ?? Date.now());
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.clip-left {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 5% 50%);
  clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
} 
</style>
