import { useCallback, useState } from 'react'
import { projects, type Project } from '../../data/content'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { ExternalLinkIcon } from '../Icons'
import styles from './Projects.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import FeedbackModal from '../FeedbackModal/FeedbackModal'

function ChatIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const closeFeedback = useCallback(() => setActiveProject(null), [])

  const eyebrowRef = useScrollReveal<HTMLParagraphElement>()
  const titleRef = useScrollReveal<HTMLHeadingElement>({ delay: 0.05 })
  const subRef = useScrollReveal<HTMLParagraphElement>({ delay: 0.1 })
  const gridRef = useStaggerReveal<HTMLDivElement>(`.${styles.card}`)

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal" ref={eyebrowRef}>
            {t.projects.eyebrow}
          </p>
          <h2 className="section-title reveal" ref={titleRef}>
            {t.projects.titlePre} <span className="text-gradient">{t.projects.titleGradient}</span>
          </h2>
          <p className="section-sub reveal" ref={subRef}>
            {t.projects.subtitle}
          </p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {projects.map((project) => (
            <div key={project.title} className={`${styles.card} glass`}>
              <div className={styles.thumb}>
                <img
                  src={project.previewImage}
                  alt={project.title}
                  className={styles.thumbFrame}
                  loading="lazy"
                />
              </div>
              <div className={styles.body}>
                <p className={styles.tag}>{project.tag}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.techPills}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a target="_blank" rel="noopener noreferrer" href={project.demoUrl} className={styles.linkBtn}>
                    <ExternalLinkIcon />
                    {t.projects.visitWebsite}
                  </a>
                  {project.feedback && (
                    <button
                      type="button"
                      className={`${styles.linkBtn} ${styles.feedbackBtn}`}
                      onClick={() => setActiveProject(project)}
                    >
                      <ChatIcon />
                      {t.projects.viewFeedback}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject?.feedback && (
        <FeedbackModal
          key={activeProject.title}
          feedback={activeProject.feedback}
          projectTitle={activeProject.title}
          onClose={closeFeedback}
        />
      )}
    </section>
  )
}
