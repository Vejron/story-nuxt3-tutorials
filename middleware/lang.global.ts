/**
 * redirect every router-link to its properly translated counterpart
 */
export default defineNuxtRouteMiddleware((to, from) => {
  if(from.path?.length && to.path.length) {
    const fromLang = from.path.split('/')[1];
    const toLang = to.path.split('/')[1];
    if(fromLang === toLang) {
      // do no redirect
    } else {
      // or any other languge we support
      if(fromLang === "en") {
        return "/en" + to.path;
      }
    }
  }
})