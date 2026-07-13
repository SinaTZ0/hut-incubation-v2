import { motion, useReducedMotion } from 'motion/react'
import { ActionLink } from '../ui/ActionLink'
import { Icon } from '../ui/Icon'
import { MediaPlaceholder } from '../ui/MediaPlaceholder'
import { PageContainer } from '../ui/PageContainer'
import styles from './LaunchHero.module.css'

export function LaunchHero() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

  return (
    <section className={styles.hero} id="top">
      <PageContainer className={styles.layout}>
        <motion.div className={styles.content} {...reveal} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <span className={styles.kicker}><i /> جایی برای ساختن، نه فقط حرف زدن</span>
          <h1>برای ایده‌هایی که<br />آماده رشدند، <em>زیرساخت</em><br />آن رشد را می‌سازیم.</h1>
          <p>از نخستین گفت‌وگو با مشتری تا جذب سرمایه، کنار شما هستیم تا سریع‌تر، هوشمندانه‌تر و پایدارتر رشد کنید.</p>
          <div className={styles.actions}>
            <ActionLink href="#apply" icon={<Icon name="arrow" size={19} />}>ثبت درخواست پذیرش</ActionLink>
            <ActionLink href="#programs" variant="outline" icon={<Icon name="arrow" size={19} />}>مشاهده دوره‌های پذیرش</ActionLink>
          </div>
          <div className={styles.note}><strong>دوره بعدی پذیرش</strong><span>پاییز ۱۴۰۵ · ظرفیت محدود</span></div>
        </motion.div>

        <motion.div className={styles.visual} initial={reduceMotion ? false : { opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <MediaPlaceholder label="فضای کار اشتراکی و تیم‌های در حال ساخت" shape="hero" tone="#425f59" drift>
            <div className={styles.scene} aria-hidden="true">
              <span className={styles.window} /><span className={styles.board}>IDEA<br /><b>BUILD</b><br /><i>IMPACT</i></span>
              <span className={styles.deskOne} /><span className={styles.deskTwo} /><span className={styles.people} />
            </div>
            <span className={styles.visualCaption}>فضای کار بنیان‌گذاران · پردیس نوآوری</span>
          </MediaPlaceholder>
          <span className={styles.seal}><b>۱۲</b><small>هفته<br />ساخت فشرده</small></span>
        </motion.div>
      </PageContainer>
    </section>
  )
}
