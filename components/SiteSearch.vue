<template>
  <Popover v-slot="{ open }">
    <PopoverButton
      class="h-12 w-12 p-2 flex justify-center items-center text-gray-800"
    >
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
    <PopoverOverlay class="fixed inset-0 bg-black opacity-50" />

    <PopoverPanel
      focus
      class="fixed inset-0 flex items-center pointer-events-none justify-center p-4"
    >
      <div class="bg-white rounded-md p-4 shadow-xl pointer-events-auto max-w-full w-96">
        <div>
          <label class="text-2xl font-semibold" for="searchbar"
            >Site wide search</label
          >
          <div class="mt-4 flex justify-start items-center relative">
            <input
              class="leading-none text-left text-gray-600 px-4 py-3 w-full border rounded-t border-gray-300 outline-none"
              type="text"
              id="searchbar"
              @input="inputChange"
              v-model="searchTerm"
            />
            <svg v-if="working" class="absolute right-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
            <svg
              v-else
              class="absolute right-3 pointer-events-none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="#4B5563"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke="#4B5563"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="h-56 overflow-x-hidden overflow-y-scroll px-4 py-2 border-b border-l border-r rounded-b border-gray-300">
          <ul v-if="results?.length">
            <li class="truncate" v-for="hit in results">
              <NuxtLink :to="'/' + hit.full_slug" class="py-2 transition hover:text-green-500">{{hit.name}}</NuxtLink>
            </li>
          </ul>
          <span class="text-sm font-light" v-else>Inga resultat...</span>
        </div>
      </div>
    </PopoverPanel>
  </Popover>
</template>

<script lang="ts" setup>
import {
  Popover,
  PopoverOverlay,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";

const storyblokApi = useStoryblokApi();
const searchTerm = ref('');
const results = ref();
const working = ref(false)

const debouncedInputFn = useDebounceFn(async () => {
  const term = searchTerm.value;
  if (term?.length > 2) {
    const { data: {stories} } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      search_term: term,
    });
    results.value = stories;
    working.value = false;
  }
}, 600);

const inputChange = (e: InputEvent) => {
  if(e.data) {
    working.value = true;
  }
  debouncedInputFn();
}

// clear serch results when no term
watch(searchTerm, (current, old) => {
  if((current.length === 0) && old?.length ) {
    results.value = [];
    working.value = false;
  }
})
</script>
