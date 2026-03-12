"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { labProjects } from "@/lib/data/lab-projects"
import type { LabProject } from "@/lib/data/lab-projects"

/** Card for lab projects — logo centered on coloured background */
function LabCard({ project }: { project: LabProject }) {
  return (
    <Link
      href={`/lab/${project.slug}`}
      className="group/card relative mr-2 block w-64 shrink-0 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ aspectRatio: "4/3", background: project.bg }}
    >
      {/* Logo — centred with padding */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.logo}
        alt={project.title}
        className="absolute inset-0 m-auto h-1/2 w-3/4 object-contain transition-transform duration-700 group-hover/card:scale-105"
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
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
    </Link>
  )
}

/** Infinite marquee row — direction controlled by animation class */
function MarqueeRow({
  items,
  animClass,
}: {
  items: LabProject[]
  animClass: string
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`marquee-track flex w-max ${animClass}`}>
        {/* Duplicate items so the loop is seamless */}
        {[...items, ...items].map((p, i) => (
          <LabCard key={`${p.slug}-${i}`} project={p} />
        ))}
      </div>
    </div>
  )
}

/**
 * Lab section — three-row infinite marquee of personal projects.
 * Row 1 scrolls left, row 2 scrolls right, row 3 scrolls left.
 */
export function Lab() {
  const { t } = useLocale()
  const reversed = [...labProjects].reverse()

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
        <MarqueeRow items={labProjects} animClass="animate-marquee" />
        <MarqueeRow items={reversed} animClass="animate-marquee-reverse" />
        <MarqueeRow items={labProjects} animClass="animate-marquee [animation-duration:72s]" />
      </div>
    </section>
  )
}
