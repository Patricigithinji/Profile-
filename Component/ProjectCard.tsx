type Project = {
  name: string
  description: string
  link?: string
}

export default function ProjectCard({ name, description, link }: Project) {
  return (
    <div className="rounded-lg border border-neutral-800 p-4 hover:border-neutral-700 transition">
      <h3 className="font-medium">{name}</h3>
      <p className="mt-1 text-sm text-neutral-400">{description}</p>
      {link && (
        <a
          href={link}
          className="mt-2 inline-block text-sm text-neutral-300 hover:underline"
          target="_blank"
        >
          View →
        </a>
      )}
    </div>
  )
}
