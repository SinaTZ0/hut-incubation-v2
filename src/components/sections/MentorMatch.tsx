import { motion, useReducedMotion } from 'motion/react'
import { mentors } from '../../data/content'
import { ActionLink } from '../ui/ActionLink'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import mentorAli from '../../assets/sections/mentor-ali.png'
import mentorNima from '../../assets/sections/mentor-nima.png'
import mentorSara from '../../assets/sections/mentor-sara.png'
import styles from './MentorMatch.module.css'

const mentorImages = [mentorAli, mentorSara, mentorNima]

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
            <motion.article key={mentor.name} initial={reduceMotion ? false : { opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : index * 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <div className={styles.portrait} style={{ '--portrait': mentor.tone } as React.CSSProperties} role="img" aria-label={`تصویر ${mentor.name}`}>
                <img src={mentorImages[index]} alt="" aria-hidden="true" loading="lazy" decoding="async" />
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
