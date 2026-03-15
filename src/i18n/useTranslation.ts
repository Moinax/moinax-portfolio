import { useLocale } from './LanguageContext';
import type { Locale } from './index';

import fr from './translations/fr.json';
import en from './translations/en.json';
import nl from './translations/nl.json';

const translations: Record<Locale, Record<string, string>> = { fr, en, nl };

export function useTranslation() {
  const { locale } = useLocale();

  function t(key: string, params?: Record<string, string | number>): string {
    let value = translations[locale]?.[key] ?? translations.fr[key] ?? key;

    if (params) {
      for (const [k, v] of Object.entries(params)) {
        value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }

    return value;
  }

  return { t, locale };
}
