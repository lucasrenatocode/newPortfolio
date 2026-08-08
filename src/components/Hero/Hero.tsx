import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useMagnetic } from '../../hooks/useMagnetic'
import heroImage from '../../assets/lucas-hero.jpeg'
import styles from './Hero.module.css'
import { useLanguage } from '../../i18n/LanguageContext'


export default function Hero() {
  const { t } = useLanguage()


  const STATS = [
    { count: 20, label: t.hero.stat1 },
    { count: 5, label: t.hero.stat2 },
    { count: 100, label: t.hero.stat3 },
  ]


  const sectionRef = useRef<HTMLDivElement | null>(null)
  const visualRef = useRef<HTMLDivElement | null>(null)
  const portraitRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const codeCardRef = useRef<HTMLDivElement | null>(null)
  const statusCardRef = useRef<HTMLDivElement | null>(null)
  const statNumRefs = useRef<(HTMLDivElement | null)[]>([])
  const primaryCtaRef = useMagnetic<HTMLAnchorElement>()
  const ghostCtaRef = useMagnetic<HTMLAnchorElement>()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

   tl.fromTo(`.${styles.greeting}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
      .to(`.${styles.titleLine} span`, { y: '0%', duration: 0.9, stagger: 0.12 }, 0.25)
      .fromTo(`.${styles.subtitle}`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, 0.65)
      .fromTo(`.${styles.ctas} .btn`, { opacity: 0, y: 24, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 }, 0.78)
      .fromTo(`.${styles.stat}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.95)
      .fromTo(portraitRef.current, { opacity: 0, scale: 0.9, filter: 'blur(10px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1 }, 0.3)
      .fromTo(
        [codeCardRef.current, statusCardRef.current],
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
        0.9,
      )

    // counters
    statNumRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, {
        innerText: STATS[i].count,
        duration: 2,
        delay: 1.1,
        snap: { innerText: 1 },
        ease: 'power2.out',
      })
    })

    // idle float for cards
    const floatTweens = [
      gsap.to(codeCardRef.current, { y: '+=10', duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut' }),
      gsap.to(statusCardRef.current, { y: '-=10', duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.4 }),
    ]

    // mouse parallax (otimizado com quickTo, mais leve para eventos de alta frequencia)
    const heroEl = sectionRef.current
    const parallaxEls = [
      { el: glowRef.current, depth: 0.4 },
      { el: portraitRef.current, depth: 0.6 },
      { el: codeCardRef.current, depth: 1.2 },
      { el: statusCardRef.current, depth: 1.4 },
    ]

    const quickXs = parallaxEls.map(({ el }) =>
      el ? gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power3.out' }) : null,
    )
    const quickYs = parallaxEls.map(({ el }) =>
      el ? gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power3.out' }) : null,
    )

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroEl) return
      const r = heroEl.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      parallaxEls.forEach(({ depth }, i) => {
        quickXs[i]?.(px * 24 * depth)
        quickYs[i]?.(py * 18 * depth)
      })
    }

    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (isFinePointer && heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      tl.kill()
      floatTweens.forEach((t) => t.kill())
      if (isFinePointer && heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section className={styles.hero} id="hero" ref={sectionRef}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.greeting}>
            <span aria-hidden="true">👋</span> {t.hero.greeting}
          </p>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span>{t.hero.titleLine1}</span>
            </span>
            <span className={styles.titleLine}>
              <span>
                {t.hero.titleLine2Pre} <em className="text-gradient" style={{ fontStyle: 'normal' }}>{t.hero.titleLine2Em}</em>
              </span>
            </span>
            <span className={styles.titleLine}>
              <span>{t.hero.titleLine3}</span>
            </span>
          </h1>

          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>

          <div className={styles.ctas}>
            <a href="#projects" ref={primaryCtaRef} className="btn btn-primary">
              <span>{t.hero.ctaPrimary}</span>
            </a>
            <a href="#contact" ref={ghostCtaRef} className="btn btn-ghost">
              <span>{t.hero.ctaGhost}</span>
            </a>
          </div>

          <div className={styles.stats}>
            {STATS.map((stat, i) => (
              <div className={styles.stat} key={stat.label}>
                <div
                  className={styles.statNum}
                  ref={(el) => {
                    statNumRefs.current[i] = el
                  }}
                >
                  0
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual} ref={visualRef}>
          <div className={styles.portraitGlow} ref={glowRef} />
          <div className={styles.portraitFrame} ref={portraitRef}>
            <img src={heroImage} alt="Portrait of Lucas, front-end developer" />
          </div>

          <div className={`${styles.floatCard} ${styles.codeCard} glass`} ref={codeCardRef}>
            <div className={styles.dotRow}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.codeLine}>
              <span className={styles.kw}>const</span> <span className={styles.fn}>Hero</span> = () =&gt; {'{'}
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>return</span> <span className={styles.str}>&lt;Magic /&gt;</span>;
            </div>
            <div className={styles.codeLine}>{'}'};</div>
          </div>

          <div className={`${styles.floatCard} ${styles.statusCard} glass`} ref={statusCardRef}>
            <span className={styles.ping} />
            <span>{t.hero.available}</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span>SCROLL</span>
        <span className={styles.scrollCueLine} />
      </div>
    </section>
  )
}