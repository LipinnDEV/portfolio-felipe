import { useState } from 'react'
import type { Project } from '../../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const [broken, setBroken] = useState(false)
  const { name, description, tech, image, github, demo, status } = project

  return (
    <article className="card project reveal">
      <div className="cover">
        {broken ? (
          <span className="cover-fallback" aria-hidden="true">{name.slice(0, 2)}</span>
        ) : (
          <img src={image} alt={`Imagem do projeto ${name}`} loading="lazy" onError={() => setBroken(true)} />
        )}
        {status && <span className="badge">{status}</span>}
      </div>
      <div className="body">
        <h3>{name}</h3>
        <p>{description}</p>
        {tech.length > 0 && (
          <ul className="tags" aria-label="Tecnologias">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <div className="actions">
          <a className="btn btn-ghost" href={github} target="_blank" rel="noreferrer">Ver no GitHub</a>
          {demo && (
            <a className="btn btn-primary" href={demo} target="_blank" rel="noreferrer">Ver demonstração</a>
          )}
        </div>
      </div>
    </article>
  )
}
