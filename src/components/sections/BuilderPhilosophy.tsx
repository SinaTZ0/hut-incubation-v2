import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../ui/PageContainer";
import styles from "./BuilderPhilosophy.module.css";

const principles = [
  ["۰۱", "تصمیم بر پایه داده", "هر فرضیه باید راهی برای سنجیده‌شدن داشته باشد."],
  ["۰۲", "بازخورد بی‌پرده", "مسئله را زود می‌بینیم تا هزینه اشتباه کوچک بماند."],
  ["۰۳", "یادگیری سریع", "شکست زودهنگام، داده‌ای برای ساخت مسیر بهتر است."],
];

export function BuilderPhilosophy() {
  const reduceMotion = useReducedMotion();
  return (
    <section className={styles.section} id="philosophy">
      <PageContainer>
        <motion.div
          className={styles.statement}
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <div className={styles.statementLead}>
            <span className={styles.eyebrow}>
              <i aria-hidden="true" />
              نگاه ما
            </span>
            <h2>
              شتاب‌دهی مبتنی بر داده،
              <br />
              <em>بدون بوروکراسی دانشگاهی.</em>
            </h2>
          </div>
          <div className={styles.statementAside}>
            <p>
              اینجا اعتبار یک ایده از عنوان دانشگاهی‌اش نمی‌آید؛ از مسئله واقعی، تیم متعهد و توان یادگیری سریع می‌آید.
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
