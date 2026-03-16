export type Locale = 'en' | 'fr' | 'nl';

export const locales: Locale[] = ['en', 'fr', 'nl'];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  nl: 'NL',
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  nl: 'Nederlands',
};
