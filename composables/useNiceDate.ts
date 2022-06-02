import type { MaybeRef } from '@vueuse/shared'
export type DateLike = Date | number | string | undefined

const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) => {
  return date.toLocaleDateString("sv-SE", options || {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

export default function useDateFormat(date: MaybeRef<DateLike>, options?: Intl.DateTimeFormatOptions) {
  return computed(() => formatDate(new Date(unref(date)), options))
}