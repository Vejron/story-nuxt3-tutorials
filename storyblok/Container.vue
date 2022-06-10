<template>
  <div
    v-editable="blok"
    :style="style"
    class="px-4"
  >
    <div :class="{'max-w-6xl mx-auto': !blok.full_width}" >
      <Component
        v-for="blok in props.blok.blocks"
        :is="blok.component"
        :key="blok._id"
        :blok="blok"
      />
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

const style = computed(() => ({
  'background-color': props.blok.background_color?.color || 'transparent',
  'padding-top': props.blok?.padding_top || '0',
  'padding-bottom': props.blok?.padding_bottom || '0'
}));
</script>
