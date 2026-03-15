import { motion } from 'framer-motion';
import { Sparkles, Bot, Code2, ArrowDown } from 'lucide-react';
import { yearsOfExperience } from '../lib/constants';

export const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start space-y-8 py-20 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium"
      >
        <Bot size={16} />
        <span>AI-Enhanced Developer</span>
      </motion.div>

      <div className="space-y-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
        >
          Jérôme Poskin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient leading-tight"
        >
          Engineering the Future of Web.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl"
        >
          Senior Frontend Architect &amp; Lead Developer avec plus de {yearsOfExperience} ans d'expérience. 
          Je fusionne l'artisanat du code avec la puissance de l'IA pour créer 
          des interfaces d'exception.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="flex flex-wrap gap-6 pt-4"
      >
        <div className="flex items-center gap-2 text-slate-300">
          <Code2 size={20} className="text-indigo-400" />
          <span className="font-medium">React Expert</span>
        </div>
        <div className="w-px h-6 bg-slate-700" />
        <div className="flex items-center gap-2 text-slate-300">
          <Sparkles size={20} className="text-cyan-400" />
          <span className="font-medium">AI-Powered Workflow</span>
        </div>
        <div className="w-px h-6 bg-slate-700" />
        <div className="flex items-center gap-2 text-slate-300">
          <span className="font-medium text-slate-400">{yearsOfExperience}+ ans d'XP</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-slate-600 hover:text-cyan-400 transition-colors">
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
