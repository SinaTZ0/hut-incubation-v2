import { Icon } from '../ui/Icon'
import { MediaPlaceholder } from '../ui/MediaPlaceholder'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './LabShowcase.module.css'

export function LabShowcase() {
  return (
    <section className={styles.section} id="lab">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro eyebrow="آزمایشگاه ساخت" title="پیش از ورود، خودتان را اینجا تصور کنید." description="فضایی برای تمرکز عمیق، برخورد اتفاقی ایده‌ها و ساختن چیزی که بتوان آن را لمس کرد." />
          <a href="#lab-grid"><Icon name="play" size={28} /><span>یک روز در مرکز<br /><b>روایت ۹۰ ثانیه‌ای</b></span></a>
        </div>
        <div className={styles.grid} id="lab-grid">
          <MediaPlaceholder className={styles.whiteboard} shape="arch" tone="#817d70" label="اتاق ایده‌پردازی و وایت‌بردهای در حال کار" drift />
          <MediaPlaceholder className={styles.workshop} shape="cutCorner" tone="#725f4e" label="میزهای نمونه‌سازی و کارگاه محصول" />
          <MediaPlaceholder className={styles.cowork} shape="offset" tone="#4f6861" label="فضای کار اشتراکی تیم‌ها" drift />
          <MediaPlaceholder className={styles.pod} shape="capsule" tone="#3f5753" label="اتاق جلسه شیشه‌ای برای گفت‌وگوهای تیمی" />
          <blockquote className={styles.quote}>«اینجا ایده‌ها روی کاغذ نمی‌مانند؛<br /><em>جایی برای آزمایش پیدا می‌کنند.</em>»</blockquote>
        </div>
      </PageContainer>
    </section>
  )
}
