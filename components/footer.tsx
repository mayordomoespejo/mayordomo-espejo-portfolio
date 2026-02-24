"use client"

import { EmailIcon, LinkedInIcon } from "@/components/icons"
import { useLocale } from "@/lib/locale-context"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-row flex-wrap items-center justify-between gap-4 px-6 py-5">
        {/* Left: copyright */}
        <p className="font-mono text-xs text-muted-foreground/40">
          © {new Date().getFullYear()} Miguel Mayordomo Espejo
        </p>

        {/* Right: social icons */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:miguelmayordomoespejo@gmail.com"
            className="flex items-center justify-center rounded-md border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label={t("nav.email")}
          >
            <EmailIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-mayordomo-espejo-779542203/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label={t("nav.linkedIn")}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
