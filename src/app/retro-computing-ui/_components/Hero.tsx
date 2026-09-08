import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>PARAKH DOS v6.22 — 640K OUGHT TO BE ENOUGH</div>
      <h1>C:\&gt; EXAM.EXE<br /><span>_</span></h1>
      <p className={styles.sub}>Your <strong>PYQs loaded from floppy</strong> — a phosphor-amber CBT with blinking cursor, beep timer and absolutely no mouse required.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>RUN EXAM.EXE →</a>
        <a href="#how" className={styles.btn}>DIR /W</a>
      </div>
    </div>
  );
}
