import { newsItems } from '../../data/content'
import { ActionLink } from '../ui/ActionLink'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './NewsSection.module.css'

export function NewsSection() {
  const [featured, ...updates] = newsItems

  return (
    <section className={styles.section} id="news" aria-labelledby="news-title">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro
            eyebrow="اخبار مرکز"
            title="آخرین اطلاعیه‌ها و گزارش‌های فعالیت مرکز"
            titleId="news-title"
            description="در این بخش، اخبار، اطلاعیه‌های آموزشی و گزارش رویدادهای مرکز نوآوری و شتاب‌دهی دانشگاه منتشر می‌شود."
          />
          <ActionLink href="#news" variant="outline" icon={<Icon name="arrow" size={17} />}>
            آرشیو اخبار
          </ActionLink>
        </div>

        <div className={styles.newsGrid}>
          <article className={styles.featured}>
            <div className={`${styles.featuredMedia} ${styles[featured.tone]}`}>
              <img src={featured.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              <span className={styles.number}>۰۱</span>
              <span className={styles.mediaLabel}>گزارش فعالیت</span>
            </div>
            <div className={styles.featuredCopy}>
              <div className={styles.meta}>
                <span>{featured.category}</span>
                <time>{featured.date}</time>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <a href="#news" className={styles.readMore}>
                مشاهده گزارش <Icon name="arrow" size={16} />
              </a>
            </div>
          </article>

          <div className={styles.updateList}>
            {updates.map((item, index) => (
              <article className={styles.update} key={item.title}>
                <div className={`${styles.updateMedia} ${styles[item.tone]}`}>
                  <img src={item.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <span>۰{index + 2}</span>
                </div>
                <div className={styles.updateCopy}>
                  <div className={styles.meta}>
                    <span>{item.category}</span>
                    <time>{item.date}</time>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#news" className={styles.readMore}>
                    مشاهده <Icon name="arrow" size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
