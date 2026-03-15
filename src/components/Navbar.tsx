import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg-deep/80 border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-tight hover:text-cyan-400 transition-colors">
          J<span className="text-gradient">P</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10" />
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t border-white/5 bg-bg-deep/95 backdrop-blur-md"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <div className="flex justify-center">
              <LanguageSwitcher size="mobile" />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
