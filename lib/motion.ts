/**
 * Shared Framer Motion animation constants.
 * Import these instead of re-defining the same variants in every component.
 */

export const EASE = [0.25, 0.46, 0.45, 0.94] as const

/** Fade + rise, triggered when the element enters the viewport. */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5, ease: EASE },
} as const

/** Fade only, triggered when the element enters the viewport. */
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.6, ease: EASE },
} as const

/** Fade + rise, triggered immediately on mount (for above-the-fold elements). */
export function mountFadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  } as const
}
