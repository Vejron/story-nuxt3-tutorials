export default defineNuxtPlugin(nuxtApp => {
  // runs on document loaded to get the width of any scrollbar
  document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
})