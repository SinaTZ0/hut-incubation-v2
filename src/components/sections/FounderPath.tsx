import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { journeySteps } from '../../data/content'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './FounderPath.module.css'

export function FounderPath() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const reduceMotion = useReducedMotion()

  return (
    <section className={styles.section} id="journey">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro eyebrow="مسیر بنیان‌گذار" title="از درخواست تا روبه‌رو شدن با سرمایه‌گذار، شفاف و قابل پیگیری." titleId="journey-title" />
          <p>در هر مرحله می‌دانید چه چیزی سنجیده می‌شود، چه کسی کنارتان است و خروجی بعدی چیست.</p>
        </div>
        <div className={styles.steps} ref={ref} role="list" aria-labelledby="journey-title">
          <div className={styles.rail} aria-hidden="true">
            <motion.i initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : undefined} transition={{ duration: reduceMotion ? 0 : 1.25, ease: [0.22, 1, 0.36, 1] }} />
          </div>
          {journeySteps.map((step, index) => (
            <motion.article className={styles.step} key={step.number} role="listitem" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : undefined} transition={{ delay: reduceMotion ? 0 : 0.18 * index }}>
              <div className={styles.marker}><span>{step.number}</span><Icon name={step.icon} size={28} /></div>
              <div className={styles.copy}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
