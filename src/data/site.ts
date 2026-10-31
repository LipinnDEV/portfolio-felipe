// Dados pessoais do site. Edite aqui sem mexer nos componentes.
export const profile = {
  name: 'Felipe Mousinho',
  role: 'Estudante de Desenvolvimento de Sistemas',
  headline: 'Transformando ideias em soluções através da tecnologia.',
  location: 'Blumenau, SC',
  intro:
    'Estou construindo minha experiência com estudos e projetos práticos, com foco em Java e desenvolvimento back-end.',
  photo: '/images/profile.jpg',
  email: 'mousinhofelipe857@gmail.com',
  github: 'https://github.com/LipinnDEV',
  instagram: 'https://instagram.com/fp.mousinho',
}

export const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]

export interface Skill {
  name: string
  kind: string
  icon?: string
  invert?: boolean
}

const dev = (n: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-original.svg`

export const skills: Skill[] = [
  { name: 'Java', kind: 'Linguagem', icon: dev('java') },
  { name: 'JavaScript', kind: 'Linguagem', icon: dev('javascript') },
  { name: 'TypeScript', kind: 'Linguagem', icon: dev('typescript') },
  { name: 'React', kind: 'Front-end', icon: dev('react') },
  { name: 'HTML5', kind: 'Front-end', icon: dev('html5') },
  { name: 'CSS3', kind: 'Front-end', icon: dev('css3') },
  { name: 'SQL', kind: 'Banco de dados' },
  { name: 'MySQL', kind: 'Banco de dados', icon: dev('mysql') },
  { name: 'Git', kind: 'Ferramenta', icon: dev('git') },
  { name: 'GitHub', kind: 'Ferramenta', icon: dev('github'), invert: true },
]
