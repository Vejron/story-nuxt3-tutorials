<template>
  <a
    v-if="external"
    :href="props.blok.link?.url"
    v-editable="blok"
    :class="[blok.fancy ? 'fancy' : 'standard']"
    target="_blank"
  >
    {{ blok.text }}
  </a>
  <NuxtLink
    v-else
    :to="$normalize(blok.link)"
    :class="[blok.fancy ? 'fancy' : 'standard']"
  >
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

.standard {
    background: green;
    font-weight: 600;
    border-radius: 9999px;
    font-size: 1.125rem;
    padding: 0.8rem 1.5rem;
    color: #fff;
  } 
</style>
