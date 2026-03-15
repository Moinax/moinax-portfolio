import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface Job {
  key: string;
  company: string;
  tech: string[];
  link?: { label: string; url: string };
  highlight?: boolean;
}

const jobs: Job[] = [
  {
    key: 'mbrella',
    company: 'Mbrella',
    tech: ['React', 'TypeScript', 'Design System'],
    link: { label: 'mbrella.eu', url: 'https://www.mbrella.eu' },
    highlight: true,
  },
  {
    key: 'theglue',
    company: 'The Glue',
    tech: ['React', 'Node.js', 'Fintech'],
    link: { label: 'theglue.com', url: 'https://theglue.com/' },
  },
  {
    key: 'apex',
    company: 'Apex Legends France',
    tech: ['Discord.js', 'Heroku', 'Node.js'],
  },
  {
    key: 'tomorrowland',
    company: 'Hilarious × Proximus × Tomorrowland',
    tech: ['React', 'Next.js', 'OpenSeaDragon'],
  },
  {
    key: 'elium',
    company: 'Elium',
    tech: ['React', 'Relay', 'GraphQL', 'Webpack'],
    link: { label: 'elium.com', url: 'https://www.elium.com/' },
  },
  {
    key: 'emakina2',
    company: 'Emakina',
    tech: ['React', 'Electron', 'Webpack'],
    link: { label: 'emakina.com', url: 'https://www.emakina.com/' },
  },
  {
    key: 'jackmedia',
    company: 'Jack Media',
    tech: ['React', 'Redux', 'Sass', 'Webpack'],
  },
  {
    key: 'snowcap',
    company: 'Snowcap',
    tech: ['PHP', 'Drupal', 'Symfony', 'JavaScript'],
    highlight: true,
  },
  {
    key: 'emakina1',
    company: 'Emakina',
    tech: ['Drupal', 'PHP', 'JavaScript'],
  },
  {
    key: 'symex',
    company: 'Symex Chartinvestor',
    tech: ['C++', 'Delphi', 'PHP', 'JavaScript'],
  },
];

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        {t('experience.title')}<span className="text-gradient">.</span>
      </motion.h2>

      <div className="relative space-y-0">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/30 to-transparent" />

        {jobs.map((job, i) => (
          <motion.div
            key={`${job.company}-${job.key}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative pl-10 pb-10 group"
          >
            {/* Dot */}
            <div
              className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 transition-colors ${
                job.highlight
                  ? 'border-cyan-400 bg-cyan-400/20'
                  : 'border-slate-600 bg-bg-deep group-hover:border-cyan-400/50'
              }`}
            />

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="text-sm text-slate-500 font-mono shrink-0">
                  {t(`experience.${job.key}.period`)}
                </span>
                <h3 className="text-xl font-bold">
                  {job.company}
                  <span className="text-slate-500 font-normal text-base ml-2">
                    — {t(`experience.${job.key}.role`)}
                  </span>
                </h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                {t(`experience.${job.key}.description`)}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {job.link && (
                  <a
                    href={job.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400/70 hover:text-cyan-400 transition-colors ml-1"
                  >
                    <ExternalLink size={12} />
                    {job.link.label}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
