<template>
  <div v-editable="blok">
    <iframe
      class="w-full min-h-50 sm:min-h-sm"
      :src="`https://www.youtube.com/embed/${blok.youtube_video_id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
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