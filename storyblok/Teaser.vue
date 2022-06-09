<template>
  <div v-editable="blok" class="sm:text-center">
    <Component :is="blok.level ?? 'h3'" class="text-4xl sm:text-6xl font-black">{{
      blok.heading
    }}</Component>
    <p class="max-w-xl text-lg my-6 mx-auto ">{{ blok.tagline }}</p>
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
