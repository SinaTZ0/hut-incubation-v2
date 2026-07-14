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
    quote: "در دوازده هفته از یک فرضیه خام به محصولی رسیدیم که اولین مشتری‌هایش را پیدا کرده بود.",
    founder: "سارا احمدی",
    role: "هم‌بنیان‌گذار و مدیر محصول",
    metric: "۳.۴×",
    metricLabel: "رشد درآمد در ۶ ماه",
    image: mentorSara,
    logo: "M",
    tone: "coral",
  },
  {
    company: "نورال‌فلو",
    category: "هوش مصنوعی",
    quote: "کمک واقعی یعنی کسی کنار تیم باشد و سؤال درست را درست وقتی بپرسد که لازم است.",
    founder: "نیما فرهادی",
    role: "هم‌بنیان‌گذار و CTO",
    metric: "$1.8M",
    metricLabel: "جذب سرمایه پس از برنامه",
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
            eyebrow="داستان‌های واقعی"
            title="ساختن، وقتی اثرش دیده می‌شود معنا پیدا می‌کند."
            titleId="stories-title"
            description="از اولین مصاحبه مشتری تا لحظه‌ای که محصول در بازار نفس می‌کشد، کنار تیم‌ها می‌مانیم."
          />
          <span className={styles.headingNote}>تجربه‌های ثبت‌شده از جامعه هاب</span>
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
