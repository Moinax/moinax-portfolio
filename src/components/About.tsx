import { motion } from 'framer-motion';
import { Brain, Zap, Layers, Cpu } from 'lucide-react';
import { yearsOfExperience } from '../lib/constants';
import { useTranslation } from '../i18n/useTranslation';

export const About = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Brain,
      titleKey: 'about.highlight.copilot.title',
      descKey: 'about.highlight.copilot.desc',
      color: 'text-cyan-400',
    },
    {
      icon: Zap,
      titleKey: 'about.highlight.delivery.title',
      descKey: 'about.highlight.delivery.desc',
      color: 'text-yellow-400',
    },
    {
      icon: Layers,
      titleKey: 'about.highlight.design.title',
      descKey: 'about.highlight.design.desc',
      color: 'text-indigo-400',
    },
    {
      icon: Cpu,
      titleKey: 'about.highlight.architecture.title',
      descKey: 'about.highlight.architecture.desc',
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-24 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        <h2 className="text-4xl font-bold">
          {t('about.title_line1')}<br />
          <span className="text-gradient">{t('about.title_line2')}</span>
        </h2>
        {/* Safe: static translations — no user-generated content */}
        <p
          className="text-lg text-slate-400 leading-relaxed [&_strong]:text-slate-200"
          dangerouslySetInnerHTML={{
            __html: t('about.paragraph1', { years: yearsOfExperience }),
          }}
        />
        {/* Safe: static translations — no user-generated content */}
        <p
          className="text-lg text-slate-400 leading-relaxed [&_em]:text-cyan-400 [&_em]:not-italic [&_em]:font-medium"
          dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }}
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 space-y-3 group hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <h.icon size={22} className={h.color} />
              <h3 className="font-bold text-lg">{t(h.titleKey)}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t(h.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
