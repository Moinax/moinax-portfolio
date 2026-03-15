export type Locale = 'fr' | 'nl' | 'en';

export const locales: Locale[] = ['fr', 'nl', 'en'];
export const defaultLocale: Locale = 'fr';

export const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  nl: 'NL',
  en: 'EN',
};

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  nl: 'Nederlands',
  en: 'English',
};
