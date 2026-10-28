export const locales = ["en", "vn", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; htmlLang: string }> = {
  en: { label: "EN", htmlLang: "en" },
  vn: { label: "VN", htmlLang: "vi" },
  ja: { label: "JA", htmlLang: "ja" },
  ko: { label: "KO", htmlLang: "ko" },
};

export type Localized = { en: string } & Partial<Record<Locale, string>>;

export function tx(copy: Localized | undefined, locale: Locale) {
  if (!copy) return "";
  return copy[locale] || copy.en;
}
