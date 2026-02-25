export interface ProjectImage {
  src: string
  alt: string
  type: "mobile" | "desktop" | "terminal" | "wireframe"
}

export interface UxProcess {
  title: string
  description: string
}

export interface UserTestInsight {
  area: string
  finding: string
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  year: string
  stack: string[]
  tags: string[]
  challenge: string
  myRole: string
  features: string[]
  results: string[]
  howItWorks?: string[]
  whyBuilt?: string[]
  uxProcess?: UxProcess[]
  userTestInsights?: UserTestInsight[]
  keyFindings?: string[]
  figmaUrl?: string
  images: ProjectImage[]
  cover: string
  url?: string
}

export const projects: Project[] = [
  {
    slug: "turbowash-terminal",
    title: "Turbowash Terminal",
    subtitle: "Payment interface for automated car wash kiosks",
    url: "https://turbowash.es/",
    year: "2025",
    stack: ["React Native", "Expo", "Hardware Integration"],
    tags: ["React Native"],
    challenge:
      "Turbowash needed a payment interface for outdoor kiosks \u2014 crystal clear in bright sunlight, supporting card and cash, and communicating with wash hardware via pulse signals.",
    myRole:
      "Frontend development in React Native. Key challenge: integrating real-time pulse communication for wash start, pause, and completion states.",
    features: [
      "Card and cash payment support",
      "Time-based and euro-based wash modes",
      "Real-time pulse communication with hardware",
      "Outdoor-optimized UI (high contrast, large touch targets)",
    ],
    results: [
      "Deployed across 5+ locations processing real transactions daily",
      "Zero-training interface \u2014 customers use it without assistance",
    ],
    howItWorks: [
      "Customer selects wash type and pays at the kiosk (card or cash).",
      "Hardware receives pulse signals to start the wash cycle.",
      "UI shows countdown and amount; supports pause and resume via pulses.",
      "Club members can apply loyalty pricing and redeem coupons.",
    ],
    cover: "/images/cover-turbowash.png",
    images: [
      {
        src: "/images/turbowash-terminal-1.png",
        alt: "Turbowash terminal home screen with pay-per-use pricing",
        type: "terminal",
      },
      {
        src: "/images/turbowash-terminal-2.png",
        alt: "Turbowash wash in progress with countdown timer",
        type: "terminal",
      },
      {
        src: "/images/turbowash-terminal-3.png",
        alt: "Turbowash active wash with elapsed time and amount",
        type: "terminal",
      },
      {
        src: "/images/turbowash-terminal-4.png",
        alt: "Turbowash club member pricing with bonus credits",
        type: "terminal",
      },
      {
        src: "/images/turbowash-terminal-5.png",
        alt: "Turbowash coupon selection screen",
        type: "terminal",
      },
    ],
  },
  {
    slug: "turbowash-portal",
    title: "Turbowash Client Portal",
    subtitle: "Customer dashboard for vehicle and service management",
    url: "https://turbowash.es/",
    year: "2025",
    stack: ["React", "REST API Integration"],
    tags: ["React"],
    challenge:
      "Turbowash customers needed a way to manage their accounts online \u2014 wash history, vehicles, invoices, and loyalty coupons. Premium feel, simple navigation.",
    myRole:
      "Frontend development. Key sections: user profile, vehicle management with type/color selector, invoice history, and coupon system.",
    features: [
      "Vehicle management with visual type/color selector",
      "Service history with detailed wash records",
      "Invoice download and billing management",
      "Loyalty program with coupon redemption",
    ],
    results: [
      "Clean, intuitive dashboard serving Turbowash customers",
      "Reduced support requests for billing inquiries",
    ],
    howItWorks: [
      "User logs in and sees dashboard with QR for in-station access.",
      "Vehicles can be added or edited with type and color selector.",
      "Service history and invoices are available for download.",
      "Loyalty coupons appear in the app and can be redeemed at the terminal.",
    ],
    cover: "/images/cover-turbowash.png",
    images: [
      {
        src: "/images/turbowash-area-cliente-1.png",
        alt: "Turbowash client dashboard with QR code and service history",
        type: "mobile",
      },
      {
        src: "/images/turbowash-area-cliente-2.png",
        alt: "Turbowash loyalty coupons list",
        type: "mobile",
      },
      {
        src: "/images/turbowash-area-cliente-3.png",
        alt: "Turbowash vehicle management screen",
        type: "mobile",
      },
    ],
  },
  {
    slug: "wetour",
    title: "Wetour",
    subtitle: "Community platform for Spain's leading fitness network",
    url: "https://wetourfit.com/",
    year: "2024",
    stack: ["Next.js", "React", "SEO Optimization"],
    tags: ["Next.js"],
    challenge:
      "Wezone, a fitness network with 11 centers and 15K+ active members, needed a platform to unify their community \u2014 discover events, connect with sports centers, and engage with content.",
    myRole:
      "Frontend development. UX research and production build with Next.js (SEO-first).",
    features: [
      "300+ sports centers directory",
      "800+ monthly events with registration",
      "Gamification system (challenges, WZN passport)",
      "Payment integration for event subscriptions",
      "1.2K+ community publications",
    ],
    results: [
      "Platform live with organic growth via SEO-first architecture",
      "New revenue stream through paid event registrations",
    ],
    howItWorks: [
      "Users discover centers and events via directory and map.",
      "Event registration and payment flow with gamification (challenges, WZN passport).",
      "Community feed shows publications and engagement.",
      "Admins manage content via CMS; menu sync and BI integration.",
    ],
    cover: "/images/cover-wetour.png",
    images: [
      {
        src: "/images/wetour-desktop-5.png",
        alt: "WeTour community feed with topic filters and publications",
        type: "desktop",
      },
      {
        src: "/images/wetour-desktop-6.png",
        alt: "WeTour gym detail page showing Wezone Plaza Castilla",
        type: "desktop",
      },
      {
        src: "/images/wetour-desktop-4.png",
        alt: "WeTour user profile with badges and achievements",
        type: "desktop",
      },
      {
        src: "/images/wetour-mobile-1.png",
        alt: "WeTour mobile events listing",
        type: "mobile",
      },
      {
        src: "/images/wetour-mobile-2.png",
        alt: "WeTour mobile map view with gym locations",
        type: "mobile",
      },
      {
        src: "/images/wetour-mobile-3.png",
        alt: "WeTour mobile gym detail with reviews",
        type: "mobile",
      },
    ],
  },
  {
    slug: "goiko-ordering",
    title: "Goiko Ordering",
    subtitle:
      "Full eCommerce platform for Spain's iconic burger chain",
    url: "https://www.goiko.com/es/delivery",
    year: "2022-2023",
    stack: ["Vue 3", "Vuex", "JavaScript", "Paycomet", "Deliverect", "Google Maps API"],
    tags: ["Vue"],
    challenge:
      "Goiko, one of Spain's most recognized burger chains with 100+ locations, needed a custom online ordering platform. The solution had to handle delivery and pickup orders, integrate with multiple third-party services, and provide a seamless experience that matched their bold brand identity.",
    myRole:
      "I was responsible for the frontend development of the entire eCommerce platform. Working closely with backend developers and the team, I built a fast, responsive application that handles real orders across all their locations daily.",
    features: [
      "Geolocation-based restaurant assignment for delivery and pickup",
      "Password-less authentication via magic link email",
      "Real-time order tracking with rider location on Google Maps",
      "Automatic menu sync with Deliverect across all locations",
      "Paycomet integration for secure card payments with tokenization",
      "Scheduled orders based on kitchen capacity",
      "Smart upselling at cart and checkout stages",
      "Coupon validation integrated with Goiko's BI platform",
    ],
    results: [
      "Live platform processing real orders daily across 100+ locations",
      "Seamless integration with existing POS systems via Deliverect",
      "Reduced dependency on third-party delivery apps",
      "Conversion tracking feeding directly into business intelligence",
    ],
    howItWorks: [
      "User enters address or allows geolocation; restaurant is assigned automatically.",
      "Menu is built from Deliverect; cart supports combos and customization.",
      "Checkout with Paycomet (tokenized cards), magic-link auth, and optional scheduling.",
      "Order tracking shows rider on map; coupons validated against Goiko BI.",
    ],
    cover: "/images/cover-goiko.png",
    images: [
      {
        src: "/images/goiko-desktop-1.png",
        alt: "Goiko product detail modal with burger customization options",
        type: "desktop",
      },
      {
        src: "/images/goiko-desktop-5.png",
        alt: "Goiko desktop checkout with order summary sidebar",
        type: "desktop",
      },
      {
        src: "/images/goiko-mobile-2.png",
        alt: "Goiko mobile menu with combos and burger categories",
        type: "mobile",
      },
      {
        src: "/images/goiko-mobile-3.png",
        alt: "Goiko mobile cart with order items and total",
        type: "mobile",
      },
      {
        src: "/images/goiko-mobile-4.png",
        alt: "Goiko mobile checkout with personal data and pickup details",
        type: "mobile",
      },
    ],
  },
  {
    slug: "turbowash-admin",
    title: "Turbowash Admin",
    subtitle: "Internal admin panel for locations, pricing, and operations",
    year: "2025",
    stack: ["React", "Vite", "TanStack Query", "TanStack Table", "Zustand"],
    tags: ["React"],
    challenge:
      "Turbowash needed an internal tool for staff to manage locations, wash configurations, pricing, and operational data without depending on developers for every change.",
    myRole:
      "Frontend development of the admin SPA: data tables with filters and pagination, forms with validation (Formik/Yup), and integration with the existing API.",
    features: [
      "Location and terminal management",
      "Pricing and wash configuration",
      "Data tables with sorting, filters, and pagination",
      "Form flows with validation and error handling",
    ],
    results: [
      "Operational team can update settings and view data autonomously",
      "Single React SPA aligned with the rest of the Turbowash front stack",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Turbowash Admin — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "goiko-customer-area",
    title: "Goiko Customer Area",
    subtitle: "Account management, orders, and loyalty for Goiko customers",
    year: "2022-2023",
    stack: ["React", "Vite", "Firebase", "Google Maps API", "React Query", "Zustand"],
    tags: ["React"],
    challenge:
      "Goiko needed a customer area where users could manage their profile, view order history, save addresses, and access loyalty benefits — with a consistent experience across devices.",
    myRole:
      "Frontend development: profile and address management, order history, integration with Firebase Auth and Google Maps, and QR/loyalty features.",
    features: [
      "Profile and address management with Google Maps",
      "Order history and reorder flow",
      "Firebase Authentication and optional reCAPTCHA",
      "QR codes and loyalty section",
    ],
    results: [
      "Unified customer area supporting the main Goiko ordering flow",
      "Reuse of addresses and preferences for faster checkout",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Goiko Customer Area — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "goiko-invoicing",
    title: "Goiko Invoicing",
    subtitle: "Invoice management and billing for Goiko franchisees",
    year: "2022-2023",
    stack: ["Vue 3", "Pinia", "Vite", "Naive UI"],
    tags: ["Vue"],
    challenge:
      "Franchisees needed a dedicated interface to consult and manage invoices and billing data, with a clear structure and export options.",
    myRole:
      "Frontend development with Vue 3 and Pinia: invoice listing, filters, and integration with the billing API; UI with Naive UI for consistency.",
    features: [
      "Invoice listing with search and filters",
      "Billing and payment status views",
      "Vue 3 Composition API and Pinia for state",
      "Naive UI component set",
    ],
    results: [
      "Franchisees can access billing data without going through the main ordering app",
      "Aligned UX with other Goiko internal tools",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Goiko Invoicing — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "goiko-online-menu",
    title: "Goiko Online Menu",
    subtitle: "Digital menu and product browsing for Goiko",
    year: "2022-2023",
    stack: ["React", "Vite", "React Query", "i18n", "GTM"],
    tags: ["React"],
    challenge:
      "Goiko needed a standalone digital menu experience for in-store or link sharing — browsable, searchable, and consistent with the main ordering brand.",
    myRole:
      "Frontend development: menu structure, search and filters, lazy-loaded images, and i18n; analytics via GTM.",
    features: [
      "Full menu browsing with categories and search",
      "Product detail and nutritional info",
      "i18n and responsive layout",
      "QR code support for in-store access",
    ],
    results: [
      "Standalone menu usable from QR or direct link",
      "Shared product data and branding with the main ordering app",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Goiko Online Menu — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "goiko-table-ordering",
    title: "Goiko Table Ordering",
    subtitle: "In-restaurant ordering from the table",
    year: "2022-2023",
    stack: ["React", "Create React App", "Formik", "Yup", "GTM"],
    tags: ["React"],
    challenge:
      "Goiko wanted a simple in-restaurant flow so customers could order from the table via a dedicated app — minimal steps and clear feedback for the kitchen.",
    myRole:
      "Frontend development: table ordering flow, form validation, and integration with the ordering backend; GTM for analytics.",
    features: [
      "Table-based ordering flow",
      "Menu selection and cart with validation",
      "Order confirmation and status feedback",
      "Analytics integration (GTM)",
    ],
    results: [
      "Faster in-restaurant orders without depending on staff devices",
      "Consistent experience with other Goiko digital products",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Goiko Table Ordering — placeholder for screenshot", type: "mobile" },
    ],
  },
  {
    slug: "aee-corporate-web",
    title: "AEE Corporate Web",
    subtitle: "Corporate website with CMS-driven content and i18n",
    year: "2024",
    stack: ["Next.js", "React", "Strapi Blocks", "i18next", "Sass"],
    tags: ["Next.js"],
    challenge:
      "AEE needed a modern corporate site with content managed via CMS (Strapi), multi-language support, and a structure that could scale with new sections and campaigns.",
    myRole:
      "Frontend development with Next.js: rendering Strapi block content, i18n (i18next), responsive layout, and carousels/sections for campaigns.",
    features: [
      "CMS-driven pages with Strapi Blocks renderer",
      "Multi-language (i18next) and date formatting",
      "Responsive layout and image optimization",
      "Carousels and dynamic sections",
    ],
    results: [
      "Marketing team can update content without code changes",
      "SEO-friendly structure and consistent branding",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "AEE Corporate Web — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "guido-portfolio",
    title: "Guido Portfolio",
    subtitle: "Personal portfolio site with Radix UI and Framer Motion",
    year: "2024",
    stack: ["Next.js", "React", "Radix UI", "Framer Motion", "Tailwind", "Zod"],
    tags: ["Next.js"],
    challenge:
      "A personal portfolio needed a distinctive, accessible site with smooth animations, form handling, and a clear presentation of projects and skills.",
    myRole:
      "Frontend development: layout, components with Radix UI, animations with Framer Motion, form validation with Zod/React Hook Form, and responsive design.",
    features: [
      "Project and experience sections with motion",
      "Contact form with validation",
      "Theme support and responsive layout",
      "Recharts for data visualization where needed",
    ],
    results: [
      "Polished portfolio with strong UX and accessibility",
      "Reusable patterns for future projects",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Guido Portfolio — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "project-v-libraries",
    title: "Proyecto V — Front Libraries",
    subtitle: "Monorepo of shared UI and client template for product ecosystem",
    year: "2024",
    stack: ["React", "Next.js", "Storybook", "Changesets", "npm Workspaces"],
    tags: ["React", "Next.js"],
    challenge:
      "Proyecto V needed a shared frontend foundation: a UI library with design tokens and Storybook, plus a client template (Next.js) that consumes it, to keep multiple products consistent and maintainable.",
    myRole:
      "Contribution to the monorepo: UI package with primitives and tokens, Storybook documentation, and client-template-web consuming the library; changesets for versioning.",
    features: [
      "UI library with design tokens and variants",
      "Storybook for component documentation",
      "Next.js client template consuming the library",
      "Changesets and workspace scripts",
    ],
    results: [
      "Single source of truth for UI across client projects",
      "Faster feature development with documented components",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Proyecto V Libraries — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "pulse-video-manager",
    title: "Pulse Video Manager",
    subtitle: "Video library, playlists, and daily workout scheduling",
    year: "2024",
    stack: ["React", "Vite", "TanStack Query", "Zustand", "Formik", "i18n", "Media Chrome"],
    tags: ["React"],
    challenge:
      "A fitness/content team needed an app to manage a video library, organize playlists, tag content, and schedule \"today's\" workouts — with a clear UX for browsing and drag-and-drop ordering.",
    myRole:
      "Frontend development: video and playlist CRUD, drag-and-drop ordering (FormKit), tags management, Today view, and video player integration (Media Chrome / Castable).",
    features: [
      "Video library with upload, metadata, and tags",
      "Playlists with drag-and-drop reordering",
      "Today page for scheduled workouts",
      "Auth and responsive layout with sidebar/nav",
    ],
    results: [
      "Content team can maintain playlists and schedules without dev involvement",
      "Consistent playback and scheduling experience",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Pulse Video Manager — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "time-tracking-billing",
    title: "Time Tracking — Billing & Licenses",
    subtitle: "Billing, licenses, and customer management for time-tracking product",
    year: "2024",
    stack: ["React", "Vite", "Firebase", "Google OAuth", "TanStack Query", "Zustand"],
    tags: ["React"],
    challenge:
      "The time-tracking product needed an admin app for billing, license management, and customer data — with secure auth and a clear overview for account managers.",
    myRole:
      "Frontend development: auth (Firebase, Google OAuth), customer and license management, billing views, and integration with the backend API.",
    features: [
      "Google OAuth and Firebase authentication",
      "Customer and license management",
      "Billing and subscription views",
      "Search, filters, and responsive tables",
    ],
    results: [
      "Account managers can handle licenses and billing in one place",
      "Secure access and consistent UX with the workspace app",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Time Tracking Billing — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "time-tracking-workspace",
    title: "Time Tracking — Workspace",
    subtitle: "Time entries, projects, and invoicing for teams",
    year: "2024",
    stack: ["React", "Vite", "TanStack Query", "React Date Range", "Zustand", "Formik"],
    tags: ["React"],
    challenge:
      "Users needed a workspace to log time, manage projects and customers, and generate or track invoices — with date ranges, reports, and a simple navigation.",
    myRole:
      "Frontend development: time entry forms, project and customer management, invoice views, and history with date range selection.",
    features: [
      "Time tracking and history with date range picker",
      "Projects and customers management",
      "Invoice management and generation",
      "i18n and responsive layout",
    ],
    results: [
      "Teams can track time and manage projects in one app",
      "Aligned with the billing app for a full product suite",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Time Tracking Workspace — placeholder for screenshot", type: "desktop" },
    ],
  },
  {
    slug: "wayvo",
    title: "Wayvo",
    subtitle: "AI-assisted trip planning and itineraries on mobile",
    year: "2024",
    stack: ["React Native", "Expo", "Firebase", "Google Sign-In", "React Native Maps", "TanStack Query"],
    tags: ["React Native"],
    challenge:
      "Wayvo needed a mobile app for travelers to plan trips with AI-assisted itineraries, day-by-day plans, recommendations, and optional premium unlock — with auth and push notifications.",
    myRole:
      "Frontend development in React Native (Expo): trip list and detail, itinerary tabs, checklist, accommodation and activity views, auth (Firebase, Apple/Google Sign-In), and deep linking.",
    features: [
      "Trip list (future/past) and trip detail with itinerary",
      "Day-by-day plan with activities and recommendations",
      "Checklist and accommodation links",
      "Firebase auth, Apple/Google Sign-In, push notifications",
    ],
    results: [
      "Travelers can plan and follow trips from a single app",
      "Premium content unlock and engagement via push",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Wayvo trip planner — placeholder for screenshot", type: "mobile" },
    ],
  },
  {
    slug: "wezone-plan-recommendator",
    title: "Wezone Plan Recommendator",
    subtitle: "Guided plan recommendation for Wezone fitness members",
    year: "2024",
    stack: ["React", "Vite", "TanStack Query", "TanStack Router", "Zustand", "Formik"],
    tags: ["React"],
    challenge:
      "Wezone wanted a focused web flow where members answer a short set of questions (center, goals, preferences) and receive a recommended plan — with optional contact form to receive the result by email.",
    myRole:
      "Frontend development: multi-step form (center selection, questions), result view, contact form, and integration with the recommendation API.",
    features: [
      "Center selection and step-by-step questions",
      "Plan recommendation result and CTA",
      "Contact form to receive plan by email",
      "i18n and responsive layout",
    ],
    results: [
      "Members get a clear recommendation without visiting the center",
      "Lead capture and follow-up for the sales team",
    ],
    cover: "/placeholder.svg",
    images: [
      { src: "/placeholder.svg", alt: "Wezone Plan Recommendator — placeholder for screenshot", type: "desktop" },
    ],
  },
]

/**
 * Returns a project by slug.
 */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/**
 * Returns previous and next projects for detail page navigation.
 */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null
  return { prev, next }
}
