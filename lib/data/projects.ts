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
