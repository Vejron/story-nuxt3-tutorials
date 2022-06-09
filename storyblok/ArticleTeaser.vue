<template>
 <InternalArticleTeaser :blok="story" />
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
    version: "draft",
    find_by: "uuid",
  });
  return data.story;
});

const to = computed(() =>
  "/" + story.value?.full_slug
);

const publishedAt = useNiceDate(story.value?.created_at ?? Date.now());
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
