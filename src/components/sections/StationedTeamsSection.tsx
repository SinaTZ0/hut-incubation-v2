import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'
import { useMemo, useRef, useState } from 'react'
import { stationedTeams, stationedTeamStats } from '../../data/content'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './StationedTeamsSection.module.css'

const allTeamsFilter = 'همه حوزه‌ها'

export function StationedTeamsSection() {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeIndustry, setActiveIndustry] = useState(allTeamsFilter)

  const industries = useMemo(
    () => [allTeamsFilter, ...new Set(stationedTeams.map((team) => team.industry))],
    [],
  )
  const visibleTeams = activeIndustry === allTeamsFilter
    ? stationedTeams
    : stationedTeams.filter((team) => team.industry === activeIndustry)

  return (
    <section className={styles.section} id="stationed-teams" ref={sectionRef} aria-labelledby="stationed-teams-title">
      <PageContainer>
        <motion.div
          className={styles.heading}
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionIntro
            eyebrow="تیم‌ها و طرح‌های مستقر"
            title="معرفی تیم‌ها و طرح‌های فعال در مرکز"
            titleId="stationed-teams-title"
            description="در این بخش، تیم‌ها و طرح‌های فعال، حوزه فعالیت و اطلاعات کلی هر مجموعه معرفی می‌شوند."
          />
          <p className={styles.sideNote}>
            <span>حوزه‌های فعالیت</span>
            از فناوری، سلامت و انرژی تا آموزش
          </p>
        </motion.div>

        <motion.dl
          className={styles.stats}
          aria-label="آمار تیم‌های مستقر"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: reduceMotion ? 0 : 0.68, delay: reduceMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          {stationedTeamStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          className={styles.toolbar}
          initial={reduceMotion ? false : { opacity: 0, x: 28 }}
          animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>فیلتر بر اساس حوزه فعالیت</span>
          <div className={styles.filters} role="group" aria-label="فیلتر تیم‌ها بر اساس حوزه فعالیت">
            {industries.map((industry) => (
              <button
                className={activeIndustry === industry ? styles.activeFilter : ''}
                type="button"
                key={industry}
                aria-pressed={activeIndustry === industry}
                onClick={() => setActiveIndustry(industry)}
              >
                {industry}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.grid}
          layout={!reduceMotion}
          aria-live="polite"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.44 }}
        >
          <AnimatePresence mode="popLayout">
            {visibleTeams.map((team, index) => (
              <motion.article
                className={styles.card}
                key={team.name}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 42, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: reduceMotion ? 0 : 0.68, delay: reduceMotion ? 0 : 0.5 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                style={{ '--team-tone': team.tone } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <span className={`${styles.teamMark} ${styles[team.logo]}`} aria-hidden="true">
                    <i />
                    <i />
                  </span>
                  <span className={styles.industry}>{team.industry}</span>
                  <span className={styles.cardIndex}>۰{index + 1}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3>{team.name}</h3>
                  <p>{team.description}</p>
                </div>
                <dl className={styles.details}>
                  <div><dt>اعضای تیم</dt><dd>{team.members} نفر</dd></div>
                  <div><dt>سال تأسیس</dt><dd>{team.founded}</dd></div>
                  <div><dt>مرحله توسعه</dt><dd>{team.stage}</dd></div>
                </dl>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </PageContainer>
    </section>
  )
}
