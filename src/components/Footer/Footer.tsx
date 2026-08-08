import { GitHubIcon, LinkedInIcon, MailIcon } from '../Icons'
import styles from './Footer.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Footer() {
  const year = new Date().getFullYear()

  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoDot} />
          lucas<span className="text-gradient">.dev</span>
        </a>

        <div className={styles.socials}>
          <a href="https://github.com/lucasrenatocode" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/lucasrenatoo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:lucasrenatolu5@gmail.com" aria-label="Email">
            <MailIcon />
          </a>
        </div>

        <p className={styles.meta}>
          © {year} {t.footer.builtWith}
        </p>
      </div>
    </footer>
  )
}
