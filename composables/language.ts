import type { Ref } from "vue";

export const useLanguage = () => {
  const state = useState<string>("ue-lang-selection", () => useDefaultLanguage().value);
  return computed({
    get: () => state.value,
    set: (value) => {
      localStorage.setItem("ue-lang-selection", value);
      state.value = value;
    },
  });
};

export const useDefaultLanguage = () => {
  const lang = ref("sv");
  if (process.client) {
    lang.value = localStorage.getItem("ue-lang-selection") ?? "sv";
  }
  return lang;
};

export const useLocales = () => {
  const locale = useLocale();
  const locales = ref([
    "en-US",
    "en-GB",
    "ko-KR",
    "zh-CN",
    "ar-EG",
    "fa-IR",
    "ja-JP-u-ca-japanese",
  ]);
  if (!locales.value.includes(locale.value)) {
    locales.value.unshift(locale.value);
  }
  return locales;
};

// Using Intl.DateTimeFormat for language-sensitive date and time formatting
// Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
export const useLocaleDate = (date: Ref<Date> | Date, locale = useLocale()) => {
  return computed(() =>
    new Intl.DateTimeFormat(locale.value, { dateStyle: "full" }).format(
      unref(date)
    )
  );
};
