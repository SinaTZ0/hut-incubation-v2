import { Accordion } from '@base-ui/react/accordion'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './Faq.module.css'

const questions = [
  ['آیا برای ثبت درخواست، طرح باید کاملاً آماده باشد؟', 'خیر. موضوع طرح، شواهد اولیه و ظرفیت اجرایی تیم در مرحله بررسی اولیه ارزیابی می‌شود. شرایط هر دوره در اطلاعیه پذیرش اعلام خواهد شد.'],
  ['برنامه‌های مرکز برای چه گروه‌هایی برگزار می‌شود؟', 'برنامه‌ها با توجه به موضوع و مرحله طرح، برای دانشجویان، دانش‌آموختگان و تیم‌های پژوهشی دانشگاهی برگزار می‌شوند. جزئیات هر دوره در اطلاعیه مربوط درج می‌شود.'],
  ['هزینه استفاده از برنامه‌ها و فضا چگونه تعیین می‌شود؟', 'هزینه و شیوه استفاده از خدمات، متناسب با نوع برنامه و مقررات مرکز تعیین و پیش از ثبت‌نام اعلام می‌شود.'],
  ['مشاوران مرکز چگونه با تیم‌ها همکاری می‌کنند؟', 'پس از بررسی موضوع طرح، مشاوران مرتبط برای جلسات آموزشی، بررسی مستندات و ارزیابی مرحله‌ای معرفی می‌شوند.'],
  ['فرایند بررسی درخواست چقدر زمان می‌برد؟', 'زمان بررسی در اطلاعیه هر دوره اعلام می‌شود. پس از دریافت درخواست، نتیجه بررسی و در صورت نیاز زمان جلسه تکمیلی به متقاضی اطلاع داده خواهد شد.'],
]

export function Faq() {
  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <PageContainer className={styles.layout}>
        <div className={styles.intro}><SectionIntro eyebrow="پرسش‌های متداول" title="اطلاعاتی که پیش از ثبت درخواست باید بدانید" titleId="faq-title" description="پاسخ پرسش‌های رایج درباره برنامه‌ها، پذیرش و خدمات مرکز در این بخش ارائه شده است." /><a className={styles.contact} href="mailto:hello@hub.example">تماس با مرکز <Icon name="arrow" size={17} /></a></div>
        <Accordion.Root className={styles.list} defaultValue={['faq-0']}>
          {questions.map(([question, answer], index) => (
            <Accordion.Item className={styles.item} key={question} value={`faq-${index}`}>
              <Accordion.Header><Accordion.Trigger className={styles.trigger}><span>{question}</span><i aria-hidden="true" /></Accordion.Trigger></Accordion.Header>
              <Accordion.Panel className={styles.panel}><p>{answer}</p></Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </PageContainer>
    </section>
  )
}
