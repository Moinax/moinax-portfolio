import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Job {
  period: string;
  company: string;
  role: string;
  description: string;
  tech: string[];
  link?: { label: string; url: string };
  highlight?: boolean;
}

const jobs: Job[] = [
  {
    period: "2021 — Aujourd'hui",
    company: "Mbrella",
    role: "Frontend Lead Developer",
    description:
      "Construction d'une plateforme HR pour la mobilité flexible : plans de mobilité personnalisés, gestion de transports publics, budgets mobilité. Architecture React à grande échelle en full remote.",
    tech: ["React", "TypeScript", "Design System"],
    link: { label: "mbrella.eu", url: "https://www.mbrella.eu" },
    highlight: true,
  },
  {
    period: "2019 — 2020",
    company: "The Glue",
    role: "Frontend Lead & UX Advisor",
    description:
      "Création d'une plateforme de prêt en ligne 100% digitale, de la demande à la signature. Focus UX et performance.",
    tech: ["React", "Node.js", "Fintech"],
    link: { label: "theglue.com", url: "https://theglue.com/" },
  },
  {
    period: "2019",
    company: "Apex Legends France",
    role: "Discord Bot Developer",
    description:
      "Bot Discord générant des canaux vocaux dynamiques pour la communauté gaming : matchmaking trio, noms générés depuis le lore du jeu.",
    tech: ["Discord.js", "Heroku", "Node.js"],
  },
  {
    period: "2019",
    company: "Hilarious × Proximus × Tomorrowland",
    role: "Web Developer",
    description:
      "Jeu interactif 3D responsive pour gagner des tickets Tomorrowland Winter. Animations synchronisées, son immersif.",
    tech: ["React", "Next.js", "OpenSeaDragon"],
  },
  {
    period: "2017 — 2019",
    company: "Elium",
    role: "Web Developer",
    description:
      "Expertise frontend sur une plateforme de Knowledge Management à grande échelle. Introduction de patterns responsive et UX avancés.",
    tech: ["React", "Relay", "GraphQL", "Webpack"],
    link: { label: "elium.com", url: "https://www.elium.com/" },
  },
  {
    period: "2016 — 2017",
    company: "Emakina",
    role: "Web Developer & React Evangelist",
    description:
      "Évangélisation de React.js au sein de l'agence. Formation des équipes et implémentation du premier projet en Electron + React.",
    tech: ["React", "Electron", "Webpack"],
    link: { label: "emakina.com", url: "https://www.emakina.com/" },
  },
  {
    period: "2015 — 2016",
    company: "Jack Media",
    role: "Web Architect",
    description:
      "Architecture d'une plateforme de messagerie nouvelle génération basée sur des micro-services cloud et un langage universel.",
    tech: ["React", "Redux", "Sass", "Webpack"],
  },
  {
    period: "2010 — 2015",
    company: "Snowcap",
    role: "Co-Fondateur",
    description:
      "Création et direction d'une agence de développement open source. En 5 ans : 30+ clients (Pairidaiza, Walibi, Eggo, Opéra de Liège...) et 10 employés. Focus qualité et accompagnement de startups.",
    tech: ["PHP", "Drupal", "Symfony", "JavaScript"],
    highlight: true,
  },
  {
    period: "2008 — 2010",
    company: "Emakina",
    role: "Expert PHP Developer",
    description:
      "Lead d'une équipe Drupal : coaching, best practices, estimations techniques. Réalisation de CMS pour des clients majeurs.",
    tech: ["Drupal", "PHP", "JavaScript"],
  },
  {
    period: "2002 — 2008",
    company: "Symex Chartinvestor",
    role: "Team Leader & IT Developer",
    description:
      "Développement de flux boursiers temps réel, portails financiers et plateforme de communication pour la Directive Transparence Européenne.",
    tech: ["C++", "Delphi", "PHP", "JavaScript"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        Parcours<span className="text-gradient">.</span>
      </motion.h2>

      <div className="relative space-y-0">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/30 to-transparent" />

        {jobs.map((job, i) => (
          <motion.div
            key={`${job.company}-${job.period}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative pl-10 pb-10 group"
          >
            {/* Dot */}
            <div
              className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 transition-colors ${
                job.highlight
                  ? "border-cyan-400 bg-cyan-400/20"
                  : "border-slate-600 bg-bg-deep group-hover:border-cyan-400/50"
              }`}
            />

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="text-sm text-slate-500 font-mono shrink-0">{job.period}</span>
                <h3 className="text-xl font-bold">
                  {job.company}
                  <span className="text-slate-500 font-normal text-base ml-2">— {job.role}</span>
                </h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                {job.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                  >
                    {t}
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
