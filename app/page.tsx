import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-2xl font-semibold">
        Frontend Engineer
      </h1>

      <p className="mt-4 text-neutral-400">
        I build fast, resilient user interfaces with a strong focus on performance,
        clean architecture, and thoughtful UX.
      </p>

      <Section title="Currently Building">
        <div className="grid gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <Section title="Links">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">X</a>
          <a href="mailto:you@email.com" className="hover:underline">Email</a>
        </div>
      </Section>
    </main>
  )
}
