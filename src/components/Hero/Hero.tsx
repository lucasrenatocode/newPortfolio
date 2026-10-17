import { useEffect } from 'react'
import gsap from 'gsap'
import { useMagnetic } from '../../hooks/useMagnetic'
import styles from './Hero.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const primaryCtaRef = useMagnetic<HTMLAnchorElement>()
  const ghostCtaRef   = useMagnetic<HTMLAnchorElement>()

  useEffect(() => {
    // Timeline de entrada: eyebrow → linhas do título → destaque → CTAs
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(`.${styles.eyebrow}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }, 0.1)
      .to(`.${styles.titleLine} span`,
        { y: '0%', duration: 1, stagger: 0.14 }, 0.3)
      .fromTo(`.${styles.highlight}`,
        { backgroundSize: '0% 100%' },
        { backgroundSize: '100% 100%', duration: 0.9, ease: 'power2.out' }, 1.1)
      .fromTo(`.${styles.ctas} .btn`,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 }, 1.2)

    return () => { tl.kill() }
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>

        {/* Eyebrow */}
        <p className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          {t.hero.available}
        </p>

        {/* Headline */}
        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            <span>{t.hero.titleLine1}</span>
          </span>
          <span className={styles.titleLine}>
            <span>
              {t.hero.titleLine2Pre}{' '}
              <em className={styles.highlight}>{t.hero.titleLine2Em}</em>
            </span>
          </span>
          <span className={styles.titleLine}>
            <span>{t.hero.titleLine3}</span>
          </span>
        </h1>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#projects" ref={primaryCtaRef} className="btn btn-primary">
            <span>{t.hero.ctaPrimary}</span>
          </a>
          <a href="#contact" ref={ghostCtaRef} className="btn btn-ghost">
            <span>{t.hero.ctaGhost}</span>
          </a>
        </div>
      </div>
    </section>
  )
}