const BASE_SCALE = "scale-110"
const HOVER_SCALE = "group-hover:scale-[1.15]"

const COVER_SCALE_BY_SLUG: Record<string, { base: string; hover: string }> = {
  "goiko-ordering": { base: "scale-[1.8]", hover: "group-hover:scale-[1.85]" },
  wetour: { base: "scale-125", hover: "group-hover:scale-[1.3]" },
}

/**
 * Returns CSS scale classes for project cover images by project slug.
 */
export function getProjectCoverScaleClass(slug: string, withHover = false): string {
  const scale = COVER_SCALE_BY_SLUG[slug]
  if (!scale) return withHover ? `${BASE_SCALE} ${HOVER_SCALE}` : BASE_SCALE
  return withHover ? `${scale.base} ${scale.hover}` : scale.base
}
