<template>
  <div
    v-editable="blok"
    class="block flex flex-col h-full bg-white rounded-md shadow-lg overflow-hidden"
  >
    <div class="h-56 sm:h-72 relative overflow-hidden">
      <StoryImage
        class="absolute w-full h-full object-cover object-center"
        :image="blok.image"
        params="400x0"
      />
    </div>
    <div class="flex flex-col flex-grow">
      <Component
        class="px-4 py-2 my-2 font-semibold text-xl"
        :is="blok.level ?? 'h1'"
        >{{ blok.heading }}</Component
      >
      <p class="line-clamp px-4" v-if="blok.paragraph">{{ blok.paragraph }}</p>
      <div class="flex-grow"></div>
      <div class="p-4 flex w-full font-semibold gap-8">
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
