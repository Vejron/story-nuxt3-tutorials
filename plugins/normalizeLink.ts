function removeTrailingAndDoubbleSlash(path) {
  let _path = path.endsWith('/') ? path.slice(0, -1) : path;
  return _path.replace(/\/\//, "/");
}

function fromStoryUrl(path: string, lang: string) {
  let url = path;
  if(lang === 'sv') {
    // default languge no need for lang code
    url = "/" + path;
  } else {
    url = "/" + lang + "/" + path;
  }
  // need to remove any double slashes if not root
  return removeTrailingAndDoubbleSlash(url);
}

// translate the sb link objekt to a sane path
export default defineNuxtPlugin(() => {
  const lang = useCurrentLang();
  return {
    provide: {
      normalize: (link: any) => {
        
        switch (link.linktype) {
          case "story":
            return fromStoryUrl(link.story.url, lang.value.lang)

          default:
            return link.url;
        }
      },
    },
  };
});
