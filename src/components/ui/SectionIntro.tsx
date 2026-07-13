import styles from './SectionIntro.module.css'

type SectionIntroProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'start' | 'center'
  light?: boolean
}

export function SectionIntro({ eyebrow, title, description, align = 'start', light }: SectionIntroProps) {
  return (
    <div className={`${styles.intro} ${styles[align]} ${light ? styles.light : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
