<template>
  <Popover class="relative" v-if="isDropdown" v-slot="{ open }">
    <PopoverButton
      class="px-4 py-2 flex items-center focus:outline-none focus-visible:ring-3 focus-visible:ring-offset-1 focus-visible:ring-blue"
    >
      {{ blok.name }}
      <svg class="ml-2 mt-1" width="8" height="6" viewBox="0 0 8 6">
        <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor"></path>
      </svg>
    </PopoverButton>
    <PopoverPanel
      v-slot="{ close }"
      class="absolute border-2 bg-white z-10 mt-3 px-4"
    >
      <ul class="whitespace-nowrap">
        <li @click="close" v-for="navItem in blok.items">
          <Component :is="navItem.component" :blok="navItem"> </Component>
        </li>
      </ul>
    </PopoverPanel>
  </Popover>
  <NuxtLink
    v-else
    class="inline-block px-4 py-2 transition transition-colors underline underline-transparent hover:underline-red-600 focus:outline-none focus-visible:ring-3 focus-visible:ring-offset-1 focus-visible:ring-blue"
    :to="'/' + blok.link.cached_url"
  >
    {{ blok.name }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const isDropdown = computed(() => {
  return !!props.blok?.items?.length;
});
</script>
