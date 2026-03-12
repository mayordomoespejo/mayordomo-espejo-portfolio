import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { Lab } from "@/components/lab"
import { ContactCTA } from "@/components/contact-cta"

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Lab />
      <ContactCTA />
    </>
  )
}
