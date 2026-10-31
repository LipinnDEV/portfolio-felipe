import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { profile } from '../../data/site'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionTitle title="Sobre mim" />
        <div className="about reveal">
          <div className="about-text">
            <p>
              Sou estudante de Desenvolvimento de Sistemas e me interesso por tecnologia, programação e pela
              criação de soluções. Estou construindo minha experiência por meio de estudos e projetos práticos,
              sempre buscando evoluir.
            </p>
            <p>
              Meu foco atual está em Java, no desenvolvimento back-end e no aprimoramento das minhas habilidades
              de programação. Quero conquistar novas oportunidades na área de tecnologia e crescer como
              desenvolvedor.
            </p>
          </div>
          <dl className="facts">
            <div><dt>Localização</dt><dd>{profile.location}</dd></div>
            <div><dt>Foco atual</dt><dd>Java e back-end</dd></div>
            <div><dt>Objetivo</dt><dd>Novas oportunidades em tecnologia</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}
