import { useState } from 'react'
import { Drawer } from '@base-ui/react/drawer'
import { navigation } from '../../data/content'
import { ActionLink } from '../ui/ActionLink'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import styles from './SiteHeader.module.css'

function Brand() {
  return (
    <a className={styles.brand} href="#top" aria-label="مرکز نوآوری و شتاب‌دهی دانشگاه؛ صفحه اصلی">
      <span className={styles.mark} aria-hidden="true"><i /><i /><i /></span>
      <span><strong>مرکز نوآوری و شتاب‌دهی دانشگاه</strong><small>از مسئله تا اثر</small></span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <PageContainer className={styles.inner}>
        <Brand />
        <nav className={styles.desktopNav} aria-label="ناوبری اصلی">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <ActionLink href="#programs" variant="outline" className={styles.desktopCta}>دوره‌های پذیرش</ActionLink>

        <Drawer.Root open={open} onOpenChange={setOpen} swipeDirection="left">
          <Drawer.Trigger className={styles.menuButton} aria-label="باز کردن منو">
            <span /><span /><span />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Backdrop className={styles.backdrop} />
            <Drawer.Viewport className={styles.viewport}>
              <Drawer.Popup className={styles.drawer}>
                <Drawer.Content>
                  <div className={styles.drawerHead}>
                    <Drawer.Title>فهرست راهبری</Drawer.Title>
                    <Drawer.Close className={styles.close} aria-label="بستن منو">×</Drawer.Close>
                  </div>
                  <Drawer.Description className={styles.drawerDescription}>بخش مورد نظر را انتخاب کنید.</Drawer.Description>
                  <nav className={styles.mobileNav} aria-label="ناوبری موبایل">
                    {navigation.map((item, index) => (
                      <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                        <span>۰{index + 1}</span>{item.label}<Icon name="arrow" size={18} />
                      </a>
                    ))}
                  </nav>
                  <ActionLink href="#apply" onClick={() => setOpen(false)}>ثبت درخواست پذیرش</ActionLink>
                </Drawer.Content>
              </Drawer.Popup>
            </Drawer.Viewport>
          </Drawer.Portal>
        </Drawer.Root>
      </PageContainer>
    </header>
  )
}
