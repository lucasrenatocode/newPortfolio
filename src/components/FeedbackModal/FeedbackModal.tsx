import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Feedback } from '../../data/content'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './FeedbackModal.module.css'

interface FeedbackModalProps {
  feedback: Feedback
  projectTitle: string
  onClose: () => void
}

export default function FeedbackModal({ feedback, projectTitle, onClose }: FeedbackModalProps) {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const closeRef = useRef<HTMLButtonElement>(null)

  const total = feedback.images.length
  const hasMany = total > 1

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (total > 1 && e.key === 'ArrowRight') setIndex((i) => (i + 1) % total)
      if (total > 1 && e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, total])

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={`${t.projects.feedbackTitle} — ${projectTitle}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label={t.projects.closeLabel}
        >
          ×
        </button>

        <p className={styles.kicker}>{t.projects.feedbackTitle}</p>
        <h3 className={styles.project}>{projectTitle}</h3>

        <div className={styles.viewer}>
          {hasMany && (
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              onClick={goPrev}
              aria-label={t.projects.prevLabel}
            >
              ‹
            </button>
          )}

          <img
            src={feedback.images[index]}
            alt={`${t.projects.feedbackAlt} ${feedback.clientName}`}
            className={styles.image}
            loading="lazy"
          />

          {hasMany && (
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              onClick={goNext}
              aria-label={t.projects.nextLabel}
            >
              ›
            </button>
          )}
        </div>

        {hasMany && (
          <div className={styles.dots}>
            {feedback.images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`${i + 1} / ${total}`}
              />
            ))}
          </div>
        )}

        <p className={styles.caption}>
          <strong>{feedback.clientName}</strong> · {feedback.business}
          <span className={styles.via}> · {t.projects.feedbackVia}</span>
        </p>
      </div>
    </div>,
    document.body,
  )
}
