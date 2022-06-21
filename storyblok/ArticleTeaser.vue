<template>
 <InternalArticleTeaser v-editable="blok" v-if="story" :blok="story" :embedded="blok.embedded" />
</template>

<script setup lang="ts">

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  }
});

const storyblokApi = useStoryblokApi();
const path = `cdn/stories/${props.blok.article}`;
// useAsyncData behaves strange 
const { data: story } = await useAsyncData(path + props.blok._uid, async () => {
  // get specified article by uuid
  const { data } = await storyblokApi.get(path, {
    version: useRuntimeConfig().public.storyblokPublished ? "published": "draft",
    find_by: "uuid",
  });
  return data.story;
});
</script>