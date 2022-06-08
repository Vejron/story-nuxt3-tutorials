<template>
  <div v-editable="blok">
    <div class="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <Component
        v-for="blok in props.blok.columns"
        :is="blok.component"
        :key="blok._id"
        :blok="blok"
      />
    </div>
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
