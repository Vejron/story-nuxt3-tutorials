<template>
  <Popover class="relative" v-slot="{ open, close }">
    <PopoverButton ref="menu" class="focus:outline-none">
      <svg
        v-if="open"
        class="h-10 w-10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21 9H3s0-6 9-6s9 6 9 6m-7.65 8H3v1c0 1.66 1.34 3 3 3h7.35c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2m8.51-3.27A2 2 0 0 0 20 11h-9l-2.5 2L6 11H4c-1.1 0-2 .9-2 2s.9 2 2 2h10.54c1.1-1.22 2.69-2 4.46-2c1.04 0 2 .26 2.86.73m.68 3.15l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12Z"
        />
      </svg>
      <svg
        v-else
        class="h-10 w-10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21 9H3s0-6 9-6s9 6 9 6m-7.65 8H3v1c0 1.66 1.34 3 3 3h7.35c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2m8.51-3.27A2 2 0 0 0 20 11h-9l-2.5 2L6 11H4c-1.1 0-2 .9-2 2s.9 2 2 2h10.54c1.1-1.22 2.69-2 4.46-2c1.04 0 2 .26 2.86.73M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3Z"
        />
      </svg>
    </PopoverButton>

    <TransitionRoot :show="open">
      <TransitionChild
        enter="transition-opacity duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <PopoverOverlay class="fixed inset-0 bg-black opacity-50" />
      </TransitionChild>

      <TransitionChild
        enter="transition-all transform duration-300"
        enter-from="opacity-0 rotate-12"
        enter-to="opacity-100"
        leave="transition-all duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <PopoverPanel class="absolute border-2 bg-white z-10 mt-3 px-4">
          <div class="flex flex-col">
            <NavItem :blok="navItem" @click="close" v-for="navItem in items" />
          </div>
        </PopoverPanel>
      </TransitionChild>
    </TransitionRoot>
  </Popover>
</template>

<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverOverlay,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const menu = ref();
// close popover on navigation
const { afterEach } = useRouter();
afterEach(() => {
 // menu.value.close()
  
})

</script>
