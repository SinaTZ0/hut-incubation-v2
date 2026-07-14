import { resources } from "../../data/content";
import { ActionLink } from "../ui/ActionLink";
import { Icon } from "../ui/Icon";
import { PageContainer } from "../ui/PageContainer";
import { SectionIntro } from "../ui/SectionIntro";
import resourceFinance from "../../assets/sections/resource-finance.webp";
import resourceJourney from "../../assets/sections/resource-journey.webp";
import resourceMvp from "../../assets/sections/resource-mvp.webp";
import styles from "./ResourceBridge.module.css";

const resourceImages = [resourceFinance, resourceJourney, resourceMvp];

export function ResourceBridge() {
  return (
    <section className={styles.section} id="resources">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro
            eyebrow="منابع آموزشی"
            title="منابع منتخب برای مطالعه و استفاده آموزشی"
            description="راهنماها، گزارش‌ها و الگوهای مقدماتی مرتبط با توسعه طرح‌های نوآورانه در این بخش گردآوری شده‌اند."
          />
          <ActionLink href="#toolkit" variant="outline" icon={<Icon name="download" size={18} />}>
            فهرست منابع آموزشی
          </ActionLink>
        </div>
        <div className={styles.resources}>
          {resources.map((resource, index) => (
            <article key={resource.title}>
              <div
                className={styles.thumb}
                style={{ "--thumb": resource.tone } as React.CSSProperties}
                role="img"
                aria-label={`تصویر برای ${resource.title}`}
              >
                <img src={resourceImages[index]} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <span>۰{index + 1}</span>
              </div>
              <div className={styles.copy}>
                <span>{resource.type}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href="#resources">
                  مشاهده منبع <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.toolkit} id="toolkit">
          <div>
            <span>منبع قابل دریافت</span>
            <h3>مجموعه فرم‌ها و الگوهای آموزشی</h3>
            <p>نمونه فرم ارزیابی مسئله، الگوی مدل مالی و چک‌لیست مستندسازی فعالیت طرح.</p>
          </div>
          <ActionLink href="#toolkit" variant="light" icon={<Icon name="download" size={18} />}>
            دریافت مجموعه فرم‌ها
          </ActionLink>
        </div>

        <div className={styles.finalCta} id="apply">
          <div>
            <span>اطلاعیه پذیرش</span>
            <h2>اطلاعات دوره‌های آموزشی و پذیرش مرکز</h2>
            <p>زمان‌بندی و شرایط ثبت درخواست در اطلاعیه‌های هر دوره اعلام می‌شود.</p>
          </div>
          <div className={styles.actions}>
            <ActionLink href="#programs" variant="light" icon={<Icon name="arrow" size={18} />}>
              مشاهده برنامه‌های مرکز
            </ActionLink>
            <ActionLink href="#apply" variant="light" icon={<Icon name="arrow" size={18} />}>
              اطلاعات پذیرش
            </ActionLink>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
