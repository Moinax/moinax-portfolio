import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Locale, defaultLocale, locales } from './index';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
});

function detectLocale(): Locale {
  // 1. Check localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('preferred-locale') as Locale | null;
    if (stored && locales.includes(stored)) {
      return stored;
    }

    // 2. Check navigator.language
    const browserLang = navigator.language.split('-')[0] as Locale;
    if (locales.includes(browserLang)) {
      return browserLang;
    }
  }

  // 3. Fallback
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('preferred-locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
