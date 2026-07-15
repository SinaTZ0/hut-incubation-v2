import { motion, useReducedMotion } from "motion/react";
import { useContentStore } from "../../context/useContentStore";
import { ActionLink } from "../ui/ActionLink";
import { Icon } from "../ui/Icon";
import { PageContainer } from "../ui/PageContainer";
import { SectionIntro } from "../ui/SectionIntro";
import styles from "./MentorMatch.module.css";

export function MentorMatch() {
  const { mentors } = useContentStore();
  const latestMentors = mentors.slice(0, 3);
  const reduceMotion = useReducedMotion();
  return (
    <section className={styles.section} id="mentors">
      <PageContainer>
        <div className={styles.heading}>
          <SectionIntro
            eyebrow="مشاوران و متخصصان"
            title="مشاوران مرکز در حوزه‌های مختلف تخصصی فعالیت می‌کنند."
            description="اعضای شبکه مشاوره بر اساس موضوع طرح و نیازهای تخصصی آن، در جلسات آموزشی و ارزیابی مشارکت می‌کنند."
          />
          <ActionLink href="#mentors" variant="text" icon={<Icon name="arrow" size={18} />}>
            مشاهده اعضای شبکه مشاوره
          </ActionLink>
        </div>
        <div className={styles.list}>
          {latestMentors.map((mentor, index) => (
            <motion.article
              key={mentor.id}
              initial={reduceMotion ? false : { opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className={styles.portrait}
                style={{ "--portrait": mentor.tone } as React.CSSProperties}
                role="img"
                aria-label={`تصویر ${mentor.name}`}
              >
                <img src={mentor.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              </div>
              <div className={styles.info}>
                <span className={styles.index}>۰{index + 1}</span>
                <h3>{mentor.name}</h3>
                <p>{mentor.role}</p>
                <dl>
                  <div>
                    <dt>تمرکز</dt>
                    <dd>{mentor.focus}</dd>
                  </div>
                  <div>
                    <dt>نحوه مشارکت</dt>
                    <dd>{mentor.style}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
          {latestMentors.length === 0 && <p className={styles.empty}>در حال حاضر مشاوری برای نمایش وجود ندارد.</p>}
        </div>
      </PageContainer>
    </section>
  );
}
