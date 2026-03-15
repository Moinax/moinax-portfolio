import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const education = [
  {
    period: '1998 — 2002',
    institution: 'Institut Paul Lambin',
    degreeKey: 'education.ipl.degree',
  },
  {
    period: '1994 — 1998',
    institution: 'Collège Notre-Dame de Val Duchesse',
    degreeKey: 'education.ndvd.degree',
  },
];

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        {t('education.title')}<span className="text-gradient">.</span>
      </motion.h2>

      <div className="space-y-4">
        {education.map((e, i) => (
          <motion.div
            key={e.institution}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 glass-card p-5"
          >
            <GraduationCap size={24} className="text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="text-sm text-slate-500 font-mono">{e.period}</span>
                <h3 className="font-bold">{e.institution}</h3>
              </div>
              <p className="text-sm text-slate-400 mt-1">{t(e.degreeKey)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
