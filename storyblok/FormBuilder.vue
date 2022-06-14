<template>
  <section
    v-editable="blok"
    :aria-labelledby="blok._uid"
    :class="{'article-full-width': blok.embedded}"
  >
  <div class="article-container">
    <div class="prose text-base lg:text-lg mb-4">
      <rich-text-renderer
        v-if="blok.description"
        :document="blok.description"
      />
    </div>
    <FormKit
      type="form"
      v-model="formData"
      :validation-visibility="blok.validation_visibility"
      :submit-label="blok.submit_label"
      @submit="submitHandler"
    >
      <template v-for="input in blok.inputs">
        <FormKit
          v-if="input.component == 'form-input'"
          :type="input.type"
          :label="input.label"
          :placeholder="input.placeholder"
          :help="input.help"
          :options="options(input.options)"
          :validation="input.validation"
          outer-class="mb-6"
          label-class="$reset block mb-2 font-semibold text-sm"
          :inner-class="inner(input.type)"
          fieldset-class="!border-2 !border-gray-600"
        />
        <Component
          v-else
          class="my-4 sm:my-6 max-w-[25em]"
          :is="input.component"
          :blok="input"
          :key="input._uid"
        />
      </template>
    </FormKit>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// asuming options in comma separated string
const options = (field: string): string[] | undefined => {
  if (field?.length) {
    return field.split(",").map((option) => option.trim());
  }
  return undefined;
};

const submitted = ref(false);
const formData = ref({});
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
  alert(JSON.stringify(formData.value, null, 3));
};

const inner = (type: string) => {
  switch (type) {
    case "radio":
      return "!border-gray-600 rounded-lg mb-1 focus-within:border-blue-500";
    case "checkbox":
      return "!border-gray-600 rounded-lg mb-1 focus-within:border-blue-500";
  }
  return "!border-2 !border-gray-600 rounded-lg mb-1 focus-within:border-blue-500";
};
</script>

<style lang="css" scoped>
@media (min-width: 90ch) {
  .article-full-width {
    background: rgb(227 238 248);
    width: calc(100vw - var(--scrollbar-width));
    transform: translateX(
      calc((75ch - calc(100vw - var(--scrollbar-width) + 1px)) / 2)
    );
  }
  .article-full-width .article-container {
    max-width: 75ch;
    padding: 1rem 0;
    margin: 2rem auto;
  }

  .article-full-width .article-container .prose :first-child {
    margin-top: 0;
  }
}
</style>

<style lang="css">
  .formkit-actions .formkit-wrapper .formkit-input {
    background: green;
    font-weight: 600;
    border-radius: 9999px;
    font-size: 1.125rem;
  } 
</style>