<template>
  <div v-editable="blok" class="relative" :style="bgStyle">
    <img
      class="h-full w-full object-cover"
      :style="bgStyle"
      :src="imgUrl"
      :alt="props.blok.image?.alt"
      srcset=""
    />
    <div
      class="p-8 absolute inset-0 flex flex-col justify-center items-center text-center text-white"
      :class="{'bg bg-gradient-to-t from-black/20 via-black/50 to-transparent': blok.overlay}"
    >
      <Component
        class="text-3xl sm:text-5xl font-bold glow"
        :is="blok.level ?? 'h1'"
        >{{ blok.heading }}</Component
      >

      <p class="font-light glow px-2 py-1 mt-4 sm:text-xl sm:mt-6">
        {{ blok.tagline }}
      </p>
      <div class="flex gap-8 mt-2 sm:mt-4 sm:text-xl font-bold">
        <Component v-for="cta in blok.cta" :is="cta.component" :blok="cta">
        </Component>
      </div>
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

const bgStyle = computed(
  () =>
    [
      { height: "calc(100vh - 5rem)" },
      { height: "calc(70vh - 5rem)" },
      { height: "calc(50vh - 5rem)" },
    ][props.blok?.height ?? 2]
);

const imgUrl = computed(() => props.blok.image?.filename + "/m/1920x0");
</script>

<style lang="css" scoped>
.glow {
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
}
</style>
