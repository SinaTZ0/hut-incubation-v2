import { motion, useReducedMotion } from 'motion/react'
import { mentors } from '../../data/content'
import { ActionLink } from '../ui/ActionLink'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './MentorMatch.module.css'

export function MentorMatch() {
  const reduceMotion = useReducedMotion()
  return (
    <section className={styles.section} id="mentors">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro eyebrow="تطبیق منتور" title="رزومه کافی نیست؛ شیوه همکاری باید به شما بخورد." description="منتور بر اساس مسئله، مرحله رشد و سبک کاری تیم انتخاب می‌شود، نه صرفاً عنوان شغلی." />
          <ActionLink href="#mentors" variant="text" icon={<Icon name="arrow" size={18} />}>مشاهده شبکه منتورها</ActionLink>
        </div>
        <div className={styles.list}>
          {mentors.map((mentor, index) => (
            <motion.article key={mentor.name} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: reduceMotion ? 0 : index * 0.12 }}>
              <div className={styles.portrait} style={{ '--portrait': mentor.tone } as React.CSSProperties} role="img" aria-label={`تصویر جایگزین ${mentor.name}`}>
                <span>{mentor.initials}</span>
              </div>
              <div className={styles.info}>
                <span className={styles.index}>۰{index + 1}</span>
                <h3>{mentor.name}</h3><p>{mentor.role}</p>
                <dl><div><dt>تمرکز</dt><dd>{mentor.focus}</dd></div><div><dt>سبک همکاری</dt><dd>{mentor.style}</dd></div></dl>
              </div>
            </motion.article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
