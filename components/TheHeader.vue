<template>
  <header class="w-full z-10">
    <div
      class="fixed bg-white w-full h-20 px-4 sm:px-6 flex transition transition-all duration-500"
      :class="[arrivedState?.top? 'shadow-sm': 'shadow-xl' ]"
    >
      <nav class="py-3 text-lg font-semibold sm:py-5 flex w-full items-center">
        <NavItem :blok="navItem" v-for="navItem in story.content.navigational_items" />
        <div class="flex-grow"></div>
      </nav>
    </div>
    <div class="h-20"></div>
  </header>
</template>

<script setup lang="ts">
import { useStoryblokApi } from "@storyblok/vue";

// fetch our global settings for the navigation menu
const storyblokApi = useStoryblokApi();
const path = "cdn/stories/_global-settings";
const { data: story } = await useAsyncData(path, async () => {
  const { data } = await storyblokApi.get(path, {
    version: "draft",
  });
  return data.story;
});


const { arrivedState } = process.client
  ? useScroll(document)
  : { arrivedState: {top: true} };

</script>
