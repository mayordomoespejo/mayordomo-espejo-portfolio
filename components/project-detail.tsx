"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { getAdjacentProjects } from "@/lib/data/projects"
import { ImageCarousel } from "@/components/image-carousel"
import { TechTag } from "@/components/tech-tag"
import { useTranslatedProject } from "@/hooks/use-translated-project"
import { useLocale } from "@/lib/locale-context"
import { getProjectTranslation } from "@/lib/data/project-translations"
import { fadeUp, EASE } from "@/lib/motion"
import { getProjectCoverScaleClass } from "@/lib/project-cover"

// ─── Hairline section — for narrative content blocks ─────────────────────────
function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      {...fadeUp}
      className="flex flex-col gap-3 border-t border-border/60 pt-5 pb-1"
    >
      <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
        {label}
      </h2>
      {children}
    </motion.div>
  )
}

// ─── Bullet list item ─────────────────────────────────────────────────────────
function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/75">
      <span className="mt-[7px] block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/35" />
      {text}
    </li>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export function ProjectDetail({ slug }: { slug: string }) {
  const project = useTranslatedProject(slug)
  const { t, locale } = useLocale()
  if (!project) return null

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <div className="px-6 pb-24 pt-28 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">

        {/* ── A · Header group ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <Link
              href="/#work"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {t("project.allProjects")}
            </Link>
          </motion.div>

          {/* Title + cover */}
          <motion.div
            className="flex items-start gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07, ease: EASE }}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border/80 sm:h-24 sm:w-24">
              <Image
                src={project.cover || "/placeholder.svg"}
                alt={`${project.title} cover`}
                width={384}
                height={384}
                className={`h-full w-full object-cover ${getProjectCoverScaleClass(project.slug)}`}
                priority
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <h1
                className="font-semibold leading-tight tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.35rem, 3.5vw, 1.9rem)" }}
              >
                {project.title}
              </h1>
              <p className="text-sm text-muted-foreground/80">{project.subtitle}</p>
              {(project.url || project.figmaUrl) && (
                <div className="flex flex-wrap items-center gap-3 pt-0.5">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t("project.visitProject")}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t("project.viewInFigma")}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Meta — tags, year, stack — all same height */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.13, ease: EASE }}
            className="flex flex-wrap items-center gap-2"
          >
            {project.tags.map((tag) => (
              <TechTag key={tag} tag={tag} />
            ))}
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
        </div>

        {/* ── B · 4-card grid: Challenge, Role, Features, Outcome ─────── */}
        <motion.div {...fadeUp} className="grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-2.5 rounded-xl border border-border bg-card p-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              {t("project.theChallenge")}
            </h2>
            <p className="text-sm leading-relaxed text-foreground/75">
              {project.challenge}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 rounded-xl border border-border bg-card p-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              {t("project.myRole")}
            </h2>
            <p className="text-sm leading-relaxed text-foreground/75">
              {project.myRole}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 rounded-xl border border-border bg-card p-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              {t("project.keyFeatures")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs leading-snug text-foreground/75"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 rounded-xl border border-border bg-card p-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              {t("project.theOutcome")}
            </h2>
            <div className="flex flex-col gap-2">
              {project.results.map((result, i) => (
                <div
                  key={i}
                  className="border-l-2 border-foreground/15 pl-3 py-0.5 text-sm leading-relaxed text-foreground/75"
                >
                  {result}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── C · Narrative content sections (optional) ────────────────── */}
        {/* How It Works */}
        {project.howItWorks && (
            <Section label={t("project.howItWorks")}>
              <ol className="flex flex-col gap-2.5">
                {project.howItWorks.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/75"
                  >
                    <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs text-muted-foreground">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Section>
          )}

        {/* Why I Built This */}
        {project.whyBuilt && (
            <Section label={t("project.whyIBuiltThis")}>
              <ul className="flex flex-col gap-1.5">
                {project.whyBuilt.map((reason, i) => (
                  <BulletItem key={i} text={reason} />
                ))}
              </ul>
            </Section>
          )}

        {/* UX Process */}
        {project.uxProcess && (
            <Section label={t("project.uxProcess")}>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.uxProcess.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs text-muted-foreground">
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-sm font-medium text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

        {/* User Test Insights */}
        {project.userTestInsights && (
            <Section label={t("project.userTestInsights")}>
              <div className="flex flex-col gap-2">
                {project.userTestInsights.map((insight, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1.5 rounded-lg border border-border bg-secondary/30 p-3"
                  >
                    <span className="inline-block rounded bg-foreground/[0.07] px-1.5 py-0.5 text-xs font-medium text-foreground/70">
                      {insight.area}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/75">
                      {insight.finding}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          )}

        {/* Key Findings */}
        {project.keyFindings && (
            <Section label={t("project.keyFindings")}>
              <ul className="flex flex-col gap-1.5">
                {project.keyFindings.map((finding, i) => (
                  <BulletItem key={i} text={finding} />
                ))}
              </ul>
            </Section>
          )}

        {/* ── D · Gallery ───────────────────────────────────────────────── */}
        {project.images.length > 0 && (
          <motion.div {...fadeUp} className="flex flex-col gap-3">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              {t("project.gallery")}
            </h2>
            <ImageCarousel images={project.images} />
          </motion.div>
        )}

        {/* ── E · Prev / Next navigation ───────────────────────────────── */}
        <div className="flex items-center justify-between border-t border-border pt-6">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {getProjectTranslation(prev.slug, locale)?.title ?? prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {getProjectTranslation(next.slug, locale)?.title ?? next.title}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span />
          )}
        </div>

      </div>
    </div>
  )
}
