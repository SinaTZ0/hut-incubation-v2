import { resources } from '../../data/content'
import { ActionLink } from '../ui/ActionLink'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './ResourceBridge.module.css'

export function ResourceBridge() {
  return (
    <section className={styles.section} id="resources">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro eyebrow="پل دانش" title="برای شروع کردن، لازم نیست منتظر پذیرش بمانید." description="تجربه‌ها، ابزارها و الگوهایی که همین امروز یک تصمیم بهتر به شما می‌دهند." />
          <ActionLink href="#toolkit" variant="outline" icon={<Icon name="download" size={18} />}>بسته ابزار بنیان‌گذاران</ActionLink>
        </div>
        <div className={styles.resources}>
          {resources.map((resource, index) => (
            <article key={resource.title}>
              <div className={styles.thumb} style={{ '--thumb': resource.tone } as React.CSSProperties} role="img" aria-label={`تصویر جایگزین برای ${resource.title}`}><span>۰{index + 1}</span></div>
              <div className={styles.copy}><span>{resource.type}</span><h3>{resource.title}</h3><p>{resource.description}</p><a href="#resources">مطالعه مطلب <Icon name="arrow" size={16} /></a></div>
            </article>
          ))}
        </div>

        <div className={styles.toolkit} id="toolkit">
          <div><span>دانلود رایگان</span><h3>بسته ابزار بنیان‌گذاران</h3><p>قالب ارائه سرمایه‌گذاری، مدل مالی، نقشه مصاحبه مشتری و چک‌لیست اتاق داده.</p></div>
          <ActionLink href="#toolkit" variant="light" icon={<Icon name="download" size={18} />}>دریافت بسته ابزار</ActionLink>
        </div>

        <div className={styles.finalCta} id="apply">
          <div><span>برای دوره بعدی آماده‌اید؟</span><h2>مسیر رشدتان را از همین‌جا آغاز کنید.</h2><p>درخواست اولیه کمتر از ده دقیقه زمان می‌برد.</p></div>
          <div className={styles.actions}><ActionLink href="#programs" variant="light" icon={<Icon name="arrow" size={18} />}>مشاهده برنامه‌ها</ActionLink><ActionLink href="#apply" variant="light" icon={<Icon name="arrow" size={18} />}>ثبت درخواست پذیرش</ActionLink></div>
        </div>
      </PageContainer>
    </section>
  )
}
