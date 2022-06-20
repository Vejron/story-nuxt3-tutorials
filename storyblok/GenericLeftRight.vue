<template>
  <section
    v-editable="blok"
    :class="{ 'sm:flex-row-reverse': (blok.full_width_variant? !blok.left: blok.left) }"
    class="relative my-10 flex w-full flex-col sm:flex-row overflow-hidden"
  >
    <div
      class="w-full min-w-[50%] flex flex-col h-56 sm:h-auto"
      :class="[blok.full_width_variant ? 'sm:absolute sm:h-full' : 'sm:w-1/2']"
    >
      <StoryImage
        class="object-cover h-full"
        :class="[blok.left ? 'clip-left' : 'clip-right', blok.full_width_variant ? 'w-full clip-none' : '']"
        :image="blok.image"
        loading="lazy"
        params="0x500"
      />
    </div>

    <div
      class="flex flex-col justify-center py-8 sm:min-h-md"
      :class="[blok.left ? 'sm:pr-8' : 'sm:pl-8', blok.full_width_variant ? 'relative sm:px-8 sm:w-2/5 sm:bg-white/60 backdrop-blur-sm' : '']"
    >
      <h2 class="text-3xl sm:text-5xl mb-4 font-bold text-green-800">
        {{ blok.heading }}
      </h2>
      <div class="prose prose-black prose-lg py-4">
        <rich-text-renderer :document="blok.content" />
      </div>
      <div
        class="flex items-center gap-4 mt-2 sm:mt-4 sm:text-xl font-bold"
        :class="[blok.left ? 'justify-start' : 'justify-end']"
      >
        <Component v-for="cta in blok.cta" :is="cta.component" :blok="cta">
        </Component>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>

.clip-none {
  clip-path: none !important;
}
.clip-right {
  clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
}
.clip-left {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 5% 50%);
  clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
}
@media screen and (max-width: 640px) {
  .clip-left,
  .clip-right {
    clip-path: none;
  }
}
</style>
