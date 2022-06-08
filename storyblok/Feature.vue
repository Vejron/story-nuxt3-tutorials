<template>
  <Component
    :is="is"
    :to="href"
    v-editable="blok"
    class="p-4 flex items-center sm:flex-col"
  >
    <StoryImage class="h-20 mr-4 sm:mr-0" :image="blok.image" />
    <div class="flex flex-col sm:text-center">
      <Component :is="blok.level ?? 'h3'" class="text-2xl font-bold">{{
        blok.heading
      }}</Component>
      <p class="">{{ blok.paragraph }}</p>
    </div>
  </Component>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const is = computed(() => {
  const link = props.blok.link;
  if (link?.url || link?.cached_url) {
    return resolveComponent("NuxtLink");
  }
  return "div";
});

const href = computed(() => {
  const link = props.blok.link;
  if (link?.url || link?.cached_url) {
    return link.linktype === "story" ? `/${link.cached_url}` : link.url;
  }
});
</script>
