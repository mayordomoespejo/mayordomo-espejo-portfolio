"use client"

import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import type { Locale } from "./translations"
import { defaultLocale, translations } from "./translations"

const STORAGE_KEY = "portfolio-locale"

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored === "es" || stored === "en") return stored
  const browser = navigator.language?.toLowerCase()
  if (browser?.startsWith("es")) return "es"
  return "en"
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  dict: (typeof translations)[Locale]
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const t = useCallback(
    (key: string): string => {
      const value = translations[locale][key as keyof (typeof translations)["en"]]
      return typeof value === "string" ? value : ""
    },
    [locale],
  )

  const dict = translations[locale]

  const value: LocaleContextValue = { locale, setLocale, t, dict }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}
