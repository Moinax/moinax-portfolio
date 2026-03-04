import { motion } from 'framer-motion';

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Astro", "Electron"],
  },
  {
    category: "Styling & Design",
    items: ["Tailwind CSS", "Sass/SCSS", "Design Systems", "Responsive Design", "Accessibility"],
  },
  {
    category: "Data & API",
    items: ["GraphQL", "Relay", "Redux", "REST APIs", "Node.js"],
  },
  {
    category: "Intelligence Artificielle",
    items: ["LLM Integration", "AI Agents", "Prompt Engineering", "Copilot Workflows", "Automated Code Review"],
  },
  {
    category: "Outils & Méthodologie",
    items: ["Git", "Webpack", "Vite", "Agile/Scrum", "CI/CD"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        Stack<span className="text-gradient">.</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-6 space-y-4 hover:border-white/20 transition-colors"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
