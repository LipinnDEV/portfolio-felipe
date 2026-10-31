import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <SectionTitle
          title="Projetos"
          subtitle="Trabalhos que me ajudam a praticar e a evoluir como desenvolvedor."
        />
        <div className="projects">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
