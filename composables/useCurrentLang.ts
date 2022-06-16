const validLangCodes = ["en", "fi"];
const languages = [
  { name: "Swedish", lang: "sv" },
  { name: "English", lang: "en" },
  { name: "Soumi", lang: "fi" },
];

export default function useCurrentLang() {
  const route = useRoute();
  return computed(() => {
    const startLang = route.path.split("/")[1];
    if (validLangCodes.includes(startLang)) {
      const index = languages.findIndex(
        (language) => language.lang === startLang
      );
      return languages[index];
    }
    return languages[0];
  });
}
