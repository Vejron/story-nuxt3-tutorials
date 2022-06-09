<template>
  <div
    v-editable="blok"
    :style="{
      'background-color': blok.background_color?.color || 'transparent',
    }"
  >
    <div :class="[ blok.full_width? 'max-w-4xl mx-auto': '', style ]" class="grid gap-8" >
      <Component
        v-for="blok in props.blok.columns"
        :is="blok.component"
        :key="blok._id"
        :blok="blok"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
enum DisplayOptions {
  TWO,
  THREE,
  FOUR,
}

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const style = computed(() => {
  switch (Number(props.blok.display_options)) {
    case DisplayOptions.TWO:
      return "grid-cols-1 sm:grid-cols-2";
    case DisplayOptions.THREE:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    case DisplayOptions.FOUR:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";

    default:
       return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
  }
});
</script>
