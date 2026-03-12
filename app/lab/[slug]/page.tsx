import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { labProjects, getLabProject } from "@/lib/data/lab-projects"
import { LabDetail } from "@/components/lab-detail"
import { PROFILE } from "@/lib/site-config"

export async function generateStaticParams() {
  return labProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getLabProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${PROFILE.name}`,
    description: project.subtitle,
  }
}

export default async function LabProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getLabProject(slug)
  if (!project) notFound()

  return <LabDetail slug={slug} project={project} />
}
