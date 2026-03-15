# moinax.com — Portfolio

Personal portfolio website for **Jérôme Poskin**, Frontend Lead & AI-Enhanced Developer.

🌐 [moinax.com](https://www.moinax.com)

## Stack

- **[Astro](https://astro.build)** — Ultra-fast static framework
- **[React](https://react.dev)** — Interactive components (animations, navigation)
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first styling, native dark mode
- **[Framer Motion](https://motion.dev)** — Smooth scroll and load animations
- **[Lucide React](https://lucide.dev)** — Modern SVG icons

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Production build
pnpm build

# Preview the build
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         # Fixed navigation with mobile menu
│   ├── Hero.tsx           # Hero section with animations
│   ├── About.tsx          # Introduction + "AI-Enhanced" cards
│   ├── Experience.tsx     # Professional experience timeline
│   ├── Skills.tsx         # Skills grid by category
│   ├── Education.tsx      # Academic background
│   └── Contact.tsx        # Contact info and CTA
├── layouts/
│   └── Layout.astro       # Main layout (meta, fonts, footer)
├── pages/
│   └── index.astro        # Home page (section assembly)
└── styles/
    └── global.css          # Tailwind v4 config, custom palette, utilities
```

## Design

- **Dark mode** with `#050505` background and subtle radial gradient
- **Glassmorphism** (`glass-card`) for cards
- **Signature gradient** cyan → indigo (`text-gradient`)
- **Typography** Inter (Google Fonts)
- **Scroll-triggered animations** via Framer Motion

## Deployment

The site is automatically deployed to **Vercel** on every merge to `main`.

| Environment | URL |
|---|---|
| Production | [moinax.com](https://www.moinax.com) |
| Preview | Auto-generated on each PR |

### Workflow

1. Changes are proposed via **Pull Request**
2. Vercel generates a **preview deploy** on each PR
3. On merge to `main` → automatic production deploy

## License

MIT — © Jérôme Poskin
