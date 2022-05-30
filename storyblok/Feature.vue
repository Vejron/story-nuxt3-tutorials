<template>
  <div
    v-editable="blok"
    class="p-6 bg-amber-300 rounded-lg flex items-center justify-center"
  >
    <p class="text-2xl font-bold">{{ blok.name }}</p>
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
