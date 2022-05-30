<template>
  <div v-editable="blok" class="my-8 p-8 bg-blue-500 rounded-lg text-center">
    <h2 class="text-white text-4xl font-bold">{{ blok.headline }}</h2>
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
