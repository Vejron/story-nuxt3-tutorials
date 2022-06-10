<template>
  <div v-editable="blok" class="py-8 xl:py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h1
        class="xl:text-5xl text-gray-800 lg:w-9/12 font-extrabold mb-4 text-3xl md:text-center md:mx-auto"
      >
        {{ blok.title }}
      </h1>
      <p class="text-xl text-gray-600 mb-6 lg:w-9/12 md:text-center md:mx-auto">
        {{ blok.description }}
      </p>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-content-stretch"
      >
        <li v-for="(article, index) in articles" :key="article._uid">
          <InternalArticleTeaser v-if="article.content" :blok="article" />
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
<style>
.bg-drop {
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 450' preserveAspectRatio='none'%3E%3Cpath fill='transparent' d='M0 0h900v450H0z'/%3E%3Cpath fill='%23003451' d='M900 338c-24-18-49-36-80-39-31-4-69 6-86-11-18-17-15-61-40-81-26-21-79-17-86-38-8-21 31-67 31-99s-38-51-76-70h337Z'/%3E%3Cpath fill='%23008154' d='M900 225c-16-12-33-24-53-26-21-2-46 5-58-7-12-11-10-41-27-54-16-14-52-11-57-25s21-45 21-66c0-22-25-34-51-47h225Z'/%3E%3Cpath fill='%2301a304' d='M900 113c-8-6-16-12-27-13-10-2-23 2-28-4-6-5-5-20-14-27-8-7-26-6-28-13-3-7 10-22 10-33 0-10-13-17-25-23h112Z'/%3E%3Cg%3E%3Cpath fill='%23003451' d='M0 113c23 24 47 49 75 56 29 7 63-3 82 10 18 13 23 48 48 66 26 18 72 17 87 36 15 20-2 59 1 91 2 31 23 55 45 78H0Z'/%3E%3Cpath fill='%23008154' d='M0 225c16 16 31 33 50 38s42-2 54 6c13 9 16 33 33 44 17 12 48 12 58 25 10 12-1 39 0 60 2 21 16 36 30 52H0Z'/%3E%3Cpath fill='%2301a304' d='M0 338c8 8 16 16 25 18 10 3 21-1 27 4 7 4 8 16 16 22 9 6 24 5 29 12 5 6 0 19 1 30 0 10 7 18 15 26H0Z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
