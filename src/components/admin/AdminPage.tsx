import { useState, type FormEvent } from 'react'
import mentorAli from '../../assets/sections/mentor-ali.webp'
import mentorNima from '../../assets/sections/mentor-nima.webp'
import mentorSara from '../../assets/sections/mentor-sara.webp'
import { useContentStore } from '../../context/useContentStore'
import type { NewsItem, StationedTeam } from '../../data/content'
import { ActionLink } from '../ui/ActionLink'
import { PageContainer } from '../ui/PageContainer'
import styles from './AdminPage.module.css'

type AdminPageProps = {
  onNavigateHome: () => void
}

const newsImages = [
  { value: '/Generated Image2.webp', label: 'تصویر اصلی مرکز' },
  { value: '/Generated workshop.webp', label: 'کارگاه آموزشی' },
  { value: '/Generated whiteboard.webp', label: 'جلسه و وایت‌برد' },
  { value: '/Generated cowork.webp', label: 'فضای کار اشتراکی' },
  { value: '/Generated space.webp', label: 'فضای مرکز' },
]

const mentorImages = [
  { value: mentorAli, label: 'تصویر مشاور اول' },
  { value: mentorSara, label: 'تصویر مشاور دوم' },
  { value: mentorNima, label: 'تصویر مشاور سوم' },
]

const teamVisuals: Array<{ logo: StationedTeam['logo']; tone: string; label: string }> = [
  { logo: 'orbit', tone: '#a59ab8', label: 'مدار بنفش' },
  { logo: 'leaf', tone: '#8fb8a5', label: 'برگ سبز' },
  { logo: 'pulse', tone: '#c9a3a0', label: 'نبض مرجانی' },
  { logo: 'quantum', tone: '#87b8bd', label: 'کوانتوم آبی' },
  { logo: 'portal', tone: '#d1af7e', label: 'درگاه طلایی' },
  { logo: 'sprout', tone: '#9caf82', label: 'جوانه زیتونی' },
]

const mentorTones = [
  { value: '#6f7f73', label: 'سبز خاکستری' },
  { value: '#8a786f', label: 'قهوه‌ای روشن' },
  { value: '#65737d', label: 'آبی خاکستری' },
]

function read(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim()
}

function confirmDelete(label: string, onConfirm: () => void) {
  if (window.confirm(`«${label}» حذف شود؟`)) onConfirm()
}

function SectionHeading({ id, eyebrow, title, count }: { id: string; eyebrow: string; title: string; count: number }) {
  return (
    <div className={styles.sectionHeading}>
      <div>
        <span>{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </div>
      <strong>{count.toLocaleString('fa-IR')} مورد</strong>
    </div>
  )
}

function EventAdmin() {
  const { events, addEvent, deleteEvent } = useContentStore()

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    addEvent({
      type: read(data, 'type'),
      day: read(data, 'day'),
      month: read(data, 'month'),
      dateLabel: read(data, 'dateLabel'),
      title: read(data, 'title'),
      description: read(data, 'description'),
      time: read(data, 'time'),
      location: read(data, 'location'),
      audience: read(data, 'audience'),
    })
    form.reset()
  }

  return (
    <section className={styles.manageSection} id="admin-events" aria-labelledby="admin-events-title">
      <SectionHeading id="admin-events-title" eyebrow="تقویم مرکز" title="مدیریت رویدادها" count={events.length} />
      <div className={styles.workspace}>
        <form className={styles.form} onSubmit={submit}>
          <h3>افزودن رویداد جدید</h3>
          <div className={styles.formGrid}>
            <label>نوع رویداد<input name="type" required placeholder="کارگاه آموزشی" /></label>
            <label>عنوان<input name="title" required /></label>
            <label>روز<input name="day" required placeholder="۲۸" /></label>
            <label>ماه<input name="month" required placeholder="تیر" /></label>
            <label className={styles.wide}>برچسب کامل تاریخ<input name="dateLabel" required placeholder="پنج‌شنبه ۲۸ تیر" /></label>
            <label>ساعت<input name="time" required placeholder="۱۵:۰۰ تا ۱۷:۰۰" /></label>
            <label>مکان<input name="location" required /></label>
            <label className={styles.wide}>مخاطبان<input name="audience" required /></label>
            <label className={styles.wide}>توضیحات<textarea name="description" required rows={4} /></label>
          </div>
          <button className={styles.submit} type="submit">افزودن رویداد</button>
        </form>
        <div className={styles.records} aria-label="فهرست رویدادها">
          {events.map((item, index) => (
            <article className={`${styles.record} ${styles.plainRecord}`} key={item.id}>
              <span className={styles.recordIndex}>{(index + 1).toLocaleString('fa-IR')}</span>
              <div><strong>{item.title}</strong><small>{item.type} · {item.dateLabel} · {item.time}</small></div>
              <button type="button" onClick={() => confirmDelete(item.title, () => deleteEvent(item.id))}>حذف</button>
            </article>
          ))}
          {events.length === 0 && <p className={styles.empty}>هنوز رویدادی ثبت نشده است.</p>}
        </div>
      </div>
    </section>
  )
}

function NewsAdmin() {
  const { newsItems, addNewsItem, deleteNewsItem } = useContentStore()
  const [image, setImage] = useState(newsImages[0].value)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    addNewsItem({
      category: read(data, 'category'),
      date: read(data, 'date'),
      title: read(data, 'title'),
      description: read(data, 'description'),
      image: read(data, 'image'),
      tone: read(data, 'tone') as NewsItem['tone'],
    })
    form.reset()
    setImage(newsImages[0].value)
  }

  return (
    <section className={styles.manageSection} id="admin-news" aria-labelledby="admin-news-title">
      <SectionHeading id="admin-news-title" eyebrow="اخبار مرکز" title="مدیریت اخبار" count={newsItems.length} />
      <div className={styles.workspace}>
        <form className={styles.form} onSubmit={submit}>
          <h3>افزودن خبر جدید</h3>
          <div className={styles.formGrid}>
            <label>دسته‌بندی<input name="category" required placeholder="اطلاعیه" /></label>
            <label>تاریخ انتشار<input name="date" required placeholder="۲۵ تیر ۱۴۰۵" /></label>
            <label className={styles.wide}>عنوان<input name="title" required /></label>
            <label>تصویر<select name="image" required value={image} onChange={(event) => setImage(event.target.value)}>{newsImages.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
            <label>رنگ زمینه<select name="tone" defaultValue="teal"><option value="teal">فیروزه‌ای</option><option value="coral">مرجانی</option><option value="sand">خاکی</option></select></label>
            <img className={styles.preview} src={image} alt="پیش‌نمایش تصویر خبر" />
            <label className={styles.wide}>توضیحات<textarea name="description" required rows={4} /></label>
          </div>
          <button className={styles.submit} type="submit">افزودن خبر</button>
        </form>
        <div className={styles.records} aria-label="فهرست اخبار">
          {newsItems.map((item, index) => (
            <article className={styles.record} key={item.id}>
              <img src={item.image} alt="" />
              <span className={styles.recordIndex}>{(index + 1).toLocaleString('fa-IR')}</span>
              <div><strong>{item.title}</strong><small>{item.category} · {item.date}</small></div>
              <button type="button" onClick={() => confirmDelete(item.title, () => deleteNewsItem(item.id))}>حذف</button>
            </article>
          ))}
          {newsItems.length === 0 && <p className={styles.empty}>هنوز خبری ثبت نشده است.</p>}
        </div>
      </div>
    </section>
  )
}

function TeamAdmin() {
  const { stationedTeams, addStationedTeam, deleteStationedTeam } = useContentStore()

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const selectedVisual = teamVisuals.find((item) => item.logo === read(data, 'logo')) ?? teamVisuals[0]
    addStationedTeam({
      name: read(data, 'name'),
      logo: selectedVisual.logo,
      tone: selectedVisual.tone,
      industry: read(data, 'industry'),
      description: read(data, 'description'),
      members: read(data, 'members'),
      founded: read(data, 'founded'),
      stage: read(data, 'stage'),
    })
    form.reset()
  }

  return (
    <section className={styles.manageSection} id="admin-teams" aria-labelledby="admin-teams-title">
      <SectionHeading id="admin-teams-title" eyebrow="تیم‌های مرکز" title="مدیریت تیم‌های مستقر" count={stationedTeams.length} />
      <div className={styles.workspace}>
        <form className={styles.form} onSubmit={submit}>
          <h3>افزودن تیم جدید</h3>
          <div className={styles.formGrid}>
            <label>نام تیم<input name="name" required /></label>
            <label>حوزه فعالیت<input name="industry" required placeholder="هوش مصنوعی" /></label>
            <label>اعضای تیم<input name="members" required placeholder="۸" /></label>
            <label>سال تأسیس<input name="founded" required placeholder="۱۴۰۳" /></label>
            <label>مرحله توسعه<input name="stage" required placeholder="مرحله توسعه" /></label>
            <label>نشان و رنگ<select name="logo" defaultValue="orbit">{teamVisuals.map((option) => <option key={option.logo} value={option.logo}>{option.label}</option>)}</select></label>
            <label className={styles.wide}>توضیحات<textarea name="description" required rows={4} /></label>
          </div>
          <button className={styles.submit} type="submit">افزودن تیم</button>
        </form>
        <div className={styles.records} aria-label="فهرست تیم‌ها">
          {stationedTeams.map((item, index) => (
            <article className={styles.record} key={item.id}>
              <span className={styles.swatch} style={{ background: item.tone }} />
              <span className={styles.recordIndex}>{(index + 1).toLocaleString('fa-IR')}</span>
              <div><strong>{item.name}</strong><small>{item.industry} · {item.members} عضو · {item.stage}</small></div>
              <button type="button" onClick={() => confirmDelete(item.name, () => deleteStationedTeam(item.id))}>حذف</button>
            </article>
          ))}
          {stationedTeams.length === 0 && <p className={styles.empty}>هنوز تیمی ثبت نشده است.</p>}
        </div>
      </div>
    </section>
  )
}

function MentorAdmin() {
  const { mentors, addMentor, deleteMentor } = useContentStore()
  const [image, setImage] = useState(mentorImages[0].value)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    addMentor({
      name: read(data, 'name'),
      role: read(data, 'role'),
      focus: read(data, 'focus'),
      style: read(data, 'style'),
      initials: read(data, 'initials'),
      tone: read(data, 'tone'),
      image: read(data, 'image'),
    })
    form.reset()
    setImage(mentorImages[0].value)
  }

  return (
    <section className={styles.manageSection} id="admin-mentors" aria-labelledby="admin-mentors-title">
      <SectionHeading id="admin-mentors-title" eyebrow="شبکه مشاوران" title="مدیریت مشاوران" count={mentors.length} />
      <div className={styles.workspace}>
        <form className={styles.form} onSubmit={submit}>
          <h3>افزودن مشاور جدید</h3>
          <div className={styles.formGrid}>
            <label>نام و نام خانوادگی<input name="name" required /></label>
            <label>عنوان تخصصی<input name="role" required /></label>
            <label>حوزه تمرکز<input name="focus" required /></label>
            <label>نحوه مشارکت<input name="style" required /></label>
            <label>حروف اختصاری<input name="initials" required placeholder="ع‌م" /></label>
            <label>رنگ<select name="tone" defaultValue={mentorTones[0].value}>{mentorTones.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
            <label>تصویر<select name="image" required value={image} onChange={(event) => setImage(event.target.value)}>{mentorImages.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
            <img className={`${styles.preview} ${styles.portraitPreview}`} src={image} alt="پیش‌نمایش تصویر مشاور" />
          </div>
          <button className={styles.submit} type="submit">افزودن مشاور</button>
        </form>
        <div className={styles.records} aria-label="فهرست مشاوران">
          {mentors.map((item, index) => (
            <article className={styles.record} key={item.id}>
              <img src={item.image} alt="" />
              <span className={styles.recordIndex}>{(index + 1).toLocaleString('fa-IR')}</span>
              <div><strong>{item.name}</strong><small>{item.role} · {item.focus}</small></div>
              <button type="button" onClick={() => confirmDelete(item.name, () => deleteMentor(item.id))}>حذف</button>
            </article>
          ))}
          {mentors.length === 0 && <p className={styles.empty}>هنوز مشاوری ثبت نشده است.</p>}
        </div>
      </div>
    </section>
  )
}

export function AdminPage({ onNavigateHome }: AdminPageProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <PageContainer className={styles.headerInner}>
          <div><span>نسخه نمایشی</span><strong>مدیریت محتوای مرکز</strong></div>
          <ActionLink href="/" variant="outline" onClick={(event) => { event.preventDefault(); onNavigateHome() }}>بازگشت به سایت</ActionLink>
        </PageContainer>
      </header>
      <main>
        <PageContainer>
          <section className={styles.hero}>
            <span>پنل مدیریت</span>
            <h1>افزودن و حذف محتوای صفحه اصلی</h1>
            <p>تغییرات فقط در حافظه این صفحه نگهداری می‌شوند و با تازه‌سازی مرورگر به حالت اولیه بازمی‌گردند.</p>
            <nav aria-label="بخش‌های مدیریت">
              <a href="#admin-events">رویدادها</a><a href="#admin-news">اخبار</a><a href="#admin-teams">تیم‌ها</a><a href="#admin-mentors">مشاوران</a>
            </nav>
          </section>
          <EventAdmin />
          <NewsAdmin />
          <TeamAdmin />
          <MentorAdmin />
        </PageContainer>
      </main>
    </div>
  )
}
