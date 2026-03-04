# moinax.com — Portfolio

Le site portfolio de **Jérôme Poskin**, Frontend Lead & AI-Enhanced Developer.

🌐 [moinax.com](https://www.moinax.com)

## Stack

- **[Astro](https://astro.build)** — Framework statique ultra-rapide
- **[React](https://react.dev)** — Composants interactifs (animations, navigation)
- **[Tailwind CSS v4](https://tailwindcss.com)** — Styling utilitaire, dark mode natif
- **[Framer Motion](https://motion.dev)** — Animations fluides au scroll et au chargement
- **[Lucide React](https://lucide.dev)** — Icônes SVG modernes

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
src/
├── components/
│   ├── Navbar.tsx         # Navigation fixe avec menu mobile
│   ├── Hero.tsx           # Section d'accroche avec animations
│   ├── About.tsx          # Présentation + cartes "AI-Enhanced"
│   ├── Experience.tsx     # Timeline des expériences professionnelles
│   ├── Skills.tsx         # Grille de compétences par catégorie
│   ├── Education.tsx      # Formation académique
│   └── Contact.tsx        # Coordonnées et CTA
├── layouts/
│   └── Layout.astro       # Layout principal (meta, fonts, footer)
├── pages/
│   └── index.astro        # Page d'accueil (assemblage des sections)
└── styles/
    └── global.css          # Config Tailwind v4, palette custom, utilitaires
```

## Design

- **Dark mode** avec fond `#050505` et dégradé radial subtil
- **Glassmorphism** (`glass-card`) pour les cartes
- **Dégradé signature** cyan → indigo (`text-gradient`)
- **Typographie** Inter (Google Fonts)
- **Animations** d'entrée au scroll via Framer Motion

## Déploiement

Le site est compatible avec tous les hébergeurs statiques (Vercel, Netlify, Cloudflare Pages...).

```bash
npm run build
# Le dossier dist/ contient le site prêt à déployer
```

## Licence

Privé — © Jérôme Poskin
