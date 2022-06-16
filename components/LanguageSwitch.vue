<template>
  <Listbox
    as="div"
    v-model="selectedLanguage"
    class="relative inline-block text-left"
  >
    <div>
      <ListboxButton
        class="px-4 py-2 flex items-center focus:outline-none focus-visible:ring-3 focus-visible:ring-offset-1 focus-visible:ring-blue"
      >
        Lang {{ selectedLanguage.name }}
        <svg
          aria-hidden="true"
          class="ml-2 mt-1"
          width="8"
          height="6"
          viewBox="0 0 8 6"
        >
          <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor"></path>
        </svg>
      </ListboxButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <ListboxOptions class="absolute border-2 bg-white z-10 mt-3 px-0">
        <ListboxOption
          v-slot="{ active, selected }"
          v-for="language in languages"
          :key="language.name"
          :value="language"
          as="template"
        >
          <li
            :class="[
              active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
              'relative cursor-default select-none py-2 pl-10 pr-4',
            ]"
          >
            <span
              :class="[
                selected ? 'font-medium' : 'font-normal',
                'block truncate',
              ]"
              >{{ language.name }}</span
            >
            <span
              v-if="selected"
              class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <rect
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="none"
                />
                <path
                  fill="currentColor"
                  d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093l3.473-4.425a.267.267 0 0 1 .02-.022z"
                />
              </svg>
            </span>
          </li>
        </ListboxOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const route = useRoute();
const router = useRouter();
const validLangCodes = ["en", "fi"];
const languages = [
  { name: "Swedish", lang: "sv" },
  { name: "English", lang: "en" },
  { name: "Soumi", lang: "fi" },
];

const getSelectedLang = () => {
  const startLang = route.path.split("/")[1];
  if (validLangCodes.includes(startLang)) {
    const index = languages.findIndex(
      (language) => language.lang === startLang
    );
    return ref(languages[index]);
  }
  return ref(languages[0]);
};

const selectedLanguage = getSelectedLang();

watch(selectedLanguage, (value) => {
  switch (value.lang) {
    case "en":
      location.replace("/en" + route.path);
      break;
    default:
      location.replace('/' + route.path.split('/').slice(2).join('/'));
      break;
  }
});
</script>
