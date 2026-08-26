import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useMagnetic } from '../../hooks/useMagnetic'
import styles from './Hero.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const sectionRef   = useRef<HTMLDivElement | null>(null)
  const headlineRef  = useRef<HTMLHeadingElement | null>(null)
  const primaryCtaRef = useMagnetic<HTMLAnchorElement>()
  const ghostCtaRef   = useMagnetic<HTMLAnchorElement>()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(`.${styles.eyebrow}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }, 0.1)
      .to(`.${styles.titleLine} span`,
        { y: '0%', duration: 1, stagger: 0.14 }, 0.3)
      .fromTo(`.${styles.highlight}`,
        { backgroundSize: '0% 100%' },
        { backgroundSize: '100% 100%', duration: 0.9, ease: 'power2.out' }, 1.1)
      .fromTo(`.${styles.sub}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }, 1.0)
      .fromTo(`.${styles.ctas} .btn`,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 }, 1.2)
      .fromTo(`.${styles.scrollCue}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }, 1.6)

    return () => { tl.kill() }
  }, [])

  return (
    <section className={styles.hero} id="hero" ref={sectionRef}>
      {/* Glow de fundo decorativo */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* Eyebrow */}
        <p className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          Desenvolvedor Front-End · Disponível para projetos
        </p>

        {/* Headline de impacto — ocupa toda a largura */}
        <h1 className={styles.title} ref={headlineRef}>
          <span className={styles.titleLine}>
            <span>Seu concorrente</span>
          </span>
          <span className={styles.titleLine}>
            <span>
              ainda não tem{' '}
              <em className={styles.highlight}>site.</em>
            </span>
          </span>
          <span className={styles.titleLine}>
            <span>Aproveita enquanto dá.</span>
          </span>
        </h1>

        {/* Subtítulo */}
        <p className={styles.sub}>
          Desenvolvo landing pages e sites profissionais com entrega rápida,
          código limpo e design que converte visitantes em clientes reais.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a
            href="#projects"
            ref={primaryCtaRef}
            className="btn btn-primary"
          >
            <span>Ver Projetos</span>
          </a>
          <a
            href="#contact"
            ref={ghostCtaRef}
            className="btn btn-ghost"
          >
            <span>Fale Comigo</span>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <span>SCROLL</span>
        <span className={styles.scrollCueLine} />
      </div>
    </section>
  )
}
