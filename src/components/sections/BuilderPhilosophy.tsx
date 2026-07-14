import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../ui/PageContainer";
import { SectionIntro } from "../ui/SectionIntro";
import styles from "./BuilderPhilosophy.module.css";

const principles = [
  ["۰۱", "تصمیم‌گیری مبتنی بر شواهد", "هر فرضیه با روش مشخص و اطلاعات قابل بررسی ارزیابی می‌شود."],
  ["۰۲", "بازخورد مستمر", "بازخورد استادان، مشاوران و مخاطبان در مراحل مختلف ثبت و بررسی می‌شود."],
  ["۰۳", "یادگیری و بهبود", "نتایج هر مرحله برای اصلاح طرح و تعیین گام بعدی مورد استفاده قرار می‌گیرد."],
];

export function BuilderPhilosophy() {
  const reduceMotion = useReducedMotion();
  return (
    <section className={styles.section} id="philosophy">
      <PageContainer>
        <motion.div
          className={styles.statement}
          initial={reduceMotion ? false : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.statementLead}>
            <SectionIntro
              eyebrow="رویکرد مرکز"
              title={<>حمایت از نوآوری بر پایه شواهد،<br /><em>یادگیری و همکاری دانشگاهی.</em></>}
              light
            />
          </div>
          <div className={styles.statementAside}>
            <p>
              فعالیت‌های مرکز بر شناسایی مسئله، بررسی شواهد و توسعه مرحله‌ای طرح‌ها با مشارکت دانشجویان و پژوهشگران استوار است.
            </p>
          </div>
        </motion.div>
        <div className={styles.principles}>
          {principles.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
