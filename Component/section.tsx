type Props = {
  title: string
  children: React.ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <section className="mb-14">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        {title}
      </h2>
      <div className="text-sm text-neutral-400">
        {children}
      </div>
    </section>
  )
}
