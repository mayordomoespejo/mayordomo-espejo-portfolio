import type { ProjectImage } from "@/lib/data/projects"

export type { ProjectImage }

export interface LabProject {
  slug: string
  title: string
  subtitle: string
  year: string
  stack: string[]
  /** Path to the project logo SVG in /public */
  logo: string
  /** Card background colour — should contrast with the logo */
  bg: string
  /** GitHub repository URL — leave undefined until the repo is public */
  githubUrl?: string
  /** Live project URL — leave undefined until deployed */
  url?: string
  /** Technical highlights shown in the detail page */
  features: string[]
  howItWorks?: string[]
  /** Gallery images — add when screenshots are ready */
  images: ProjectImage[]
}

export const labProjects: LabProject[] = [
  {
    slug: "citadex",
    title: "Citadex",
    subtitle: "Rick & Morty character explorer built with Angular 21",
    year: "2026",
    stack: ["Angular 21", "TypeScript", "RxJS", "Reactive Forms", "Angular Router", "SCSS", "BEM", "Vitest", "ESLint", "Prettier"],
    logo: "/images/lab/citadex.svg",
    bg: "#0c1810",
    features: [
      "Standalone Angular 21 components using signals-based reactivity and the inject() pattern — no NgModules, aligned with the current Angular recommended architecture",
      "Debounced search and multi-filter state (status, gender, page) encoded in URL query params via ActivatedRoute, making every filtered view bookmarkable and shareable",
      "Reactive HTTP pipeline built with queryParamMap → switchMap → HttpClient (withFetch()) → signals; catchError inside switchMap keeps the stream alive after upstream errors without resetting pagination",
      "Custom TitleStrategy updating document <title> on every route transition, registered as a single provider at app root",
      "CSS stagger entrance animation driven by a --card-index custom property set per card inside the @for loop — zero @angular/animations runtime dependency",
      "Accessible custom Select built as a ControlValueAccessor, integrating natively with Reactive Forms without wrapper hacks",
      "Full test suite with Vitest, Angular TestBed and HttpTestingController; HTTP interactions mocked at transport level",
    ],
    howItWorks: [
      "The home route fetches universe-wide stats (characters, episodes, locations) on init via a HomeService signal.",
      "The characters route is lazy-loaded; a FormControl drives the debounced search query appended to the API URL as a query param.",
      "Active filters and current page are also stored in query params — the URL is the single source of truth, and the browser Back button works for free.",
      "Each character card links to a detail page that resolves the character and its episode list in parallel via forkJoin.",
      "The FavoritesService persists selected IDs to localStorage; the custom Select ControlValueAccessor bridges the dropdown to a FormGroup.",
    ],
    images: [],
  },
  {
    slug: "dayfold",
    title: "Dayfold",
    subtitle: "Historical events explorer with a scroll-driven radial wheel",
    year: "2026",
    stack: ["React 19", "TypeScript", "Vite", "TanStack Query v5", "React Router v7", "i18next", "SCSS"],
    logo: "/images/lab/dayfold.svg",
    bg: "#f5f0e8",
    features: [
      "Scroll-driven radial wheel mapping scroll position to rotation angle in real time, with a debounced snap timer that settles on the nearest event once the user stops scrolling",
      "URL as canonical state: month and day encoded in search params via a custom useTimelineDate hook; out-of-range values are auto-clamped to valid calendar dates on parse",
      "TanStack Query v5 with staleTime: Infinity and composite query keys [lang, month, day] — no re-fetch on re-render; a language switch triggers a targeted cache invalidation rather than a full reload",
      "Wikimedia On This Day feed API responses mapped into typed TimelineEvent[] models sorted ascending by year, decoupling the UI entirely from the upstream schema",
      "11 UI languages via i18next with browser locale auto-detection; the Wikipedia content language is stored separately in localStorage, allowing the UI language and article language to differ independently",
      "Concerns isolated in custom hooks: useTimelineDate (URL state), useOnThisDayEvents (data layer), useTheme (document class sync and persistence)",
    ],
    howItWorks: [
      "On load, useTimelineDate reads month and day from the URL and clamps them to a valid date; today is used as the default.",
      "useOnThisDayEvents queries the Wikimedia Feed API via TanStack Query — results are cached indefinitely and keyed by [lang, month, day].",
      "The radial wheel renders the sorted TimelineEvent[] as arc segments; scrolling rotates the wheel and a snap timer settles on the nearest item.",
      "Selecting a segment reveals the event card with title, year, excerpt and a link to the Wikipedia article.",
      "Changing language re-keys the query, fetching the Wikipedia edition in the new language while the previous data stays visible during the transition.",
    ],
    images: [],
  },
  {
    slug: "dealwing",
    title: "DealWing",
    subtitle: "Flight deal finder with interactive map and a full-stack BFF",
    year: "2026",
    stack: ["React 19", "TypeScript", "Vite", "React Router v7", "TanStack Query v5", "react-hook-form", "Zod v4", "MapLibre GL JS v5", "Framer Motion v12", "CSS Modules", "i18next", "Vercel Functions", "Duffel API", "Vitest", "Playwright", "GitHub Actions"],
    logo: "/images/lab/dealwing.svg",
    bg: "#0c1a2e",
    features: [
      "Split-view interface: MapLibre GL JS v5 with OpenFreeMap tiles (no API key) rendering curved GeoJSON arc routes and animated price-bubble markers per result",
      "BFF layer via Vercel Serverless Functions proxying Duffel and RapidAPI — API credentials never reach the client bundle",
      "Flight search form validated with react-hook-form and a Zod v4 schema resolver; airport autocomplete with debounced search against a local IATA/city dataset",
      "Deal Score algorithm (0–100) computed relative to the full result set: price 60%, duration 30%, stops 10%; CO₂ estimated per passenger with a simplified ICAO method",
      "Search history (last 8 queries in localStorage) and a /saved route code-split with React.lazy; React.memo on FlightCard prevents re-renders from map interaction events",
      "Framer Motion v12 stagger on result cards, spring-animated detail modal, fade toasts, and layout animations on sidebar collapse",
      "Accessibility: / and Esc keyboard shortcuts, focus trap in the modal, full ARIA labelling and keyboard navigation on autocomplete and custom selects",
      "Unit tests with Vitest and Testing Library covering deal scoring, CO₂ and formatters; Playwright E2E on core search flows; CI pipeline on GitHub Actions",
    ],
    howItWorks: [
      "The user fills in origin, destination and travel dates; Zod validates the form schema and react-hook-form surfaces field-level errors.",
      "On submit, a request goes to /api/offers — a Vercel serverless function that forwards it to the Duffel sandbox API and shapes the response.",
      "TanStack Query caches results for 5 minutes; the map renders arc lines between airports and places animated price markers at the destination.",
      "Deal Score ranks all returned offers; clicking a card opens a spring-animated modal with the full itinerary, layover breakdown and CO₂ card.",
      "Airport pins on the map are interactive: clicking one populates the corresponding form field and updates the arc layer in real time.",
    ],
    images: [],
  },
  {
    slug: "pokelocator",
    title: "PokéLocator",
    subtitle: "Pokémon explorer with infinite scroll, filters, comparisons and dark mode",
    year: "2026",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "TanStack Query v5", "Framer Motion v12", "Zustand v5", "next-themes", "Lucide React", "Vitest", "Testing Library", "Playwright", "ESLint 9", "Prettier", "Husky", "GitHub Actions"],
    logo: "/images/lab/pokelocator.svg",
    bg: "#1a1a2e",
    features: [
      "Infinite scroll grid with TanStack Query useInfiniteQuery; type filter transparently swaps to a regular useQuery when PokéAPI returns a non-paginated full-type list, without changes to the UI layer",
      "Client-side search: all ~1 300 Pokémon names fetched once (staleTime: Infinity) and filtered with a 300ms debounce — eliminates per-keystroke API round-trips",
      "Static generation with generateStaticParams for the first 151 detail pages; server-side fetch cache set to revalidate: 86400 for the rest",
      "Tailwind CSS v4 with the new @theme CSS token API: design tokens defined in :root / .dark and mapped to utility classes via @theme inline — no tailwind.config.js needed",
      "Side-by-side Pokémon comparison (Zustand v5 + Persist middleware) reading from the existing TanStack Query cache — no duplicate network requests",
      "Promise.allSettled on batch detail fetches: individual PokéAPI 404s for non-standard forms are swallowed without aborting the list render",
      "Dark mode with next-themes: system preference honoured on first server render, user override persisted in localStorage, zero FOUC",
      "Full quality pipeline: Vitest unit and integration tests, Playwright E2E, ESLint 9, Prettier, Husky pre-commit hooks, GitHub Actions CI",
    ],
    howItWorks: [
      "The list page runs useInfiniteQuery against PokéAPI, fetching 24 items at a time and batch-resolving each page's details in parallel with Promise.allSettled.",
      "Activating a type filter switches the data source to /type/{name} and replaces infinite scroll with a regular grid — the URL search param drives both the query key and the UI state.",
      "The search dropdown fetches all ~1 300 names once on mount and filters client-side with a 300ms debounce; results are displayed as a keyboard-navigable suggestions list.",
      "The comparison view reads both Pokémon from the existing Query cache — if a detail page was already visited, no new request is made.",
      "On the detail page, the evolution chain is resolved recursively from the species endpoint; stat bars animate in on mount with Framer Motion.",
    ],
    images: [],
  },
  {
    slug: "pulse",
    title: "Pulse",
    subtitle: "Auth-gated video discovery app powered by the Pexels Videos API",
    year: "2026",
    stack: ["React 19", "TypeScript", "Vite", "React Router v6", "Zustand v5", "TanStack Query v5", "Formik", "Yup", "Axios", "react-player", "media-chrome", "SCSS", "BEM", "i18next"],
    logo: "/images/lab/pulse.svg",
    bg: "#1a0808",
    features: [
      "Auth-gated SPA: Formik + Yup login form validates credentials before storing the session in a Zustand v5 slice with Persist middleware, protecting all routes across page reloads",
      "Video feed and keyword search against the Pexels Videos API via a typed Axios client; orientation, size and locale filters applied as query params without resetting the TanStack Query cache key unnecessarily",
      "Custom video player composed with react-player inside a media-chrome shell, providing accessible, style-agnostic playback controls without overriding native browser UI",
      "Playlist navigation and per-video quality selector on the detail page; TanStack Query manages caching and stale-while-revalidate semantics across all API requests",
      "SCSS/BEM architecture across all components with design tokens for colour, spacing and transitions defined in a single _variables.scss",
      "EN/ES internationalisation via react-i18next with lazy-loaded JSON locale files; language preference persisted to localStorage",
      "Pexels API attribution implemented per their terms of service: footer attribution link and per-video author credit on every content-bearing screen",
    ],
    howItWorks: [
      "On first load the app checks Zustand's persisted storage for a valid session; if absent, all routes redirect to the login gate.",
      "Formik manages the login form; Yup validates email format and required fields before the auth service compares them against environment-variable credentials and Zustand stores the session.",
      "The featured feed and search pages query the Pexels API via Axios, with results cached and paginated by TanStack Query.",
      "Each video card navigates to a detail page where react-player renders the video inside a media-chrome shell with a quality selector sourced from the Pexels video files array.",
      "Changing the search query or filters updates the TanStack Query key, triggering a new request while the previous cached data is shown as a skeleton during the transition.",
    ],
    images: [],
  },
  {
    slug: "portfolio",
    title: "Mayordomo Espejo Portfolio",
    subtitle: "Personal portfolio built with Next.js 16, Tailwind CSS and Framer Motion",
    year: "2026",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "next-themes", "pnpm"],
    logo: "/images/lab/portfolio.svg",
    bg: "#0a0a0a",
    features: [
      "Next.js 16 App Router with generateStaticParams pre-rendering all project and lab detail pages at build time — zero server-side runtime required in production",
      "Custom locale context exposing a t() getter typed against a single translations.ts constant — no external i18n library, locale persisted to localStorage with no flash on load",
      "Framer Motion entrance animations defined as reusable variant objects in lib/motion.ts; stagger delays composed per-section without repeating animation configuration",
      "Dark / light mode with next-themes: system preference honoured on first render, user override stored in localStorage, colour tokens applied via CSS custom properties",
      "Infinite marquee built with CSS @keyframes translateX(-50%) on a doubled item list; animation-play-state: paused on hover, animation disabled entirely under prefers-reduced-motion",
      "Responsive layout with Tailwind CSS and centralised design tokens; no custom CSS outside of the marquee keyframes and a handful of global resets",
    ],
    howItWorks: [
      "The root layout wraps the tree in ThemeProvider and LocaleProvider; locale is resolved from localStorage on the client, falling back to the browser language.",
      "Project and lab detail pages are statically generated from typed TypeScript data modules — adding a new project is a single data entry with no routing changes needed.",
      "Framer motion variants in lib/motion.ts are spread onto motion.div elements; each section adds a stagger delay offset to create a sequenced reveal.",
      "The marquee duplicates the items array before rendering so the CSS loop appears seamless regardless of how many cards are in the list.",
      "Translations are plain objects keyed by locale; the t() function does a single property lookup and falls back to an empty string for missing keys.",
    ],
    images: [],
  },
]

export function getLabProject(slug: string): LabProject | undefined {
  return labProjects.find((p) => p.slug === slug)
}

export function getAdjacentLabProjects(slug: string) {
  const index = labProjects.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? labProjects[index - 1] : null
  const next = index < labProjects.length - 1 ? labProjects[index + 1] : null
  return { prev, next }
}
