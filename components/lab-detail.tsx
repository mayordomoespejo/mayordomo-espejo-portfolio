"use client"

import { useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react"
import { getAdjacentLabProjects } from "@/lib/data/lab-projects"
import { getLabTranslation } from "@/lib/data/lab-translations"
import { ImageCarousel } from "@/components/image-carousel"
import { useLocale } from "@/lib/locale-context"
import { fadeUp, EASE } from "@/lib/motion"
import type { LabProject } from "@/lib/data/lab-projects"

type LabDetailProps = {
  slug: string
  /** LabProject is passed in from the server page to avoid re-importing on the client */
  project: LabProject
}

type SectionProps = {
  label: string
  children: React.ReactNode
}

function Section({ label, children }: SectionProps) {
  return (
    <motion.div {...fadeUp} className="flex flex-col gap-3 border-t border-border/60 pt-5">
      <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
        {label}
      </h2>
      {children}
    </motion.div>
  )
}

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/75">
      <span className="mt-[7px] block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/35" />
      {text}
    </li>
  )
}

export function LabDetail({ slug, project }: LabDetailProps) {
  const { t, locale } = useLocale()
  const { prev, next } = getAdjacentLabProjects(slug)

  const translated = useMemo(() => {
    const tr = getLabTranslation(slug, locale)
    if (!tr) return project
    return {
      ...project,
      subtitle: tr.subtitle,
      features: tr.features,
      ...(tr.howItWorks != null && { howItWorks: tr.howItWorks }),
    }
  }, [slug, locale, project])

  return (
    <div className="px-6 pb-24 pt-28 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <Link
            href="/#lab"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            {t("lab.allProjects")}
          </Link>
        </motion.div>

        {/* ── Hero: logo banner + title ── */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.07, ease: EASE }}
        >
          {/* Logo banner */}
          <div
            className="flex h-36 items-center justify-center overflow-hidden rounded-2xl sm:h-44"
            style={{ background: project.bg }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="h-16 w-auto object-contain sm:h-20"
            />
          </div>

          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <h1
                className="font-semibold leading-tight tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.35rem, 3.5vw, 1.9rem)" }}
              >
                {project.title}
              </h1>
              <p className="text-sm text-muted-foreground/80">{translated.subtitle}</p>
            </div>

            {(project.githubUrl || project.url) && (
              <div className="flex shrink-0 items-center gap-2 pt-0.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("lab.visitProject")}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Year + full stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.13, ease: EASE }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center rounded-md bg-secondary px-3 py-1.5 font-mono text-xs tabular-nums text-muted-foreground">
              {project.year}
            </span>
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── What I built ── */}
        <Section label={t("lab.keyFeatures")}>
          <ul className="flex flex-col gap-1.5">
            {translated.features.map((f, i) => (
              <BulletItem key={i} text={f} />
            ))}
          </ul>
        </Section>

        {/* ── How it works ── */}
        {translated.howItWorks && (
          <Section label={t("lab.howItWorks")}>
            <ol className="flex flex-col gap-2.5">
              {translated.howItWorks.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/75">
                  <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* ── Gallery (populated later) ── */}
        {project.images.length > 0 && (
          <motion.div {...fadeUp} className="flex flex-col gap-3">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              {t("lab.gallery")}
            </h2>
            <ImageCarousel images={project.images} />
          </motion.div>
        )}

        {/* ── Prev / next navigation ── */}
        <div className={`flex items-center justify-between ${project.images.length > 0 ? "border-t border-border pt-6" : ""}`}>
          {prev ? (
            <Link
              href={`/lab/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span className="font-medium">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/lab/${next.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-medium">{next.title}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span />
          )}
        </div>

      </div>
    </div>
  )
}
