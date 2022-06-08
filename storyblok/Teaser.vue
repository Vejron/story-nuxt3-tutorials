<template>
  <div v-editable="blok" class="pt-12 px-4 sm:text-center max-w-6xl mx-auto">
    <Component :is="blok.level ?? 'h3'" class="text-4xl sm:text-6xl font-black">{{
      blok.heading
    }}</Component>
    <p class="max-w-xl my-6 mx-auto ">{{ blok.tagline }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
