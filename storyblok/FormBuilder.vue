<template>
  <section
    v-editable="blok"
    :aria-labelledby="blok._uid"
    class="full-width"
  >
    <div class="bgthing"></div>
    <FormKit
      form-class=""
      type="form"
      v-model="formData"
      :submit-label="blok.submit_label"
      @submit="submitHandler"
    >
      <div class="prose text-base lg:text-lg mb-4">
        <h2 :id="blok._uid">{{ blok.heading }}</h2>
        <rich-text-renderer
          v-if="blok.description"
          :document="blok.description"
        />
      </div>
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
}
</script>

<style lang="css" scoped>

.bgthing {

}
@media (min-width: 40em) {
  .bgthing {
    margin-left: calc(-100vw / 2 + 75ch / 2);
    margin-right: calc(-100vw / 2 + 75ch / 2);
  }
}

</style>
