import { Icon } from "../ui/Icon";
import { MediaPlaceholder } from "../ui/MediaPlaceholder";
import { PageContainer } from "../ui/PageContainer";
import { SectionIntro } from "../ui/SectionIntro";
import styles from "./LabShowcase.module.css";

export function LabShowcase() {
  return (
    <section className={styles.section} id="lab">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro
            eyebrow="فضا و امکانات مرکز"
            title="محیطی برای آموزش، پژوهش و همکاری میان‌رشته‌ای"
            description="فضاهای کاری و آموزشی مرکز برای برگزاری جلسات، توسعه نمونه‌های اولیه و تعامل میان دانشجویان، استادان و متخصصان فراهم شده‌اند."
          />
          <a href="#lab-grid">
            <Icon name="play" size={28} />
            <span>
              آشنایی با مرکز
              <br />
              <b>معرفی تصویری</b>
            </span>
          </a>
        </div>
        <div className={styles.grid} id="lab-grid">
          <MediaPlaceholder
            className={styles.whiteboard}
            shape="arch"
            tone="#817d70"
            label="اتاق جلسات و ارائه"
            drift
          >
            <img className={styles.mediaImage} src="/Generated whiteboard.webp" alt="" aria-hidden="true" />
          </MediaPlaceholder>
          <MediaPlaceholder
            className={styles.workshop}
            shape="cutCorner"
            tone="#725f4e"
            label="کارگاه توسعه نمونه اولیه"
          >
            <img className={styles.mediaImage} src="/Generated workshop.webp" alt="" aria-hidden="true" />
          </MediaPlaceholder>
          <MediaPlaceholder
            className={styles.cowork}
            shape="offset"
            tone="#4f6861"
            label="فضای کاری مشترک"
            drift
          >
            <img className={styles.mediaImage} src="/Generated cowork.webp" alt="" aria-hidden="true" />
          </MediaPlaceholder>
          <MediaPlaceholder
            className={styles.pod}
            shape="capsule"
            tone="#3f5753"
            label="اتاق جلسات مشاوره"
          >
            <img className={styles.mediaImage} src="/Generated space.webp" alt="" aria-hidden="true" />
          </MediaPlaceholder>

          <blockquote className={styles.quote}>
          «در این مرکز، طرح‌ها در فرایندی مرحله‌ای بررسی و توسعه می‌یابند؛
            <br />
            <em>از آموزش تا ارزیابی و همکاری.</em>»
          </blockquote>
        </div>
      </PageContainer>
    </section>
  );
}
