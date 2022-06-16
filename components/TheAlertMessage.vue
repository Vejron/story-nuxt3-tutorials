<template>
  <section v-if="show" role="alert" class="bg-red-500 text-white py-2 px-8 mini-prose">
    <RichTextRenderer :document="alertStory?.content?.message"/>
  </section>
</template>

<script setup lang="ts">
import { useStoryblokApi } from "@storyblok/vue";
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";

// get the correct languge to fetch
const lang = useCurrentLang();
// fetch our global settings for the navigation menu
const storyblokApi = useStoryblokApi();
const path = "cdn/stories";
const { data: alertStory } = await useAsyncData(path, async () => {
  const { data } = await storyblokApi.get(path, {
    version: "draft",
    language: lang.value.lang,
    starts_with: "_alert-messages/"
  });
  if(data?.stories?.length) {
    // I'il just pick the first message for now
    // mayby pick the latest or something like that
    return data.stories[0];
  }
});

const show = computed(() => {
    if(alertStory.value?.content?.end_date ) {
      console.log(new Date(alertStory.value.content.end_date,));
      return true
    }
    return false;
});

</script>

<style>
.mini-prose a {
  text-decoration: underline;
}
.mini-prose a:hover {
  color: blue;
}
</style>

