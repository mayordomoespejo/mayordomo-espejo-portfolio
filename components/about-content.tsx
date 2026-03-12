"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Award } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { GyozaIcon } from "@/components/icons"

// ─── Static data ─────────────────────────────────────────────────────────────

const SKILL_TAGS: Record<string, string[]> = {
  programming: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Angular",
    "Vue 3",
    "Java",
    "Expo",
    "Vite",
  ],
  state: [
    "Zustand",
    "TanStack Query",
    "TanStack Table",
    "Pinia",
    "Vuex",
    "REST APIs",
    "Firebase",
    "Axios",
  ],
  forms: ["Formik", "Yup", "Zod", "react-hook-form"],
  mobile: [
    "Expo Router",
    "React Navigation",
    "React Native Maps",
    "Async Storage",
    "Firebase Auth",
    "WebView",
    "Push Notifications",
  ],
  automation: ["n8n", "OpenAI", "Codex", "RAG Systems", "Pinecone", "Cursor"],
  ui: [
    "HTML5",
    "CSS3",
    "Sass (SCSS)",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Design",
    "React Select",
    "i18n / i18next",
  ],
  build: ["Vite", "Expo EAS", "Storybook", "CI/CD", "Git", "GitHub", "Babel", "SWC"],
  quality: ["ESLint", "Vitest", "Testing Library", "Playwright", "Prettier"],
}

const SKILL_ORDER = [
  "programming",
  "state",
  "forms",
  "mobile",
  "automation",
  "ui",
  "build",
  "quality",
  "languages",
] as const

interface Certification {
  /** English name */
  name: string
  /** Spanish name */
  nameEs: string
  issuer: string
  date: string
  skills: string[]
  /** Path under /public — omit if no certificate image is available yet */
  image?: string
}

const CERTIFICATIONS: Certification[] = [
  {
    name: "AI-Driven Development from Zero to Production",
    nameEs: "Desarrollo con IA de 0 a producción",
    issuer: "BIGschool",
    date: "2026",
    skills: ["AI Tools", "Cursor", "OpenAI", "Codex", "Prompt Engineering", "Automation"],
  },
  {
    name: "Responsive Web Design",
    nameEs: "Diseño Web Adaptable",
    issuer: "freeCodeCamp",
    date: "2026",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid"],
  },
  {
    name: "B1 English for Developers",
    nameEs: "B1 Inglés para Desarrolladores",
    issuer: "freeCodeCamp",
    date: "2026",
    skills: ["English", "Technical Communication", "Developer Vocabulary"],
  },
  {
    name: "Advanced Java",
    nameEs: "Java Avanzado",
    issuer: "OpenBootcamp",
    date: "2023",
    skills: ["Java", "OOP", "Data Structures", "Algorithms", "Backend Development"],
    image: "/images/certs/java_avanzado.png",
  },
  {
    name: "Java Fundamentals",
    nameEs: "Java Básico",
    issuer: "OpenBootcamp",
    date: "2023",
    skills: ["Java", "OOP", "Programming", "Algorithms", "Software Development"],
    image: "/images/certs/java_basico.png",
  },
  {
    name: "Programming Concepts",
    nameEs: "Conceptos de la programación",
    issuer: "OpenBootcamp",
    date: "2023",
    skills: ["Programming Fundamentals", "Programming Logic", "Algorithms", "Software Development"],
    image: "/images/certs/conceptos_programacion.png",
  },
  {
    name: "Introduction to Programming",
    nameEs: "Introducción a la programación",
    issuer: "OpenBootcamp",
    date: "2023",
    skills: ["Programming", "Logic", "Algorithms", "JavaScript", "Web Development", "Problem Solving"],
    image: "/images/certs/introduccion_programacion.png",
  },
]

// ─── Cert thumbnail ───────────────────────────────────────────────────────────

/**
 * Fixed 16:9 thumbnail — uniform for all certs regardless of actual image ratio.
 * object-cover ensures the box is always filled.
 */
function CertThumbnail({ src, title, onClick }: { src: string; title: string; onClick: () => void }) {
  const { t } = useLocale()

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t("about.certifications.view")}
      className="group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Fixed 16:9 box — uniform across all certs */}
      <div className="relative w-[160px] overflow-hidden rounded-lg border border-border/60 bg-muted/30 shadow-sm transition-shadow group-hover:shadow-md" style={{ aspectRatio: "16/9" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover"
          draggable={false}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <span className="scale-90 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-medium text-foreground opacity-0 shadow transition-all group-hover:scale-100 group-hover:opacity-100">
            {t("about.certifications.view")}
          </span>
        </div>
      </div>
    </button>
  )
}

// ─── Cert card ────────────────────────────────────────────────────────────────

function CertCard({
  cert,
  onView,
}: {
  cert: Certification
  onView: (pdf: string, name: string) => void
}) {
  const { locale } = useLocale()
  const name = locale === "es" ? cert.nameEs : cert.name

  return (
    <div className="flex items-center gap-1 rounded-xl border border-border/60 bg-card p-4">
      {/* Text block — medal sits in the title row so it's naturally aligned with it */}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1.5">
            <Award className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" aria-hidden />
            <span className="truncate text-sm font-semibold text-foreground">{name}</span>
          </div>
          <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground/50">
            {cert.date}
          </span>
        </div>
        <span className="pl-5 text-xs text-muted-foreground/70">{cert.issuer}</span>
        <div className="flex flex-wrap gap-1.5 pl-5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="rounded bg-foreground/[0.05] px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Thumbnail — right side, centrado verticalmente respecto al contenido */}
      {cert.image && (
        <div className="flex items-center self-stretch pl-4">
          <CertThumbnail
            src={cert.image}
            title={name}
            onClick={() => onView(cert.image!, name)}
          />
        </div>
      )}
    </div>
  )
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function CertLightbox({
  image,
  name,
  onClose,
}: {
  image: string
  name: string
  onClose: () => void
}) {
  const { t } = useLocale()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal wraps the image — no fixed size, content drives dimensions */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex max-h-[90vh] max-w-[90vw] flex-col overflow-hidden rounded-2xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border/60 px-4 py-3">
          <span className="truncate text-sm font-medium text-foreground">{name}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("about.certifications.close")}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Image — modal height/width determined by actual image dimensions */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="block max-h-[80vh] w-auto max-w-full object-contain"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * About page body — order: Bio · Experience · Skills · Core Stack · Education · Certifications
 */
export function AboutContent() {
  const { t, dict } = useLocale()
  const bullets = dict["about.experience.gyoza.bullets"] as readonly string[]
  const educationItems = dict["about.education.items"] as readonly {
    year: string
    label: string
  }[]

  const [lightbox, setLightbox] = useState<{ image: string; name: string } | null>(null)

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-3xl flex-col gap-12">

        {/* ── Title ── */}
        <motion.h1
          {...fadeUp}
          className="font-semibold tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          {t("about.title")}
        </motion.h1>

        {/* ── Bio ── */}
        <motion.div {...fadeUp} className="flex flex-col gap-5">
          <p className="text-base leading-relaxed text-muted-foreground">{t("about.bio.1")}</p>
          <p className="text-base leading-relaxed text-muted-foreground">{t("about.bio.2")}</p>
          <p className="text-base leading-relaxed text-muted-foreground">{t("about.bio.3")}</p>
          <p className="text-sm italic text-muted-foreground/75">{t("about.bio.availability")}</p>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        {/* ── Experience ── */}
        <motion.div {...fadeUp} className="flex flex-col gap-6">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.experience.title")}
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="flex items-center gap-2 font-medium text-foreground">
                <GyozaIcon className="h-5 w-5 shrink-0 text-[#FA2F2F]" aria-hidden />
                {t("about.experience.gyoza.title")}
              </h3>
              <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground/60">
                {t("about.experience.gyoza.date")}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("about.experience.gyoza.summary")}
            </p>
            <ul className="flex flex-col gap-2 pt-1 text-sm text-muted-foreground">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        {/* ── Skills ── */}
        <motion.div {...fadeUp} className="flex flex-col gap-5">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.skills.title")}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {SKILL_ORDER.map((key) => (
              <div key={key} className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3">
                <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                  {key === "languages"
                    ? t("about.skills.languages")
                    : t(`about.skills.${key}` as "about.skills.programming")}
                </h3>
                {key === "languages" ? (
                  <p className="text-sm text-muted-foreground">
                    {t("about.skills.langs.native")} · {t("about.skills.langs.english")}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {(SKILL_TAGS[key] ?? []).map((skill) => (
                      <span
                        key={skill}
                        className="rounded bg-foreground/[0.06] px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        {/* ── Core Stack ── */}
        <motion.div {...fadeUp} className="flex flex-col gap-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.coreStack.title")}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("about.coreStack.text")}
          </p>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        {/* ── Education ── */}
        <motion.div {...fadeUp} className="flex flex-col gap-5">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.education.title")}
          </h2>
          <ul className="flex flex-col gap-0">
            {educationItems.map((item, i) => (
              <li
                key={i}
                className="flex items-baseline gap-5 py-2.5 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-border/60"
              >
                <span className="w-24 shrink-0 font-mono text-xs tabular-nums text-muted-foreground/60">
                  {item.year}
                </span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        {/* ── Certifications ── */}
        <motion.div {...fadeUp} className="flex flex-col gap-5">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.certifications.title")}
          </h2>
          <div className="flex flex-col gap-3">
            {CERTIFICATIONS.map((cert) => (
              <CertCard
                key={cert.name}
                cert={cert}
                onView={(image, name) => setLightbox({ image, name })}
              />
            ))}
          </div>
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <CertLightbox
            image={lightbox.image}
            name={lightbox.name}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
