export type ProgramTrack = {
  id: string
  title: string
  description: string
  outcome: string
  icon: 'search' | 'cube' | 'growth' | 'people' | 'globe'
}

export type JourneyStep = {
  number: string
  title: string
  description: string
  icon: 'document' | 'people' | 'code' | 'megaphone'
}

export type Mentor = {
  name: string
  role: string
  focus: string
  style: string
  tone: string
  initials: string
}

export type ImpactMetric = {
  value: string
  label: string
}

export type Resource = {
  type: string
  title: string
  description: string
  tone: string
}

export type NewsItem = {
  category: string
  date: string
  title: string
  description: string
  image: string
  tone: 'teal' | 'coral' | 'sand'
}

export type EventItem = {
  type: string
  day: string
  month: string
  dateLabel: string
  title: string
  description: string
  time: string
  location: string
  audience: string
}

export type StationedTeam = {
  name: string
  logo: 'orbit' | 'leaf' | 'pulse' | 'quantum' | 'portal' | 'sprout'
  industry: string
  description: string
  members: string
  founded: string
  stage: string
  tone: string
}

export type StationedTeamStat = {
  value: string
  label: string
}

export const navigation = [
  { label: 'معرفی مرکز', href: '#philosophy' },
  { label: 'برنامه‌ها', href: '#programs' },
  { label: 'فرایند پذیرش', href: '#journey' },
  { label: 'تجربه‌های مرکز', href: '#stories' },
  { label: 'اخبار', href: '#news' },
  { label: 'رویدادها', href: '#events' },
  { label: 'مشاوران', href: '#mentors' },
  { label: 'منابع آموزشی', href: '#resources' },
  { label: 'پرسش‌های متداول', href: '#faq' },
]

export const programTracks: ProgramTrack[] = [
  {
    id: 'validation',
    title: 'بررسی و اعتبارسنجی مسئله',
    description: 'مسئله، گروه مخاطب و شواهد اولیه بررسی می‌شود و روش‌های گردآوری اطلاعات برای ارزیابی آن در اختیار تیم قرار می‌گیرد.',
    outcome: 'خروجی: گزارش اولیه مسئله و پیشنهاد مرحله بعد',
    icon: 'search',
  },
  {
    id: 'mvp',
    title: 'توسعه نمونه اولیه',
    description: 'دامنه طرح مشخص می‌شود و نمونه‌ای اولیه برای بررسی کاربرد، امکان‌پذیری و دریافت بازخورد توسعه می‌یابد.',
    outcome: 'خروجی: نمونه اولیه و برنامه ارزیابی آن',
    icon: 'cube',
  },
  {
    id: 'market',
    title: 'آمادگی عرضه و ارزیابی بازار',
    description: 'مخاطبان، کاربرد و مسیر عرضه طرح بررسی می‌شود تا امکان‌سنجی اولیه و الزامات ادامه فعالیت روشن شود.',
    outcome: 'خروجی: گزارش ارزیابی بازار و برنامه اقدام',
    icon: 'growth',
  },
  {
    id: 'fundraising',
    title: 'آمادگی ارائه و تأمین مالی',
    description: 'مستندات فنی و مالی، گزارش پیشرفت و ساختار ارائه برای معرفی طرح به نهادهای پشتیبان و سرمایه‌گذاران آماده می‌شود.',
    outcome: 'خروجی: بسته مستندات و ارائه رسمی طرح',
    icon: 'people',
  },
  {
    id: 'scale',
    title: 'توسعه و همکاری‌های بین‌المللی',
    description: 'ظرفیت‌های توسعه، همکاری‌های بین‌نهادی و الزامات فعالیت در بازارهای جدید بر اساس شرایط طرح بررسی می‌شود.',
    outcome: 'خروجی: برنامه توسعه میان‌مدت و شاخص‌های ارزیابی',
    icon: 'globe',
  },
]

export const journeySteps: JourneyStep[] = [
  {
    number: '۱',
    title: 'ارزیابی اولیه و پذیرش',
    description: 'موضوع طرح، شواهد اولیه و ظرفیت اجرایی تیم بررسی و نتیجه به‌صورت شفاف اعلام می‌شود.',
    icon: 'document',
  },
  {
    number: '۲',
    title: 'تشکیل و تکمیل تیم',
    description: 'نیازهای تخصصی طرح شناسایی و در صورت نیاز، زمینه ارتباط با مشاوران و همکاران تخصصی فراهم می‌شود.',
    icon: 'people',
  },
  {
    number: '۳',
    title: 'توسعه و ارزیابی',
    description: 'فعالیت‌های آموزشی، نمونه‌سازی، بررسی بازخورد و ارزیابی دوره‌ای طرح انجام می‌شود.',
    icon: 'code',
  },
  {
    number: '۴',
    title: 'ارائه و جمع‌بندی',
    description: 'نتایج فعالیت‌ها، آموخته‌ها و برنامه ادامه طرح در جلسه ارائه پایانی مستند و بررسی می‌شود.',
    icon: 'megaphone',
  },
]

export const mentors: Mentor[] = [
  {
    name: 'مهندس علی محمدی',
    role: 'متخصص فناوری و توسعه محصول',
    focus: 'فناوری عمیق',
    style: 'مشاور اجرایی',
    tone: '#6f7f73',
    initials: 'ع‌م',
  },
  {
    name: 'مهندس سارا رستمی',
    role: 'متخصص سرمایه‌گذاری و برنامه‌ریزی',
    focus: 'سرمایه‌گذاری',
    style: 'مشاور برنامه‌ریزی و تأمین مالی',
    tone: '#8a786f',
    initials: 'س‌ر',
  },
  {
    name: 'دکتر نیما فرهادی',
    role: 'متخصص محصول و راهبرد',
    focus: 'محصول و رشد',
    style: 'مشاور محصول',
    tone: '#65737d',
    initials: 'ن‌ف',
  },
]

export const impactMetrics: ImpactMetric[] = [
  { value: '+۸۰', label: 'تیم و طرح پشتیبانی‌شده' },
  { value: '۱۲', label: 'میلیارد تومان منابع مالی جذب‌شده' },
  { value: '+۵۰۰', label: 'ساعت مشاوره تخصصی' },
  { value: '۹۰٪', label: 'نرخ استمرار فعالیت پس از برنامه' },
]

export const stationedTeamStats: StationedTeamStat[] = [
  { value: '۲۴', label: 'تیم مستقر و فعال' },
  { value: '+۱۸۰', label: 'عضو تیم' },
  { value: '۱۵M$', label: 'منابع مالی جذب‌شده' },
  { value: '۶', label: 'همکاری‌های توسعه‌یافته' },
]

export const stationedTeams: StationedTeam[] = [
  {
    name: 'نورال‌فلو AI',
    logo: 'orbit',
    industry: 'هوش مصنوعی',
    description: 'توسعه ابزارهای بهینه‌سازی شبکه عصبی برای کاربردهای یادگیری ماشین در سازمان‌ها.',
    members: '۸',
    founded: '۱۴۰۳',
    stage: 'مرحله توسعه',
    tone: '#a59ab8',
  },
  {
    name: 'گرین‌گرید انرژی',
    logo: 'leaf',
    industry: 'فناوری پاک',
    description: 'پژوهش و توسعه راهکارهای شبکه هوشمند برای مدیریت انرژی‌های تجدیدپذیر.',
    members: '۶',
    founded: '۱۴۰۲',
    stage: 'مرحله اولیه',
    tone: '#8fb8a5',
  },
  {
    name: 'مدسینک سلامت',
    logo: 'pulse',
    industry: 'سلامت دیجیتال',
    description: 'پلتفرم پایش و تحلیل پیش‌بینانه اطلاعات سلامت با استفاده از هوش مصنوعی.',
    members: '۱۰',
    founded: '۱۴۰۳',
    stage: 'مرحله پژوهش و توسعه',
    tone: '#c9a3a0',
  },
  {
    name: 'کوانتوم‌لیپ لبز',
    logo: 'quantum',
    industry: 'محاسبات کوانتومی',
    description: 'پژوهش در زمینه الگوریتم‌های کوانتومی برای مدل‌سازی و بهینه‌سازی مسائل مالی.',
    members: '۵',
    founded: '۱۴۰۴',
    stage: 'مرحله پژوهش و توسعه',
    tone: '#87b8bd',
  },
  {
    name: 'ادوورس XR',
    logo: 'portal',
    industry: 'فناوری آموزش',
    description: 'طراحی تجربه‌های آموزشی واقعیت مجازی و افزوده برای آموزش علوم پایه.',
    members: '۷',
    founded: '۱۴۰۳',
    stage: 'مرحله اولیه',
    tone: '#d1af7e',
  },
  {
    name: 'آگری‌بات سیستمز',
    logo: 'sprout',
    industry: 'فناوری کشاورزی',
    description: 'توسعه ربات‌های کشاورزی و راهکارهای داده‌محور برای کشاورزی دقیق.',
    members: '۹',
    founded: '۱۴۰۲',
    stage: 'مرحله توسعه',
    tone: '#9caf82',
  },
]

export const resources: Resource[] = [
  {
    type: 'راهنمای آموزشی',
    title: 'آشنایی با مدل مالی طرح‌های نوآورانه',
    description: 'الگوی مقدماتی برای ثبت فرضیه‌های درآمد، هزینه و نقطه سربه‌سر.',
    tone: '#d8cfbd',
  },
  {
    type: 'گزارش تجربه',
    title: 'گزارش یک‌سال فعالیت تیم دانشگاهی «مدیار»',
    description: 'مروری بر مراحل توسعه طرح و آموخته‌های تیم در سال نخست فعالیت.',
    tone: '#7d8a7d',
  },
  {
    type: 'یادداشت آموزشی',
    title: 'مراحل تدوین و ارزیابی یک نمونه اولیه',
    description: 'راهنمای گام‌به‌گام برای تعریف دامنه، ساخت و دریافت بازخورد.',
    tone: '#8a7765',
  },
]

export const newsItems: NewsItem[] = [
  {
    category: 'گزارش فعالیت',
    date: '۲۵ تیر ۱۴۰۵',
    title: 'ارائه نتایج فعالیت سه تیم دانشجویی در دوره بهاره',
    description: 'سه تیم دانشجویی نتایج بررسی مسئله و نمونه‌های اولیه خود را در جلسه ارائه پایانی گزارش کردند.',
    image: '/Generated Image2.webp',
    tone: 'teal',
  },
  {
    category: 'اطلاعیه',
    date: '۱۸ تیر ۱۴۰۵',
    title: 'ثبت‌نام دوره آموزشی تابستان ۱۴۰۵ آغاز شد',
    description: 'این دوره برای آشنایی با روش بررسی مسئله، توسعه نمونه اولیه و ارزیابی طرح برگزار می‌شود.',
    image: '/Generated workshop.webp',
    tone: 'coral',
  },
  {
    category: 'گزارش تجربه تیم‌ها',
    date: '۱۰ تیر ۱۴۰۵',
    title: 'گزارش تیم «مدیار» از نخستین مرحله بررسی مسئله',
    description: 'یادداشتی درباره روش گفت‌وگو با مخاطبان و اصلاح فرضیه‌های اولیه طرح.',
    image: '/Generated whiteboard.webp',
    tone: 'sand',
  },
]

export const events: EventItem[] = [
  {
    type: 'کارگاه آموزشی',
    day: '۲۸',
    month: 'تیر',
    dateLabel: 'پنج‌شنبه ۲۸ تیر',
    title: 'روش بررسی مسئله و تدوین طرح اولیه',
    description: 'در این کارگاه، مراحل تعریف مسئله، شناسایی مخاطب و تدوین فرضیه‌های اولیه مرور می‌شود.',
    time: '۱۵:۰۰ تا ۱۷:۰۰',
    location: 'ساختمان نوآوری · طبقه ۲',
    audience: 'ویژه دانشجویان و دانش‌آموختگان',
  },
  {
    type: 'نشست تخصصی',
    day: '۰۴',
    month: 'مرداد',
    dateLabel: 'چهارشنبه ۴ مرداد',
    title: 'گفت‌وگو درباره مسیر توسعه یک طرح دانشگاهی',
    description: 'مروری بر تجربه شکل‌گیری تیم، توسعه نمونه اولیه و تعامل با مخاطبان طرح.',
    time: '۱۷:۳۰ تا ۱۹:۰۰',
    location: 'آنلاین · لینک پس از ثبت‌نام',
    audience: 'برای دانشجویان و علاقه‌مندان',
  },
  {
    type: 'نشست معرفی مرکز',
    day: '۱۲',
    month: 'مرداد',
    dateLabel: 'پنج‌شنبه ۱۲ مرداد',
    title: 'آشنایی با فعالیت‌های مرکز و فرصت‌های همکاری',
    description: 'در این نشست، حوزه‌های فعالیت مرکز و مسیرهای مشارکت دانشجویان معرفی و به پرسش‌ها پاسخ داده می‌شود.',
    time: '۱۸:۰۰ تا ۲۰:۰۰',
    location: 'حیاط مرکزی هاب',
    audience: 'با ثبت‌نام قبلی',
  },
]
