import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>PAGE WEIGHT 98KB · 0 TRACKERS · A+ SUSTAINABILITY</div>
      <h1>Lean pages.<br /><span>Mean exams.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs at 98 kilobytes</strong> — system fonts, tiny images, honest budgets displayed live. Fast for you, kind to the grid.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Load PDF →</a>
        <a href="#how" className={styles.btn}>View budget</a>
      </div>
    </div>
  );
}
