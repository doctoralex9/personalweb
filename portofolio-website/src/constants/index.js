const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  /*{
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },*/
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of building" },
  { value: 8, suffix: "+", label: "Projects shipped" },
  { value: 2, suffix: "", label: "Production AI systems" },
  { value: 12, suffix: "+", label: "Technologies in stack" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.svg",
  },
  {
    imgPath: "/images/logos/company-logo-2.svg",
  },
  {
    imgPath: "/images/logos/company-logo-3.svg",
  },
  {
    imgPath: "/images/logos/company-logo-4.svg",
  },
  {
    imgPath: "/images/logos/company-logo-5.svg",
  },
  {
    imgPath: "/images/logos/company-logo-6.svg",
  },
  {
    imgPath: "/images/logos/company-logo-7.svg",
  },
  {
    imgPath: "/images/logos/company-logo-8.svg",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.svg",
  },
  {
    imgPath: "/images/logos/company-logo-11.svg",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Self taught Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Self taught Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    title: "AI Web Developer",
    where: "Freelance · Athens",
    date: "June 2026 - Present",
    logoPath: "/images/code.svg",
    imgPath: "/images/code.svg",
    summary: "Building 3D cinematic websites with scroll animations, using React, Vite, GSAP ScrollTrigger, Lenis, Three.js, React Three Fiber and Tailwind CSS, with AI image and video generation (Higgsfield) and an AI-assisted workflow in Claude Code.",
    stack: ["React", "Vite", "Next.js", "GSAP", "Lenis", "Supabase", "Higgsfield", "Claude Code"],
    responsibilities: [
      "Built Pitogyro and Bar, two scroll-driven concept sites for a souvlaki shop and a nightlife venue, with Vite + React, GSAP ScrollTrigger and Lenis smooth scrolling.",
      "Generated each site's cinematic video and imagery with AI (Higgsfield), and built the sites with an AI-assisted workflow: Claude Code, MCP servers and custom skills.",
      "Built Maritime CRM, a Next.js + Supabase (PostgreSQL) web app for managing clients and records, with its own data model, REST endpoints and a responsive UI.",
    ],
  },
  {
    title: "AI & Product Engineer",
    where: "7projectsAi · Full-time · Athens",
    date: "December 2025 - April 2026",
    logoPath: "/images/logos/7projects-mark.png",
    imgPath: "/images/logos/7projects.png",
    summary: "Built a production RAG chatbot and AI agents at an Athens AI startup, and improved the UI and UX of some of its products.",
    stack: ["Python", "TypeScript", "Next.js", "OpenAI API", "PostgreSQL / pgvector", "SQL Server"],
    responsibilities: [
      "Delivered a production text-to-SQL and RAG chatbot that answers questions in Greek and English over a Microsoft SQL Server database, using pgvector + OpenAI embeddings, hybrid search and confidence scoring.",
      "Set up proxy tunneling from local development to the live SQL Server, so development ran against real production data.",
      "Designed an agentic lead-generation pipeline (Search → Crawl → Filter → Qualify → Enrich → Persist) that finds and qualifies leads and drafts outreach messages, using tool calling and structured LLM outputs.",
    ],
  },
  {
    title: "Self taught Python Developer",
    where: "Independent Projects",
    date: "February 2024 - September 2025",
    logoPath: "/images/logos/python.svg",
    imgPath: "/images/logos/python.svg",
    summary: "Self directed Python learning: REST APIs, web frameworks (Django, Flask, FastAPI), databases (PostgreSQL, MySQL, SQL Server), testing, version control and monitoring (Postman, GitHub), AI (OpenAI, Anthropic, LangChain, Pydantic, MCP) and the basics of NumPy, Pandas and Matplotlib.",
    stack: ["Python", "Flask", "Django", "FastAPI", "SQLAlchemy", "MySQL", "MCP"],
    responsibilities: [
      "Built a Flask REST API with user-management endpoints and an AI chatbot (Coze Web SDK), with a Bootstrap frontend offering consultation links, accountant referrals, live weather, Google search and email summaries.",
      "Built a Django QR-code generator for text and URLs, backed by MySQL, with login and registration modals and a responsive UI.",
      "Built an MCP server in Python (FastMCP on FastAPI) that gives Claude Desktop two tools, a mood analyzer using TextBlob sentiment scoring and a Downloads-folder organizer with a dry-run mode.",
    ],
  },
  {
    title: "IT Intern",
    where: "Eurobank · Internship · Athens",
    date: "July 2021 - August 2021",
    logoPath: "/images/logos/eurobank-mark.svg",
    imgPath: "/images/logos/eurobank.svg",
    summary: "Summer IT internship at Eurobank, one of Greece's largest banks, focused on learning how banking systems run.",
    stack: ["COBOL", "Excel"],
    responsibilities: [
      "Learned how a bank's financial and payment systems work, inside a regulated enterprise environment.",
      "Picked up COBOL basics, the language behind many core banking systems.",
      "Used Excel for day-to-day data tasks and helped with general IT work.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};