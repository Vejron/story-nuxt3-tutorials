<template>
  <header class="w-full z-10 relative">
    <div
      class="bg-white w-full transition-all duration-500"
      :class="[arrivedState?.top? 'shadow-sm': 'shadow-xl' ]"
    >
      <TheAlertMessage/>
      <nav class="py-4 px-4 block text-lg font-semibold flex w-full items-center">
        <TheBurger :items="story?.content.navigational_items" class="sm:hidden" />
        <div class="hidden sm:flex">
          <NavItem :blok="navItem" v-for="navItem in story?.content.navigational_items" />
        </div>
        
        <div class="flex-grow"></div>
        <LanguageSwitch />
        <SiteSearch />
        
      </nav>
    </div>
   
  </header>
</template>

<script setup lang="ts">
import { useStoryblokApi } from "@storyblok/vue";

// get the correct languge to fetch
const lang = useCurrentLang()
// fetch our global settings for the navigation menu
const storyblokApi = useStoryblokApi();
const path = "cdn/stories/_global-settings";
const { data: story } = await useAsyncData(path, async () => {
  const { data } = await storyblokApi.get(path, {
    version: useRuntimeConfig().public.storyblokPublished ? "published": "draft",
    language: lang.value.lang,
    resolve_links: "url"
  });
  return data.story;
});


const { arrivedState } = process.client
  ? useScroll(document)
  : { arrivedState: {top: true} };

</script>
