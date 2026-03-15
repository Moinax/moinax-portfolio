import { useLocale } from './LanguageContext';
import type { Locale } from './index';

import fr from './translations/fr.json';
import en from './translations/en.json';
import nl from './translations/nl.json';

const translations: Record<Locale, Record<string, string>> = { fr, en, nl };

// Cache compiled RegExps for interpolation params to avoid re-creating them on every t() call
const regexpCache = new Map<string, RegExp>();
function getParamRegExp(param: string): RegExp {
  let re = regexpCache.get(param);
  if (!re) {
    re = new RegExp(`\\{${param}\\}`, 'g');
    regexpCache.set(param, re);
  }
  return re;
}

export function useTranslation() {
  const { locale } = useLocale();

  function t(key: string, params?: Record<string, string | number>): string {
    let value = translations[locale]?.[key] ?? translations.fr[key] ?? key;

    if (params) {
      for (const [k, v] of Object.entries(params)) {
        value = value.replace(getParamRegExp(k), String(v));
      }
    }

    return value;
  }

  return { t, locale };
}
