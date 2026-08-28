import { useEffect, useRef, useState } from 'react'
import { useMagnetic } from '../../hooks/useMagnetic'
import styles from './Navbar.module.css'
import { useLanguage } from '../../i18n/LanguageContext'


export default function Navbar() {

  const { t, lang, toggleLang } = useLanguage()

  const NAV_ITEMS = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ctaRef = useMagnetic<HTMLAnchorElement>()
  const tickingRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40)
        tickingRef.current = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a href="#hero" className={styles.logo}>
            <span className={styles.logoDot} />
            lucas<span className="text-gradient">Dev</span>
          </a>

          <ul className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href="#contact" ref={ctaRef} className={styles.cta}>
              {t.nav.cta}<span aria-hidden="true">→</span>
            </a>
            <button onClick={toggleLang} className={styles.langToggle}>
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>

            <button
              className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ''}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}