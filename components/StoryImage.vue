<template>
  <img
    v-if="props.image"
    :src="src"
    :alt="image?.alt"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  // optional parameters https://www.storyblok.com/docs/image-service
  params: {
    type: String,
    default: "",
  },
});
const src = computed(() => {
  if (getExtension(props.image?.filename) !== "svg") {
    return props.image?.filename + "/m/" + props.params;
  }
  return props.image?.filename;
});
const width = computed(() => props.image?.filename.split("/")[5].split("x")[0]);
const height = computed(
  () => props.image?.filename.split("/")[5].split("x")[1]
);

const getExtension = (path: string) => {
  return path.substring(path.lastIndexOf(".") + 1, path.length) || path;
};
</script>
