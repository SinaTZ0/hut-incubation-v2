import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { impactMetrics, stationedTeams } from "../../data/content";
import { Icon } from "../ui/Icon";
import { PageContainer } from "../ui/PageContainer";
import { SectionIntro } from "../ui/SectionIntro";
import styles from "./TrackRecord.module.css";

const trust = [
  "تحت نظارت دانشگاه و پارک علم و فناوری",
  "حمایت حقوقی و مالکیت فکری",
  "همکاری با وزارت علوم و شبکه صنعتی",
  "دسترسی‌پذیر برای همه بنیان‌گذاران",
];

const counterTargets = [80, 12, 500, 90];

function MetricCounter({ index, reduceMotion }: { index: number; reduceMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const [value, setValue] = useState(reduceMotion ? counterTargets[index] : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(counterTargets[index]);
      return;
    }
    const start = performance.now();
    const duration = 1200;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(counterTargets[index] * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, index, reduceMotion]);

  const prefix = index === 0 || index === 2 ? "+" : "";
  const suffix = index === 3 ? "٪" : "";
  return (
    <strong ref={ref}>
      {prefix}
      {value.toLocaleString("fa-IR")}
      {suffix}
    </strong>
  );
}

export function TrackRecord() {
  const reduceMotion = useReducedMotion();
  return (
    <section className={styles.section} aria-labelledby="impact-title">
      <PageContainer>
        <div className={styles.top}>
          <div className={styles.title}>
            <SectionIntro
              eyebrow="کارنامه ما"
              title="اعتماد، وقتی ماندگار است که قابل اندازه‌گیری باشد."
              titleId="impact-title"
              light
            />
          </div>
          <div className={styles.metrics}>
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={reduceMotion ? false : { opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <MetricCounter index={index} reduceMotion={Boolean(reduceMotion)} />
                <span>{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={styles.trust}>
          <strong>پشتوانه‌ای برای ساختن</strong>
          <ul>
            {trust.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.marquee} aria-label="نمونه‌ای از تیم‌های جامعه هاب">
          <div className={styles.marqueeTrack}>
            {[0, 1].map((copy) => (
              <div className={styles.marqueeGroup} key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {stationedTeams.map((team) => (
                  <span key={team.name}>
                    <i aria-hidden="true">✦</i>
                    {team.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
