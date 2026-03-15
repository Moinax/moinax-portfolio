import { useLocale } from '../i18n/LanguageContext';
import { locales, localeLabels, localeNames, type Locale } from '../i18n/index';

interface Props {
  size?: 'desktop' | 'mobile';
}

export const LanguageSwitcher = ({ size = 'desktop' }: Props) => {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`flex items-center gap-1 ${
        size === 'mobile' ? 'gap-3' : ''
      }`}
    >
      {locales.map((l: Locale, i: number) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => setLocale(l)}
            aria-label={localeNames[l]}
            aria-current={locale === l ? 'true' : undefined}
            className={`
              ${size === 'mobile' ? 'text-sm min-h-[44px] min-w-[44px]' : 'text-xs'}
              font-medium tracking-wide px-2 py-1 rounded-md transition-all duration-200
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/50
              ${
                locale === l
                  ? 'text-cyan-400 bg-cyan-400/10 font-semibold'
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
              }
            `}
          >
            {localeLabels[l]}
          </button>
          {i < locales.length - 1 && (
            <span
              className={`text-slate-600 select-none ${
                size === 'mobile' ? 'text-sm' : 'text-xs'
              }`}
              aria-hidden="true"
            >
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
};
