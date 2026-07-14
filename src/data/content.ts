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
  { label: 'درباره ما', href: '#philosophy' },
  { label: 'برنامه‌ها', href: '#programs' },
  { label: 'مسیر رشد', href: '#journey' },
  { label: 'داستان‌ها', href: '#stories' },
  { label: 'منتورها', href: '#mentors' },
  { label: 'منابع', href: '#resources' },
  { label: 'پرسش‌ها', href: '#faq' },
]

export const programTracks: ProgramTrack[] = [
  {
    id: 'validation',
    title: 'اعتبارسنجی ایده',
    description: 'مسئله را از پشت میز بیرون می‌آوریم؛ با مشتری واقعی گفت‌وگو می‌کنید و فرضیه‌های پرریسک را پیش از ساخت می‌آزمایید.',
    outcome: 'خروجی: شواهد روشن برای ادامه، تغییر مسیر یا توقف هوشمندانه',
    icon: 'search',
  },
  {
    id: 'mvp',
    title: 'توسعه محصول اولیه',
    description: 'دامنه محصول را کوچک می‌کنیم و در اسپرینت‌های کوتاه، نمونه‌ای قابل استفاده برای نخستین کاربران می‌سازیم.',
    outcome: 'خروجی: MVP قابل سنجش با نقشه یادگیری محصول',
    icon: 'cube',
  },
  {
    id: 'market',
    title: 'ورود به بازار',
    description: 'پیام، کانال و مدل درآمد را با آزمایش‌های کم‌هزینه پیدا می‌کنید تا رشد بر پایه داده شکل بگیرد.',
    outcome: 'خروجی: برنامه ورود به بازار و قیف فروش اولیه',
    icon: 'growth',
  },
  {
    id: 'fundraising',
    title: 'آمادگی جذب سرمایه',
    description: 'روایت سرمایه‌گذاری، مدل مالی و اتاق داده را می‌سازیم و ارائه شما را در برابر سرمایه‌گذاران تمرین می‌کنیم.',
    outcome: 'خروجی: بسته کامل جذب سرمایه و معرفی هدفمند',
    icon: 'people',
  },
  {
    id: 'scale',
    title: 'مقیاس‌پذیری و بین‌المللی‌سازی',
    description: 'عملیات، ساختار تیم و اقتصاد واحد را برای رشد پایدار و ورود سنجیده به بازارهای تازه آماده می‌کنیم.',
    outcome: 'خروجی: نقشه رشد ۱۲ ماهه با شاخص‌های کنترل‌پذیر',
    icon: 'globe',
  },
]

export const journeySteps: JourneyStep[] = [
  {
    number: '۱',
    title: 'غربالگری و پذیرش',
    description: 'ارزیابی مسئله، انگیزه تیم و شواهد اولیه؛ نه صرفاً یک ارائه پرزرق‌وبرق.',
    icon: 'document',
  },
  {
    number: '۲',
    title: 'تیم‌سازی',
    description: 'شناخت دقیق نیازها و اتصال شما به منتور، هم‌بنیان‌گذار و متخصص مناسب.',
    icon: 'people',
  },
  {
    number: '۳',
    title: 'ساخت',
    description: 'اسپرینت‌های اجرایی، فضای کار، آزمایش با کاربر و بازخورد هفتگی شفاف.',
    icon: 'code',
  },
  {
    number: '۴',
    title: 'دمو دی',
    description: 'آماده‌سازی ارائه و گفت‌وگوی مستقیم با شبکه سرمایه‌گذاران و شرکای صنعتی.',
    icon: 'megaphone',
  },
]

export const mentors: Mentor[] = [
  {
    name: 'مهندس علی محمدی',
    role: 'متخصص فناوری و توسعه محصول',
    focus: 'فناوری عمیق',
    style: 'مربی عملیاتی',
    tone: '#6f7f73',
    initials: 'ع‌م',
  },
  {
    name: 'مهندس سارا رستمی',
    role: 'سرمایه‌گذار و مشاور رشد',
    focus: 'سرمایه‌گذاری',
    style: 'مشاور استراتژیک',
    tone: '#8a786f',
    initials: 'س‌ر',
  },
  {
    name: 'دکتر نیما فرهادی',
    role: 'مدیر محصول و استراتژی',
    focus: 'محصول و رشد',
    style: 'اپراتور همراه',
    tone: '#65737d',
    initials: 'ن‌ف',
  },
]

export const impactMetrics: ImpactMetric[] = [
  { value: '+۸۰', label: 'استارتاپ راه‌اندازی‌شده' },
  { value: '۱۲', label: 'میلیارد تومان سرمایه جذب‌شده' },
  { value: '+۵۰۰', label: 'ساعت منتورینگ تخصصی' },
  { value: '۹۰٪', label: 'نرخ بقا پس از فارغ‌التحصیلی' },
]

export const stationedTeamStats: StationedTeamStat[] = [
  { value: '۲۴', label: 'تیم فعال' },
  { value: '+۱۸۰', label: 'عضو تیم' },
  { value: '۱۵M$', label: 'سرمایه جذب‌شده' },
  { value: '۶', label: 'خروج موفق' },
]

export const stationedTeams: StationedTeam[] = [
  {
    name: 'نورال‌فلو AI',
    logo: 'orbit',
    industry: 'هوش مصنوعی',
    description: 'ابزارهای نسل جدید بهینه‌سازی شبکه عصبی برای خطوط یادگیری ماشین سازمانی.',
    members: '۸',
    founded: '۱۴۰۳',
    stage: 'سری A',
    tone: '#a59ab8',
  },
  {
    name: 'گرین‌گرید انرژی',
    logo: 'leaf',
    industry: 'فناوری پاک',
    description: 'راهکارهای شبکه هوشمند برای مدیریت و توزیع پایدار انرژی‌های تجدیدپذیر.',
    members: '۶',
    founded: '۱۴۰۲',
    stage: 'بذری',
    tone: '#8fb8a5',
  },
  {
    name: 'مدسینک سلامت',
    logo: 'pulse',
    industry: 'سلامت دیجیتال',
    description: 'پلتفرم پایش بیمار و تحلیل پیش‌بینانه سلامت مبتنی بر هوش مصنوعی.',
    members: '۱۰',
    founded: '۱۴۰۳',
    stage: 'پیش‌بذری',
    tone: '#c9a3a0',
  },
  {
    name: 'کوانتوم‌لیپ لبز',
    logo: 'quantum',
    industry: 'محاسبات کوانتومی',
    description: 'توسعه الگوریتم‌های کوانتومی برای مدل‌سازی و بهینه‌سازی مسائل مالی.',
    members: '۵',
    founded: '۱۴۰۴',
    stage: 'پیش‌بذری',
    tone: '#87b8bd',
  },
  {
    name: 'ادوورس XR',
    logo: 'portal',
    industry: 'فناوری آموزش',
    description: 'تجربه‌های آموزشی فراگیر واقعیت مجازی و افزوده برای یادگیری علوم پایه.',
    members: '۷',
    founded: '۱۴۰۳',
    stage: 'بذری',
    tone: '#d1af7e',
  },
  {
    name: 'آگری‌بات سیستمز',
    logo: 'sprout',
    industry: 'فناوری کشاورزی',
    description: 'ربات‌های کشاورزی خودران و راهکارهای داده‌محور برای کشاورزی دقیق.',
    members: '۹',
    founded: '۱۴۰۲',
    stage: 'سری A',
    tone: '#9caf82',
  },
]

export const resources: Resource[] = [
  {
    type: 'راهنما',
    title: 'مدل مالی استارتاپ؛ از فرضیه تا تصمیم',
    description: 'قالبی ساده برای پیش‌بینی درآمد، هزینه و نقطه سربه‌سر.',
    tone: '#d8cfbd',
  },
  {
    type: 'مطالعه موردی',
    title: 'از ایده تا جذب سرمایه؛ داستان «مدیار»',
    description: 'مسیر رشد یک تیم دانشگاهی در یک سال نخست.',
    tone: '#7d8a7d',
  },
  {
    type: 'مقاله',
    title: 'چگونه یک MVP را در ۳۰ روز بسازیم؟',
    description: 'راهنمای گام‌به‌گام برای ساخت چیزی که از کاربر یاد می‌گیرد.',
    tone: '#8a7765',
  },
]
