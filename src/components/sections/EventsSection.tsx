import { useContentStore } from '../../context/useContentStore'
import { ActionLink } from '../ui/ActionLink'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './EventsSection.module.css'

export function EventsSection() {
  const { events } = useContentStore()
  const [featured, ...upcoming] = events.slice(0, 3)

  return (
    <section className={styles.section} id="events" aria-labelledby="events-title">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro
            eyebrow="تقویم رویدادها"
            title="برنامه‌های آموزشی و نشست‌های مرکز"
            titleId="events-title"
            description="زمان برگزاری کارگاه‌ها، نشست‌های تخصصی و برنامه‌های معرفی مرکز در این بخش اعلام می‌شود."
            light
          />
          <ActionLink href="#events" variant="light" icon={<Icon name="calendar" size={17} />}>
            مشاهده تقویم رویدادها
          </ActionLink>
        </div>

        {featured ? <div className={styles.eventsGrid}>
          <article className={styles.featured}>
            <div className={styles.featuredTop}>
              <div className={styles.dateCard} aria-label={featured.dateLabel}>
                <span>{featured.month}</span>
                <strong>{featured.day}</strong>
              </div>
              <span className={styles.eventType}>{featured.type}</span>
            </div>
            <div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
            </div>
            <div className={styles.eventDetails}>
              <span><Icon name="clock" size={16} />{featured.time}</span>
              <span><Icon name="pin" size={16} />{featured.location}</span>
            </div>
            <div className={styles.featuredFooter}>
              <span>{featured.audience}</span>
              <ActionLink href="#events" variant="light" icon={<Icon name="arrow" size={16} />}>
                اطلاعات و ثبت‌نام
              </ActionLink>
            </div>
          </article>

          <div className={styles.upcoming}>
            <div className={styles.upcomingLabel}>رویدادهای پیش‌رو</div>
            {upcoming.map((event) => (
              <article className={styles.event} key={event.id}>
                <div className={styles.smallDate} aria-label={event.dateLabel}>
                  <strong>{event.day}</strong>
                  <span>{event.month}</span>
                </div>
                <div className={styles.eventCopy}>
                  <div className={styles.eventMeta}><span>{event.type}</span><time>{event.dateLabel}</time></div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className={styles.eventDetails}>
                    <span><Icon name="clock" size={15} />{event.time}</span>
                    <span><Icon name="pin" size={15} />{event.location}</span>
                  </div>
                </div>
                <a className={styles.eventArrow} href="#events" aria-label={`جزئیات ${event.title}`}>
                  <Icon name="arrow" size={18} />
                </a>
              </article>
            ))}
          </div>
        </div> : <p className={styles.empty}>در حال حاضر رویدادی برای نمایش وجود ندارد.</p>}
      </PageContainer>
    </section>
  )
}
