import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../ui/PageContainer";
import { SectionIntro } from "../ui/SectionIntro";
import styles from "./SuccessStories.module.css";
import mentorSara from "../../assets/sections/mentor-sara.webp";
import mentorNima from "../../assets/sections/mentor-nima.webp";

const stories = [
  {
    company: "مدیار",
    category: "سلامت دیجیتال",
    quote: "در دوره آموزشی، روش بررسی مسئله و تدوین نمونه اولیه را به‌صورت مرحله‌ای آموختیم.",
    founder: "سارا احمدی",
    role: "عضو تیم و مسئول توسعه طرح",
    metric: "۱۲",
    metricLabel: "هفته فعالیت آموزشی",
    image: mentorSara,
    logo: "M",
    tone: "coral",
  },
  {
    company: "نورال‌فلو",
    category: "هوش مصنوعی",
    quote: "جلسات مشاوره به ما کمک کرد فرضیه‌های اولیه را با اطلاعات و بازخورد دقیق‌تری بررسی کنیم.",
    founder: "نیما فرهادی",
    role: "عضو تیم و مسئول فنی",
    metric: "۱۸۰",
    metricLabel: "ساعت مشاوره و آموزش",
    image: mentorNima,
    logo: "N",
    tone: "teal",
  },
];

export function SuccessStories() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} id="stories" aria-labelledby="stories-title">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro
            eyebrow="گزارش تجربه تیم‌ها"
            title="مروری بر تجربه تیم‌های شرکت‌کننده در برنامه‌ها"
            titleId="stories-title"
            description="این بخش، تجربه‌ها و نتایج ثبت‌شده تیم‌ها را در طول دوره‌های آموزشی و مشاوره‌ای مرکز مرور می‌کند."
          />
          <span className={styles.headingNote}>گزارش‌های منتخب از فعالیت تیم‌ها در مرکز</span>
        </div>

        <div className={styles.grid}>
          {stories.map((story, index) => (
            <motion.article
              className={styles.card}
              key={story.company}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : index * 0.14 }}
            >
              <div className={`${styles.storyVisual} ${styles[story.tone]}`}>
                <div className={styles.logo} aria-label={`لوگوی ${story.company}`}>
                  {story.logo}
                </div>
                <span className={styles.category}>{story.category}</span>
                <span className={styles.storyNumber}>۰{index + 1}</span>
                <div className={styles.orbit} aria-hidden="true" />
                <img src={story.image} alt="" aria-hidden="true" loading="lazy" />
              </div>
              <div className={styles.storyCopy}>
                <p className={styles.quote}>«{story.quote}»</p>
                <div className={styles.founder}>
                  <img src={story.image} alt="" aria-hidden="true" />
                  <span>
                    <strong>{story.founder}</strong>
                    <small>{story.role}</small>
                  </span>
                </div>
                <div className={styles.metric}>
                  <strong>{story.metric}</strong>
                  <span>{story.metricLabel}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
