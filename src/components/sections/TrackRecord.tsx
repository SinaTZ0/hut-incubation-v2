import { motion, useReducedMotion } from 'motion/react'
import { impactMetrics } from '../../data/content'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import styles from './TrackRecord.module.css'

const trust = ['تحت نظارت دانشگاه و پارک علم و فناوری', 'حمایت حقوقی و مالکیت فکری', 'همکاری با وزارت علوم و شبکه صنعتی', 'دسترسی‌پذیر برای همه بنیان‌گذاران']

export function TrackRecord() {
  const reduceMotion = useReducedMotion()
  return (
    <section className={styles.section} aria-labelledby="impact-title">
      <PageContainer>
        <div className={styles.top}>
          <div className={styles.title}><span>کارنامه ما</span><h2 id="impact-title">اعتماد، وقتی ماندگار است<br />که <em>قابل اندازه‌گیری</em> باشد.</h2></div>
          <div className={styles.metrics}>
            {impactMetrics.map((metric, index) => (
              <motion.div key={metric.label} initial={reduceMotion ? false : { opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : index * 0.16, ease: [0.22, 1, 0.36, 1] }}>
                <strong>{metric.value}</strong><span>{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={styles.trust}><strong>پشتوانه‌ای برای ساختن</strong><ul>{trust.map((item) => <li key={item}><Icon name="check" size={16} />{item}</li>)}</ul></div>
      </PageContainer>
    </section>
  )
}
