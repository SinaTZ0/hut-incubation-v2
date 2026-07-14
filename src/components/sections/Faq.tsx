import { Accordion } from '@base-ui/react/accordion'
import { Icon } from '../ui/Icon'
import { PageContainer } from '../ui/PageContainer'
import { SectionIntro } from '../ui/SectionIntro'
import styles from './Faq.module.css'

const questions = [
  ['برای پذیرش باید ایده کاملاً آماده داشته باشم؟', 'نه. مسئله روشن، انگیزه ساختن و توان یادگیری برای ما مهم‌تر از محصول کامل یا ارائه پرزرق‌وبرق است. برنامه از مرحله‌ای که امروز در آن هستید شروع می‌شود.'],
  ['این برنامه برای چه تیم‌هایی مناسب است؟', 'برای تیم‌های دو تا پنج‌نفره‌ای که روی یک مسئله واقعی کار می‌کنند؛ از مرحله اعتبارسنجی ایده تا ورود به بازار و آمادگی جذب سرمایه.'],
  ['هزینه همراهی و فضای کار چقدر است؟', 'هزینه و مدل همکاری بر اساس مرحله تیم و مسیر انتخابی مشخص می‌شود. در گفت‌وگوی اولیه، همه جزئیات شفاف با شما در میان گذاشته خواهد شد.'],
  ['منتورها چطور با تیم من کار می‌کنند؟', 'پس از شناخت مسئله و سبک کاری تیم، یک منتور اصلی و چند متخصص موضوعی به شما معرفی می‌شوند. جلسات منظم و بازخوردهای اجرایی بخش ثابت این همراهی است.'],
  ['فرآیند ثبت درخواست چقدر زمان می‌برد؟', 'تکمیل فرم اولیه کمتر از ده دقیقه زمان می‌برد. پس از بررسی، برای یک گفت‌وگوی کوتاه با تیم پذیرش دعوت می‌شوید.'],
]

export function Faq() {
  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <PageContainer className={styles.layout}>
        <div className={styles.intro}><SectionIntro eyebrow="سؤالات متداول" title="قبل از شروع، هر چیزی که لازم است بدانید." titleId="faq-title" description="اگر سؤال دیگری دارید، تیم ما فقط یک پیام با شما فاصله دارد." /><a className={styles.contact} href="mailto:hello@hub.example">گفت‌وگو با تیم هاب <Icon name="arrow" size={17} /></a></div>
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
