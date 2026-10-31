import { useState } from 'react'
import { profile } from '../../data/site'

export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false)

  return (
    <section id="inicio" className="hero">
      <div className="container hero-in">
        <div className="hero-text">
          <p className="loc">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="headline">“{profile.headline}”</p>
          <p className="intro">{profile.intro}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#projetos">Ver projetos</a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <figure className="photo">
          {noPhoto ? (
            <div className="photo-fallback" role="img" aria-label="Espaço reservado para a foto de Felipe">FM</div>
          ) : (
            <img src={profile.photo} alt="Foto de Felipe Mousinho" width={360} height={450} onError={() => setNoPhoto(true)} />
          )}
        </figure>
      </div>
      <a href="#sobre" className="scroll-hint" aria-label="Ir para a próxima seção">
        <span />
      </a>
    </section>
  )
}
