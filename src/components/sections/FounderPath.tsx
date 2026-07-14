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
          <SectionIntro eyebrow="فرایند پذیرش و فعالیت" title="مراحل بررسی و توسعه طرح، شفاف و قابل پیگیری است." titleId="journey-title" />
          <p>در هر مرحله، موضوع ارزیابی، مسئول پیگیری و خروجی مورد انتظار به‌صورت روشن اعلام می‌شود.</p>
        </div>
        <div className={styles.steps} ref={ref} role="list" aria-labelledby="journey-title">
          <div className={styles.rail} aria-hidden="true">
            <motion.i initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : undefined} transition={{ duration: reduceMotion ? 0 : 1.8, ease: [0.22, 1, 0.36, 1] }} />
          </div>
          {journeySteps.map((step, index) => (
            <motion.article className={styles.step} key={step.number} role="listitem" initial={reduceMotion ? false : { opacity: 0, y: 44 }} animate={inView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.24 * index, ease: [0.22, 1, 0.36, 1] }}>
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
