import type { ReactNode } from 'react'
import styles from './SectionIntro.module.css'

type SectionIntroProps = {
  eyebrow?: string
  title: ReactNode
  titleId?: string
  description?: string
  align?: 'start' | 'center'
  light?: boolean
}

export function SectionIntro({ eyebrow, title, titleId, description, align = 'start', light }: SectionIntroProps) {
  return (
    <div className={`${styles.intro} ${styles[align]} ${light ? styles.light : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 id={titleId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
