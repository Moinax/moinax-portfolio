import { useTranslation } from '../i18n/useTranslation';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-24 pb-12 text-center text-slate-500 text-sm">
      <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
    </footer>
  );
};
