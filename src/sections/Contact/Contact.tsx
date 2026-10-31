import { profile } from '../../data/site'

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="contact-box reveal">
          <h2>Vamos transformar boas ideias em projetos incríveis?</h2>
          <p>Fico à disposição para conversar sobre oportunidades, projetos e aprendizado.</p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Enviar e-mail</a>
          </div>
          <div className="links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  )
}
