<template>
  <Component
    :is="is"
    :to="href"
    v-editable="blok"
    class="group flex items-center sm:flex-col"
  >
    <StoryImage
      class="h-20 w-20 mr-4 sm:mr-0"
      :class="{ 'group-hover:animate-rubber-band': isLink }"
      :image="blok.image"
    />
    <div
      :class="{ 'transition duration-300 group-hover:text-green-600': isLink }"
      class="flex flex-col sm:text-center"
    >
      <Component :is="blok.level ?? 'h3'" class="text-2xl font-bold mb-3 mt-6">{{
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
  if (isLink) {
    return resolveComponent("NuxtLink");
  }
  return "div";
});

const isLink = computed(() => {
  const link = props.blok.link;
  return link?.url || link?.cached_url;
});

const href = computed(() => {
  const link = props.blok.link;
  if (isLink) {
    return link.linktype === "story" ? `/${link.cached_url}` : link.url;
  }
});
</script>
