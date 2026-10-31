export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  image: string // arquivo em public/images
  github: string
  demo?: string // deixe sem valor enquanto não houver demonstração
  status?: string
}

// PREENCHER: troque cada "github" pelo link do repositório do projeto.
// Enquanto isso, o botão abre o seu perfil no GitHub.
const GITHUB = 'https://github.com/LipinnDEV'

export const projects: Project[] = [
  {
    id: 'soundify',
    name: 'Soundify',
    description:
      'Aplicação web de música com cadastro e login, busca, biblioteca, favoritas e histórico. O catálogo é fictício e os áudios foram sintetizados para a demonstração.',
    // PREENCHER: adicione as tecnologias usadas no Soundify.
    tech: [],
    image: '/images/soundify.jpg',
    github: GITHUB,
  },
  {
    id: 'safekey',
    name: 'SafeKey',
    description:
      'Gerador de senhas seguras e aleatórias para desktop, em Java, com interface gráfica. Ajusta o tamanho e os tipos de caracteres e mostra a força estimada. Tudo é gerado no computador: nenhuma senha é salva ou enviada.',
    tech: ['Java', 'Swing', 'Maven'],
    image: '/images/safekey.jpg',
    github: GITHUB,
  },
  {
    id: 'codespeed-trainer',
    name: 'CodeSpeed Trainer',
    description:
      'Treino de digitação com desafios, acompanhamento de desempenho e evolução do usuário.',
    tech: ['React', 'TypeScript'],
    image: '/images/codespeed.png', // PREENCHER: coloque este arquivo em public/images
    github: GITHUB,
  },
]
