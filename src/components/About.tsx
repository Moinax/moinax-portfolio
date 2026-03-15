import { motion } from 'framer-motion';
import { Brain, Zap, Layers, Cpu } from 'lucide-react';
import { yearsOfExperience } from '../lib/constants';

const highlights = [
  {
    icon: Brain,
    title: "Copilote IA",
    desc: "J'intègre les LLMs les plus avancés dans mon workflow quotidien : génération de code, revue automatisée, tests, documentation.",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Livraison Accélérée",
    desc: "L'IA me permet de réduire drastiquement les cycles de développement tout en maintenant un standard de qualité élevé.",
    color: "text-yellow-400",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Conception et implémentation de systèmes de design scalables, garantissant cohérence visuelle et maintenabilité.",
    color: "text-indigo-400",
  },
  {
    icon: Cpu,
    title: "Architecture Frontend",
    desc: "Structuration d'applications complexes en React, optimisation des performances et mise en place de bonnes pratiques.",
    color: "text-emerald-400",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        <h2 className="text-4xl font-bold">
          L'humain d'abord.<br />
          <span className="text-gradient">L'IA en renfort.</span>
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          Avec plus de {yearsOfExperience} ans dans le développement web — de la co-fondation de l'agence 
          <strong className="text-slate-200"> Snowcap</strong> (30 clients, 10 employés) aux missions de Lead Frontend 
          pour des startups comme <strong className="text-slate-200">Mbrella</strong> et <strong className="text-slate-200">Elium</strong> — 
          j'ai appris une chose : la technologie n'a de valeur que si elle sert l'humain.
        </p>
        <p className="text-lg text-slate-400 leading-relaxed">
          Aujourd'hui, j'amplifie cette philosophie grâce à l'Intelligence Artificielle. 
          Non pas pour remplacer la créativité humaine, mais pour la <em className="text-cyan-400 not-italic font-medium">décupler</em>.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 space-y-3 group hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <h.icon size={22} className={h.color} />
              <h3 className="font-bold text-lg">{h.title}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
