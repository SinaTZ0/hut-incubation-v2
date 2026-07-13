import { Accordion } from '@base-ui/react/accordion'
import { programTracks } from '../../data/content'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './ProgramTracks.module.css'

export function ProgramTracks() {
  return (
    <section className={styles.section} id="programs">
      <PageContainer className={styles.layout}>
        <aside className={styles.aside}>
          <SectionIntro eyebrow="مسیرهای برنامه" title="هر مرحله، ابزار و همراه خودش را می‌خواهد." description="از جایی شروع کنید که امروز ایستاده‌اید؛ نه از جایی که فکر می‌کنید باید باشید." />
          <div className={styles.legend}><span>۵ مسیر تخصصی</span><i /><span>۱۲ هفته همراهی</span></div>
        </aside>

        <Accordion.Root className={styles.list} defaultValue={['validation']}>
          {programTracks.map((track, index) => (
            <Accordion.Item className={styles.item} key={track.id} value={track.id}>
              <Accordion.Header className={styles.header}>
                <Accordion.Trigger className={styles.trigger}>
                  <span className={styles.number}>۰{index + 1}</span>
                  <span className={styles.icon}><Icon name={track.icon} size={30} /></span>
                  <strong>{track.title}</strong>
                  <span className={styles.plus} aria-hidden="true" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className={styles.panel}>
                <div className={styles.panelInner}>
                  <p>{track.description}</p>
                  <span>{track.outcome}</span>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </PageContainer>
    </section>
  )
}
