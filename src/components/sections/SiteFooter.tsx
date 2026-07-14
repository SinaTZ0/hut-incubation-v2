import { navigation } from '../../data/content'
import { PageContainer } from '../ui/PageContainer'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <PageContainer className={styles.inner}>
        <div><strong>مرکز نوآوری و شتاب‌دهی دانشگاه صنعتی همدان</strong><span>اطلاع‌رسانی فعالیت‌ها، برنامه‌ها و رویدادهای مرکز</span></div>
        <nav aria-label="پیوندهای پایین صفحه">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <small>وب‌سایت رسمی مرکز · ۱۴۰۵</small>
      </PageContainer>
    </footer>
  )
}
