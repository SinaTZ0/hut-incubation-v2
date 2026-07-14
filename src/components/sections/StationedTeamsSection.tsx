import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useMemo, useState } from 'react'
import { stationedTeams, stationedTeamStats } from '../../data/content'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './StationedTeamsSection.module.css'

const allTeamsFilter = 'همه تیم‌ها'

export function StationedTeamsSection() {
  const reduceMotion = useReducedMotion()
  const [activeIndustry, setActiveIndustry] = useState(allTeamsFilter)

  const industries = useMemo(
    () => [allTeamsFilter, ...new Set(stationedTeams.map((team) => team.industry))],
    [],
  )
  const visibleTeams = activeIndustry === allTeamsFilter
    ? stationedTeams
    : stationedTeams.filter((team) => team.industry === activeIndustry)

  return (
    <section className={styles.section} id="stationed-teams" aria-labelledby="stationed-teams-title">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro
            eyebrow="تیم‌های مستقر"
            title="همین حالا چه کسانی اینجا می‌سازند؟"
            titleId="stationed-teams-title"
            description="تیم‌هایی که هر روز در کنار هم محصول می‌سازند، آزمایش می‌کنند و با شبکه منتورها و سرمایه‌گذاران جلو می‌روند."
          />
          <p className={styles.sideNote}>
            <span>جامعه‌ای در حال رشد</span>
            از فناوری عمیق تا سلامت و انرژی
          </p>
        </div>

        <dl className={styles.stats} aria-label="آمار تیم‌های مستقر">
          {stationedTeamStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.toolbar}>
          <span>حوزه فعالیت</span>
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
        </div>

        <motion.div className={styles.grid} layout={!reduceMotion} aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleTeams.map((team, index) => (
              <motion.article
                className={styles.card}
                key={team.name}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: reduceMotion ? 0 : 0.24, delay: reduceMotion ? 0 : index * 0.035 }}
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
                  <div><dt>اندازه تیم</dt><dd>{team.members} نفر</dd></div>
                  <div><dt>سال تأسیس</dt><dd>{team.founded}</dd></div>
                  <div><dt>مرحله</dt><dd>{team.stage}</dd></div>
                </dl>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </PageContainer>
    </section>
  )
}
