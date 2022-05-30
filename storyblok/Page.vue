<template>
  <div v-editable="blok">
    <Component
      v-for="blok in props.blok.body"
      :is="blok.component"
      :key="blok._id"
      :blok="blok"
    />
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
