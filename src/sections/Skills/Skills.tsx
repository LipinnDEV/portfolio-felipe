import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { skills } from '../../data/site'

export default function Skills() {
  return (
    <section id="tecnologias" className="section alt">
      <div className="container">
        <SectionTitle
          title="Tecnologias"
          subtitle="Estou sempre aprendendo. Esta lista reúne o que estudo e pratico nos meus projetos."
        />
        <ul className="skills">
          {skills.map((s) => (
            <li key={s.name} className="skill reveal">
              {s.icon ? (
                <img className={s.invert ? 'invert' : ''} src={s.icon} alt="" width={36} height={36} loading="lazy" />
              ) : (
                <span className="mono" aria-hidden="true">{s.name}</span>
              )}
              <div>
                <strong>{s.name}</strong>
                <small>{s.kind}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
