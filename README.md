# Alexandros Melas · Portfolio

> 🚧 **Work in progress.** The site is live and the sections marked ✅ below are finished. Skills and Contact are still being built.

**Live site:** https://personalweb-chi-three.vercel.app/

This is my personal portfolio website, where I share my projects and the skills behind them.

## What's on the site

| Section | Status | What it does |
| --- | --- | --- |
| Hero | ✅ Done | 3D room you can rotate with the mouse (React Three Fiber, bloom, particles), rotating headline words, animated counters |
| Featured work | ✅ Done | Three projects with video previews and links to the live sites |
| Tech marquee | ✅ Done | Logo strip that scrolls forever |
| Experience | ✅ Done | Experience cards that slide in, with a timeline line that fills in as you scroll (GSAP ScrollTrigger) |
| Skills | 🚧 Planned | 3D icons of my tech stack |
| Contact | 🚧 Planned | Contact form, LinkedIn and GitHub links |

## Featured projects

| Project | What it is | Links |
| --- | --- | --- |
| **ΠΙΤΟΓΥΡΟ** | Concept site for a Greek souvlaki shop. The pita unwraps layer by layer as you scroll. Built with React, GSAP ScrollTrigger and Lenis. | [Live site](https://pitogyro-ashy.vercel.app/) |
| **BAR** | Cinematic concept site for a cocktail bar, with pinned cocktail spotlights, in English and Greek. Built with React, GSAP and Lenis. | [Live site](https://bar-bice-tau.vercel.app/) |
| **AI chatbot** | Customizable AI chatbot built with Next.js 15 and the Vercel AI SDK, with streaming OpenAI responses, Supabase login and file uploads. | [Live demo](https://ai-chatbot-nextjs-navy.vercel.app) · [Code](https://github.com/doctoralex9/ai-chatbot-nextjs) |

## Tech stack

- **React 19** and **Vite 8**
- **Three.js**, **React Three Fiber**, **Drei** and **@react-three/postprocessing** for the 3D scene
- **GSAP** and **ScrollTrigger** (through `@gsap/react`) for the animations
- **Tailwind CSS v4** for styling
- `react-countup` for the counters and `react-responsive` for mobile and tablet tweaks to the 3D scene
- Hosted on **Vercel**, with Vercel Analytics

## Run it locally

You need Node.js 20.19+ or 22.12+ (Vite 8 requires it).

```bash
git clone https://github.com/doctoralex9/personalweb.git
cd personalweb/portofolio-website
npm install
npm run dev
```

Then open http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Builds the production version into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
portofolio-website/
├── public/
│   ├── models/       3D models (.glb)
│   ├── images/       icons, logos, textures
│   └── videos/       project preview videos and posters
└── src/
    ├── sections/     Hero, ShowcaseSection, ExperienceSection
    ├── components/   NavBar, Button, GlowCard, LogoSection, AnimatedCounter, HeroModels/
    └── constants/    site content: nav links, counters, logos, experience cards
```

Most of the text on the site lives in `src/constants/index.js`.

## Credits

The site started from the [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) 3D portfolio tutorial and was then reworked with my own content and projects. The 3D models and some of the images come from the tutorial's assets.

## Contact

- LinkedIn: [Alexandros Melas](https://www.linkedin.com/in/alexandros-melas-4a36a4174/)
- GitHub: [@doctoralex9](https://github.com/doctoralex9)
