<template>
  <a
    v-if="external"
    :href="props.blok.link?.url"
    v-editable="blok"
    class="fancy"
  >
    {{ blok.text }}
  </a>
  <NuxtLink v-else :to="'/' + blok.link?.cached_url" class="fancy">
    {{ blok.text }}
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
const external = computed(() => !!props.blok.link?.url);
</script>

<style lang="css" scoped>
.fancy {
  border-left: 2px solid #e80e0e;
  border-right: 2px solid #e80e0e;
  color: #fff;
  position: relative;
  padding: 1em 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}
.fancy:hover {
  background: #e80e0e2f;
  color: #e80e0e;
}
.fancy:before,
.fancy:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #e80e0e;
  transition: 400ms ease all;
}
.fancy:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.fancy:hover:before,
.fancy:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>
