import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Tier 1 · Tier 2 · Tier 3 — afternoon tea, but exams</div>
      <h1>Stacked high,<br /><span>served exact.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs on tiered trays</strong> — questions on top, palette in the middle, timer as the cherry. Take from any level.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Stack PDF →</a>
        <a href="#how" className={styles.btn}>View tiers</a>
      </div>
    </div>
  );
}
