"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { projects } from "@/lib/data/projects"
import type { Project } from "@/lib/data/projects"

/** Compact card for the marquee rows — image fills all, text overlaid */
function MarqueeCard({ project }: { project: Project }) {
  return (
    <div className="group/card relative mr-2 w-64 shrink-0 cursor-pointer overflow-hidden" style={{ aspectRatio: "4/3" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.cover}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
        draggable={false}
      />
      {/* Gradient overlay — always present, intensifies on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300 group-hover/card:opacity-90" />
      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="truncate text-xs font-semibold text-white">{project.title}</p>
        <p className="mt-0.5 truncate text-[10px] text-white/50">
          {project.stack.slice(0, 2).join(" · ")}
        </p>
      </div>
    </div>
  )
}

/** Infinite marquee row — direction controlled by animation class */
function MarqueeRow({
  items,
  animClass,
}: {
  items: Project[]
  animClass: string
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`marquee-track flex w-max ${animClass}`}>
        {/* Duplicate items so the loop is seamless */}
        {[...items, ...items].map((p, i) => (
          <MarqueeCard key={`${p.slug}-${i}`} project={p} />
        ))}
      </div>
    </div>
  )
}

/**
 * Lab section — two-row infinite marquee of projects + GitHub CTA.
 * Row 1 scrolls left, row 2 scrolls right, both pause on hover.
 */
export function Lab() {
  const { t } = useLocale()
  const reversed = [...projects].reverse()

  return (
    <section id="lab" className="flex h-screen flex-col pt-24">
      {/* Header */}
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div {...fadeUp} className="flex items-baseline justify-between">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("lab.sectionTitle")}
          </h2>
        </motion.div>
      </div>

      {/* Marquee — centered in remaining space */}
      <div className="flex flex-1 flex-col justify-center gap-2">
        <MarqueeRow items={projects} animClass="animate-marquee" />
        <MarqueeRow items={reversed} animClass="animate-marquee-reverse" />
        <MarqueeRow items={projects} animClass="animate-marquee [animation-duration:72s]" />
      </div>
    </section>
  )
}
