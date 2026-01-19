import { projects } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  return (
    <main className="min-h-screen px-8 py-20">
      <h1 className="text-3xl font-semibold mb-12">
        Projects
      </h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}
