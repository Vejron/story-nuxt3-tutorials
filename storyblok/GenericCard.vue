<template>
  <div
    v-editable="blok"
    class="block flex flex-col h-full"
    :class="{'bg-white rounded-md shadow-lg overflow-hidden': !blok.flat}"
  >
    <div class="h-56 sm:h-72 relative overflow-hidden">
      <VideoTube v-if="blok?.youtube_video_id" :blok="{youtube_video_id: blok.youtube_video_id}" />
      <StoryImage
        v-else
        class="absolute w-full h-full object-cover object-center"
        :image="blok.image"
        params="400x0"
      />
    </div>
    <div class="flex flex-col flex-grow" :class="{'px-4': !blok.flat}">
      <Component
        v-if="blok.heading"
        class="mt-4 font-semibold text-xl"
        :is="blok.level ?? 'h1'"
        >{{ blok.heading }}</Component
      >
      <p class="line-clamp my-4" v-if="blok.paragraph">{{ blok.paragraph }}</p>
      <div class="flex-grow"></div>
      <div v-if="blok?.cta?.length" class="py-4 flex w-full font-semibold gap-8">
        <Component v-for="cta in blok.cta" :is="cta.component" :blok="cta" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
