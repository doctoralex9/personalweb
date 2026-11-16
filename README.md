# Alexandros Melas · Portfolio

**Live site:** https://personalweb-chi-three.vercel.app/

This is my personal portfolio website, where I share some of my projects and the skills behind them.

## What's on the site

| Section | What it does |
| --- | --- |
| Hero | 3D room you can rotate with the mouse (React Three Fiber, bloom, particles), rotating headline words, animated counters |
| Featured work | Three projects with video previews and links to the live sites |
| Tech marquee | Logo strip that scrolls forever |
| Experience | Experience cards that slide in, with a timeline line that fills in as you scroll (GSAP ScrollTrigger) |
| Skills | Floating 3D logos of my tech stack that you can rotate with the mouse, on cards that fade in as you scroll |
| Contact | Contact form that sends me an email through EmailJS, next to a 3D computer you can rotate |
| Footer | Links to my Instagram, Facebook and LinkedIn |

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
- **EmailJS** (`@emailjs/browser`) for the contact form
- `react-countup` for the counters and `react-responsive` for mobile and tablet tweaks to the 3D scene
- Hosted on **Vercel**, with Vercel Analytics

## Run it locally

You need Node.js 20.19+ or 22.12+ (Vite 8 requires it).

```bash
git clone https://github.com/doctoralex9/personalweb.git
cd personalweb/portofolio-website
npm install
```

The contact form needs EmailJS keys. Create a `.env` file inside `portofolio-website/` with your own values:

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Without them the site still runs, but the form can't send messages.

Then start the dev server with `npm run dev` and open http://localhost:5173.

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
    ├── sections/     Hero, ShowcaseSection, ExperienceSection, TechStack, Contact, Footer
    ├── components/   NavBar, Button, GlowCard, LogoSection, AnimatedCounter, TitleHeader,
    │                 HeroLights, HeroModels/, Models/ (tech logos and the contact computer)
    └── constants/    site content: nav links, counters, logos, experience cards, tech stack, social links
```

Most of the text on the site lives in `src/constants/index.js`.

## Credits

The site started from the [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) 3D portfolio tutorial and was then reworked with my own content and projects. The 3D models and some of the images come from the tutorial's assets.

## Contact

- LinkedIn: [Alexandros Melas](https://www.linkedin.com/in/alexandros-melas-4a36a4174/)
- GitHub: [@doctoralex9](https://github.com/doctoralex9)
