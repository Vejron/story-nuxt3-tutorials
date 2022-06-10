<template>
  <div
    v-editable="blok"
    class="relative w-full flex justify-center items-center"
  >
    <img
      v-if="stop"
      class="w-full h-50 object-cover sm:h-72"
      :src="`https://img.youtube.com/vi/${blok.youtube_video_id}/hqdefault.jpg`"
      alt="video preview"
    />
    <iframe
      v-else
      class="w-full h-50 sm:h-72"
      :src="`https://www.youtube.com/embed/${blok.youtube_video_id}?enablejsapi=1&autoplay=1&mute=1`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <button
      v-show="stop"
      @click="stop = false"
      class="absolute text-green-400 h-25 w-25 transition-all transform hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="m371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248s248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256z"
        />
      </svg>
      <span class="sr-only">Play</span>
    </button>
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
