import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, Languages } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl space-y-6"
      >
        <h2 className="text-4xl font-bold">
          {t('contact.title_prefix')} <span className="text-gradient">{t('contact.title_highlight')}</span>
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          {t('contact.description')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card p-8 max-w-lg space-y-5"
      >
        <a
          href="mailto:hello@moinax.com"
          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
        >
          <Mail size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
          <span className="font-medium">hello@moinax.com</span>
        </a>

        <a
          href="https://www.moinax.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
        >
          <Globe size={20} className="text-indigo-400 group-hover:scale-110 transition-transform" />
          <span className="font-medium">moinax.com</span>
        </a>

        <div className="flex items-center gap-3 text-slate-400">
          <MapPin size={20} className="text-emerald-400" />
          <span>{t('contact.location')}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          <Languages size={20} className="text-yellow-400" />
          <span>{t('contact.languages')}</span>
        </div>
      </motion.div>
    </section>
  );
};
