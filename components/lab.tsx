"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

/**
 * Lab section — personal GitHub experiments and side projects.
 */
export function Lab() {
  const { t } = useLocale()

  return (
    <section id="lab" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <motion.div {...fadeUp} className="flex items-baseline justify-between">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("lab.sectionTitle")}
          </h2>
        </motion.div>
        <motion.div {...fadeUp} className="flex flex-col gap-6">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t("lab.description")}
          </p>
          <Link
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            {t("lab.viewOnGithub")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
