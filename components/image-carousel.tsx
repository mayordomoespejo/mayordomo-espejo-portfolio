"use client"

import { useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ProjectImage } from "@/lib/projects"
import { IPhoneFrame, MacBookFrame, TerminalFrame, WireframeFrame } from "@/components/device-frame"
import { useLocale } from "@/lib/locale-context"
import { EASE } from "@/lib/motion"

// Portrait frames (mobile/terminal) are ~620-665px tall by design.
// On mobile we scale them down via CSS zoom (layout-affecting, unlike transform:scale)
// so they fit without clipping. On sm+ they render at full size.
function DeviceImage({ image }: { image: ProjectImage }) {
  const portraitClass = "[zoom:0.8] sm:[zoom:1]"

  if (image.type === "terminal") {
    return (
      <div className={portraitClass}>
        <TerminalFrame src={image.src} alt={image.alt} />
      </div>
    )
  }
  if (image.type === "mobile") {
    return (
      <div className={portraitClass}>
        <IPhoneFrame src={image.src} alt={image.alt} />
      </div>
    )
  }
  if (image.type === "wireframe") {
    return <WireframeFrame src={image.src} alt={image.alt} />
  }
  return <MacBookFrame src={image.src} alt={image.alt} />
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 180 : -180, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -180 : 180, opacity: 0 }),
}

export function ImageCarousel({ images }: { images: ProjectImage[] }) {
  const { t } = useLocale()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  // Computed ONCE from the full images array — never changes during navigation.
  // This is what fixes the "jumping" problem: height is determined by the gallery
  // type, not by whichever image is currently visible.
  const hasPortrait = useMemo(
    () => images.some((img) => img.type === "mobile" || img.type === "terminal"),
    [images]
  )

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  if (images.length === 0) return null

  const currentImage = images[current]

  // Fixed height per gallery type — no dynamic changes on slide navigation.
  // Portrait: h-[600px] on mobile (frames zoom:0.8), h-[740px] on sm+
  // Landscape: shorter container
  const viewportClass = hasPortrait
    ? "h-[600px] sm:h-[740px]"
    : "h-[460px] sm:h-[500px]"

  return (
    <div className="overflow-hidden rounded-xl bg-secondary/50">
      {/* Carousel viewport — FIXED height, never changes */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${viewportClass}`}
      >
        {/* Prev */}
        <button
          onClick={goPrev}
          type="button"
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label={t("project.prevImage")}
        >
          <ChevronLeft className="h-4 w-4 shrink-0" />
        </button>

        {/* Slides */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 320, damping: 32 },
              opacity: { duration: 0.18 },
            }}
            className="flex items-center justify-center px-8 py-6 sm:px-14"
          >
            <DeviceImage image={currentImage} />
          </motion.div>
        </AnimatePresence>

        {/* Next */}
        <button
          onClick={goNext}
          type="button"
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label={t("project.nextImage")}
        >
          <ChevronRight className="h-4 w-4 shrink-0" />
        </button>
      </div>

      {/* Dots + counter */}
      <div className="flex items-center justify-center gap-3 py-4">
        <span className="font-mono text-xs tabular-nums text-muted-foreground/60">
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              type="button"
              aria-label={`${t("project.goToImage")} ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-muted-foreground/25 hover:bg-muted-foreground/45"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className="border-t border-border px-6 py-2.5">
        <p className="text-center text-xs text-muted-foreground/60">
          {currentImage.alt}
        </p>
      </div>
    </div>
  )
}
