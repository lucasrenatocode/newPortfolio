import { FormEvent, useState } from 'react'
import { useMagnetic } from '../../hooks/useMagnetic'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { GitHubIcon, LinkedInIcon, MailIcon, CheckIcon } from '../Icons'
import styles from './Contact.module.css'
import { useLanguage } from '../../i18n/LanguageContext'


type Status = 'idle' | 'sending' | 'sent'

export default function Contact() {

  const { t } = useLanguage()

  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const eyebrowRef = useScrollReveal<HTMLParagraphElement>()
  const titleRef = useScrollReveal<HTMLHeadingElement>({ delay: 0.05 })
  const subRef = useScrollReveal<HTMLParagraphElement>({ delay: 0.1 })
  const infoRef = useScrollReveal<HTMLDivElement>({ delay: 0.05 })
  const formCardRef = useScrollReveal<HTMLDivElement>({ delay: 0.15 })

  const githubLinkRef = useMagnetic<HTMLAnchorElement>()
  const linkedinLinkRef = useMagnetic<HTMLAnchorElement>()
  const emailLinkRef = useMagnetic<HTMLAnchorElement>()
  const submitRef = useMagnetic<HTMLButtonElement>()

const WHATSAPP_NUMBER = '5581989728514'

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  setStatus('sending')

  const text = `Hi Lucas! My name is ${form.name}.\n\n${form.message}\n\n(Contact email: ${form.email})`
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

  setTimeout(() => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4500)
  }, 500)
}

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal" ref={eyebrowRef}>
            {t.contact.eyebrow}
          </p>
          <h2 className="section-title reveal" ref={titleRef}>
            {t.contact.titlePre} <span className="text-gradient">{t.contact.titleGradient}</span>
          </h2>
          <p className="section-sub reveal" ref={subRef}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.info} reveal`} ref={infoRef}>
            <p>
              {t.contact.infoText}
            </p>
            <div className={styles.links}>
              <a
                href="https://github.com/lucasrenatocode"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} glass`}
                ref={githubLinkRef}
              >
                <span className={styles.linkIcon}>
                  <GitHubIcon />
                </span>
                <span>
                  <span className={styles.linkLabel}>GITHUB</span>
                  <br />
                  <span className={styles.linkValue}>github.com/lucas</span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/lucasrenatoo/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} glass`}
                ref={linkedinLinkRef}
              >
                <span className={styles.linkIcon}>
                  <LinkedInIcon />
                </span>
                <span>
                  <span className={styles.linkLabel}>LINKEDIN</span>
                  <br />
                  <span className={styles.linkValue}>linkedin.com/in/lucas</span>
                </span>
              </a>

              <a href="mailto:lucasrenatolu5@gmail.com" className={`${styles.link} glass`} ref={emailLinkRef}>
                <span className={styles.linkIcon}>
                  <MailIcon />
                </span>
                <span>
                  <span className={styles.linkLabel}>EMAIL</span>
                  <br />
                  <span className={styles.linkValue}>lucasrenatolu5@gmail.com</span>
                </span>
              </a>
            </div>
          </div>

          <div className={`${styles.formCard} glass reveal`} ref={formCardRef}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <label htmlFor="name">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className={styles.formRow}>
                <label htmlFor="email">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.contact.emailPlaceholder}
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className={styles.formRow}>
                <label htmlFor="message">{t.contact.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.messagePlaceholder}
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${styles.submit}`}
                ref={submitRef}
                disabled={status === 'sending'}
              >
                <span>{status === 'sending' ? t.contact.sendSending : t.contact.sendIdle}</span>
              </button>
              <div className={`${styles.success} ${status === 'sent' ? styles.successShow : ''}`}>
                <CheckIcon />
                {t.contact.successText}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
