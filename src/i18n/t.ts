import type { Locale } from './index';

import fr from './translations/fr.json';
import en from './translations/en.json';
import nl from './translations/nl.json';

const translations: Record<Locale, Record<string, string>> = { en, fr, nl };

/**
 * Pure translation function — no React hooks needed.
 * Supports {param} interpolation.
 */
export function t(locale: Locale, key: string, params?: Record<string, string | number>): string {
  let value = translations[locale]?.[key] ?? translations.en[key] ?? key;

  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replaceAll(`{${k}}`, String(v));
    }
  }

  return value;
}
