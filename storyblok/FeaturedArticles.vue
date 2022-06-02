<template>
  <div v-editable="blok" class="my-8 sm:my-16 sm:mx-6">
    <div class="max-w-6xl mx-auto">
      <h1
        class="xl:text-5xl text-gray-800 lg:w-9/12 font-extrabold mb-4 text-3xl px-4 sm:px-0"
      >
        {{blok.title}}
      </h1>
      <p class="text-xl text-gray-600 mb-6 lg:w-9/12 px-4 sm:px-0">
        {{blok.description}}
      </p>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-content-stretch"
      >
        <li v-for="(article, index) in articles" :key="article._uid">
          <ArticleTeaser v-if="article.content" :blok="article" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStoryblokApi } from "@storyblok/vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// fetch the story before rendering the page ('usally at the server')
const storyblokApi = useStoryblokApi();
const { data: articles } = await useAsyncData(
  props.blok.articles.join(","),
  async () => {
    // only get specific articles
    if (props.blok.articles.length) {
      const { data } = await storyblokApi.get("cdn/stories/", {
        by_uuids_ordered: props.blok.articles.join(","),
        version: "draft",
      });
      return data.stories;
    }
  }
);
</script>
