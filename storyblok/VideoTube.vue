<template>
  <div v-editable="blok" class="relative w-full flex justify-center items-center">
    <img
      v-if="stop"
      class="w-full h-50 object-cover sm:h-72"
      :src="`https://img.youtube.com/vi/${blok.youtube_video_id}/hqdefault.jpg`"
      alt="video preview"
    />
    <iframe
      v-else
      class="w-full h-50 sm:h-72"
      :src="`https://www.youtube.com/embed/${blok.youtube_video_id}?enablejsapi=1`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <button @click="stop = false" class="absolute rounded-full border-4 border-green-400 text-white h-25 w-25">Play</button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const stop = ref(true);
</script>
