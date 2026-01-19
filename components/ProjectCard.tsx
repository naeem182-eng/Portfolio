type ProjectProps = {
  title: string
  description: string
  type: string
  stack: string[]
  role: string
  live: string
}

export default function ProjectCard({
  title,
  description,
  type,
  stack,
  role,
  live,
}: ProjectProps) {
  return (
    <div className="border border-zinc-800 rounded-lg p-6">
      <h2 className="text-xl">{title}</h2>

      <p className="text-zinc-400 mt-2">{description}</p>

      <p className="text-zinc-500 mt-4 text-sm">
        {type} · {role}
      </p>

      <p className="text-zinc-500 text-sm">
        Stack: {stack.join(", ")}
      </p>

      <a
        href={live}
        target="_blank"
        className="inline-block mt-4 text-zinc-300 hover:text-white"
      >
        View Live →
      </a>
    </div>
  )
}
