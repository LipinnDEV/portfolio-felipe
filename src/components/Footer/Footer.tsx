import { profile } from '../../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <p>
          © {new Date().getFullYear()} {profile.name}. Desenvolvido por mim, com React e TypeScript.
        </p>
        <div className="links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={`mailto:${profile.email}`}>E-mail</a>
        </div>
      </div>
    </footer>
  )
}
