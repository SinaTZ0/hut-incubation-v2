import { motion, useReducedMotion } from "motion/react";
import { ActionLink } from "../ui/ActionLink";
import { CursorGrid } from "../ui/CursorGrid";
import { Icon } from "../ui/Icon";
import { PageContainer } from "../ui/PageContainer";
import styles from "./LaunchHero.module.css";

export function LaunchHero() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 48 }, animate: { opacity: 1, y: 0 } };
  const revealTransition = { duration: 0.6, ease: "easeOut" as const };
  const visualTransition = { duration: 0.6, ease: "easeOut" as const };

  return (
    <section className={styles.hero} id="top">
      {!reduceMotion && (
        <CursorGrid
          className={styles.cursorGrid}
          cellSize={72}
          color="#117b76"
          radius={220}
          holdTime={360}
          fadeDuration={1400}
          lineWidth={1.15}
          maxOpacity={0.42}
          fillOpacity={0.035}
          gridOpacity={0.045}
          cellRadius={3}
          pulseSpeed={480}
        />
      )}
      <PageContainer className={styles.layout}>
        <motion.div className={styles.content} {...reveal} transition={revealTransition}>
          <h1>
            مرکز
            <em> نوآوری </em>
            دانشگاه صنعتی همدان
          </h1>
          <p>از نخستین گفت‌وگو با مشتری تا جذب سرمایه، کنار شما هستیم تا سریع‌تر، هوشمندانه‌تر و پایدارتر رشد کنید.</p>
          <div className={styles.actions}>
            <ActionLink href="#apply" icon={<Icon name="arrow" size={19} />}>
              ثبت درخواست پذیرش
            </ActionLink>
            <ActionLink href="#programs" variant="outline" icon={<Icon name="arrow" size={19} />}>
              مشاهده دوره‌های پذیرش
            </ActionLink>
          </div>
          <div className={styles.note}>
            <strong>دوره بعدی پذیرش</strong>
            <span>پاییز ۱۴۰۵ · ظرفیت محدود</span>
          </div>
        </motion.div>

        <div className={styles.visual}>
          <motion.div
            className={styles.imageShadow}
            initial={reduceMotion ? false : { filter: "drop-shadow(27rem 27rem 0rem #117B76)", opacity: 0 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    filter: ["drop-shadow(27rem 27rem 0rem #117B76)", "drop-shadow(5rem 3rem 0rem #117B76)"],
                    opacity: [0, 1],
                  }
            }
            transition={reduceMotion ? { duration: 0 } : { ...visualTransition, delay: 0.2 }}
          >
            <motion.div
              className={styles.imageFrame}
              initial={reduceMotion ? false : { x: "-14rem", y: "-14rem" }}
              animate={reduceMotion ? undefined : { x: ["-14rem", "0rem"], y: ["-14rem", "0rem"] }}
              transition={reduceMotion ? { duration: 0 } : { ...visualTransition, delay: 0.12 }}
            >
              <img
                src="/Generated Image2.webp"
                alt="فضای کار اشتراکی و تیم‌های در حال ساخت"
                width={1262}
                height={520}
                fetchPriority="high"
              />
              <span className={styles.visualCaption}>فضای کار بنیان‌گذاران · پردیس نوآوری</span>
            </motion.div>
          </motion.div>
          <span className={styles.seal}>
            <b>۱۲</b>
            <small>
              هفته
              <br />
              ساخت فشرده
            </small>
          </span>
        </div>
      </PageContainer>
    </section>
  );
}
