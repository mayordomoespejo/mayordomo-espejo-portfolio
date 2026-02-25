/**
 * Translations for es/en. Default locale is device preference; user can override.
 */

export type Locale = "es" | "en"

export const defaultLocale: Locale = "en"

export const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.work": "Proyectos",
    "nav.linkedIn": "LinkedIn ↗",
    "nav.email": "Enviar email",
    "nav.toggleMenu": "Abrir o cerrar menú",
    "nav.themeLight": "Usar tema claro",
    "nav.themeDark": "Usar tema oscuro",

    "hero.role": "Frontend Developer",
    "hero.subtitle":
      "Construyo productos web y móviles escalables con React y React Native. Enfocado en rendimiento, mantenibilidad y calidad a largo plazo.",
    "hero.location": "Alicante, España · Remoto y reubicación",
    "hero.viewWork": "Proyectos",
    "hero.aboutMe": "Sobre mí",

    "contact.title": "Trabajemos juntos",

    "work.sectionTitle": "Proyectos destacados",

    "project.allProjects": "Todos los proyectos",
    "project.visitProject": "Ver proyecto",
    "project.viewInFigma": "Ver en Figma",
    "project.theChallenge": "El reto",
    "project.myRole": "Mi rol",
    "project.keyFeatures": "Características principales",
    "project.howItWorks": "Cómo funciona",
    "project.whyIBuiltThis": "Por qué lo construí",
    "project.uxProcess": "Proceso UX",
    "project.userTestInsights": "Insights de tests de usuario",
    "project.keyFindings": "Hallazgos clave",
    "project.theOutcome": "El resultado",
    "project.gallery": "Galería",
    "project.prevImage": "Imagen anterior",
    "project.nextImage": "Imagen siguiente",
    "project.goToImage": "Ir a la imagen",

    "about.title": "Sobre mí",
    "about.bio.1":
      "Soy desarrollador Frontend especializado en aplicaciones web y móviles con React y React Native, enfocado en crear productos robustos, escalables y fáciles de mantener en entornos reales de producción.",
    "about.bio.2":
      "A lo largo de mi experiencia he trabajado en proyectos complejos desde la fase inicial hasta su puesta en producción, participando en decisiones técnicas, optimización de rendimiento y mejora continua del producto.",
    "about.bio.3":
      "Me caracterizo por ser constante, responsable y orientado a la calidad del código. Disfruto colaborando en equipos ágiles, resolviendo problemas reales y construyendo soluciones que aporten valor a largo plazo.",
    "about.bio.availability":
      "Actualmente abierto a oportunidades remotas o híbridas en entornos de producto y tecnología.",
    "about.skills.title": "Skills",
    "about.skills.programming": "Lenguajes y frameworks",
    "about.skills.state": "Estado y datos",
    "about.skills.forms": "Formularios y validación",
    "about.skills.mobile": "Desarrollo móvil",
    "about.skills.automation": "Automatización e IA",
    "about.skills.ui": "UI y estilos",
    "about.skills.build": "Build y herramientas",
    "about.skills.quality": "Calidad de código",
    "about.skills.languages": "Idiomas",
    "about.education.title": "Educación",
    "about.experience.title": "Experiencia profesional",
    "about.coreStack.title": "Stack principal",
    "about.experience.gyoza.title": "GYOZA TECHNOLOGY STUDIO S.L. — Frontend Developer (Remoto)",
    "about.experience.gyoza.date": "Febrero 2024 – Actualidad",
    "about.experience.gyoza.summary":
      "Desarrollo y mantenimiento de aplicaciones web y móviles en producción, enfocadas en rendimiento, estabilidad y experiencia de usuario.",
    "about.experience.gyoza.bullets": [
      "Apps multiplataforma con React y React Native (Expo).",
      "Formularios, validación (Formik/Yup), APIs y estado global (Zustand, TanStack Query).",
      "Proyectos B2C y B2B: eCommerce, áreas de cliente, paneles de administración e integraciones (pago, mapas, CMS).",
      "Automatización con n8n y uso de IA (Cursor, OpenAI) en el flujo de trabajo.",
      "Colaboración en arquitectura y equipos multidisciplinares.",
    ],
    "about.education.items": [
      { year: "2024", label: "Técnico Superior en Desarrollo de Aplicaciones Web — ILERNA FP" },
      { year: "2004", label: "Bachillerato Científico-Tecnológico — IES Ricardo Ortega (Murcia)" },
    ],
    "about.skills.langs.native": "Español (nativo)",
    "about.skills.langs.english": "Inglés – Intermedio-Alto (B2+)",
    "about.coreStack.text":
      "React · React Native · Expo · Vite · Next.js · Vue 3 · TypeScript · Zustand · TanStack Query · Pinia · Formik · Yup · Axios · Firebase · Google Maps API · i18next · Sass · n8n · Git",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Projects",
    "nav.linkedIn": "LinkedIn ↗",
    "nav.email": "Send email",
    "nav.toggleMenu": "Toggle menu",
    "nav.themeLight": "Use light theme",
    "nav.themeDark": "Use dark theme",

    "hero.role": "Frontend Developer",
    "hero.subtitle":
      "Building scalable web and mobile products with React and React Native. Focused on performance, maintainability, and long-term quality.",
    "hero.location": "Alicante, Spain · Open to Remote & Relocation",
    "hero.viewWork": "Projects",
    "hero.aboutMe": "About Me",

    "contact.title": "Let's work together",

    "work.sectionTitle": "Selected Work",

    "project.allProjects": "All Projects",
    "project.visitProject": "Visit project",
    "project.viewInFigma": "View in Figma",
    "project.theChallenge": "The Challenge",
    "project.myRole": "My Role",
    "project.keyFeatures": "Key Features",
    "project.howItWorks": "How It Works",
    "project.whyIBuiltThis": "Why I Built This",
    "project.uxProcess": "UX Process",
    "project.userTestInsights": "User Testing Insights",
    "project.keyFindings": "Key Findings",
    "project.theOutcome": "The Outcome",
    "project.gallery": "Gallery",
    "project.prevImage": "Previous image",
    "project.nextImage": "Next image",
    "project.goToImage": "Go to image",

    "about.title": "About Me",
    "about.bio.1":
      "I'm a Frontend developer specialized in web and mobile applications with React and React Native, focused on creating robust, scalable and maintainable products in real production environments.",
    "about.bio.2":
      "Throughout my experience I have worked on complex projects from the initial phase to production, participating in technical decisions, performance optimization and continuous product improvement.",
    "about.bio.3":
      "I am characterized by being consistent, responsible and focused on code quality. I enjoy collaborating in agile teams, solving real problems and building solutions that add long-term value.",
    "about.bio.availability":
      "Currently open to remote or hybrid opportunities in product and technology environments.",
    "about.skills.title": "Skills",
    "about.skills.programming": "Programming Languages & Frameworks",
    "about.skills.state": "State Management & Data",
    "about.skills.forms": "Forms & Validation",
    "about.skills.mobile": "Mobile Development",
    "about.skills.automation": "Automation & AI",
    "about.skills.ui": "UI & Styling",
    "about.skills.build": "Build & Tooling",
    "about.skills.quality": "Code Quality",
    "about.skills.languages": "Languages",
    "about.education.title": "Education",
    "about.experience.title": "Professional Experience",
    "about.coreStack.title": "Core Stack",
    "about.experience.gyoza.title": "GYOZA TECHNOLOGY STUDIO S.L. — Frontend Developer (Remote)",
    "about.experience.gyoza.date": "February 2024 – Present",
    "about.experience.gyoza.summary":
      "Development and maintenance of web and mobile applications in production, focused on performance, stability and user experience.",
    "about.experience.gyoza.bullets": [
      "Cross-platform apps with React and React Native (Expo).",
      "Forms, validation (Formik/Yup), APIs, and global state (Zustand, TanStack Query).",
      "B2C and B2B products: eCommerce, customer areas, admin panels, and third-party integrations (payment, maps, CMS).",
      "Automation with n8n and AI tools (Cursor, OpenAI) in the workflow.",
      "Architecture input and collaboration with multidisciplinary teams.",
    ],
    "about.education.items": [
      { year: "2024", label: "Higher Technician in Web Application Development — ILERNA FP" },
      {
        year: "2004",
        label: "Scientific-Technological High School Diploma — IES Ricardo Ortega (Murcia, Spain)",
      },
    ],
    "about.skills.langs.native": "Spanish (Native)",
    "about.skills.langs.english": "English – Upper-Intermediate (B2+)",
    "about.coreStack.text":
      "React · React Native · Expo · Vite · Next.js · Vue 3 · TypeScript · Zustand · TanStack Query · Pinia · Formik · Yup · Axios · Firebase · Google Maps API · i18next · Sass · n8n · Git",
  },
} as const
