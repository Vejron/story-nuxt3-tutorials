<template>
  <Popover v-slot="{ open }">
    <PopoverButton class="h-12 w-12 p-2 flex justify-center items-center text-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 1664 1664"
      >
        <path
          fill="currentColor"
          d="M1152 704q0-185-131-316T704 256 388 388 256 704t132 317 316 131 317-131 131-317zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273-55t-225-150T56 978 0 704t56-273 150-225T431 56 704 0t274 56 225 150 150 225 55 273q0 220-124 399l343 343q37 37 37 90z"
        />
      </svg>
    </PopoverButton>
    <PopoverOverlay class="fixed inset-0 bg-black opacity-30" />

    <PopoverPanel focus class="fixed inset-0 flex items-center pointer-events-none justify-center p-4">
      <div class="bg-white rounded-md p-4 shadow-xl pointer-events-auto">
        <div>
          <label class="text-2xl font-semibold" for="searchbar">Site wide search</label>
          <div class="mt-4 flex justify-start items-center relative">
            <input class="leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none" type="text" id="searchbar">
            <svg class="absolute right-3 z-10 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21L15 15" stroke="#4B5563" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>
        </div>
        
      </div>
    </PopoverPanel>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverOverlay,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";

const searchbar = ref()
</script>
