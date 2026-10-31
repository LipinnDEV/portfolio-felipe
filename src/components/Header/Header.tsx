import { useEffect, useState } from 'react'
import { navItems } from '../../data/site'

export default function Header() {
  const [active, setActive] = useState('inicio')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Marca no menu a seção que está no meio da tela.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) io.observe(el)
    })
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-in">
        <a href="#inicio" className="logo" aria-label="Felipe Mousinho, voltar ao início">
          FM<span>.</span>
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav id="nav" className={`nav${open ? ' open' : ''}`} aria-label="Principal">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'active' : ''}
              aria-current={active === n.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
