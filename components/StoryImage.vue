<template>
  <img
    v-if="props?.image?.filename"
    :src="src"
    :alt="image?.alt"
    :width="width"
    :height="height"
  />
  <div v-else class="h-full w-auto flex justify-center items-center bg-gray-200 overflow-hidden">
    <span class="text-red-400 text-2xl font-bold transform rotate-45">NO-IMAGE</span>
  </div>
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
// TODO: default image
const src = computed(() => {
  const filename = props.image?.filename;
  if (filename?.length) {
    if (getExtension(filename) !== "svg") {
      return filename + "/m/" + props.params;
    }
    return filename;
  }
});
const width = computed(() => props.image?.filename?.split("/")[5].split("x")[0]);
const height = computed(() => props.image?.filename?.split("/")[5].split("x")[1]);

const getExtension = (path: string) => {
  return path.substring(path.lastIndexOf(".") + 1, path.length) || path;
};
</script>
