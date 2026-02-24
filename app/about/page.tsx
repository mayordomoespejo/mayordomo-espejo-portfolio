import type { Metadata } from "next"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About — Miguel Mayordomo Espejo",
  description:
    "Frontend Developer. React, React Native, Next.js. Experience in web and mobile applications.",
}

export default function AboutPage() {
  return <AboutContent />
}
