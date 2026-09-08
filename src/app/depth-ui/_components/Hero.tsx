import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Elevation: tasteful · Shadows: soft · Exam: hard</div>
      <h1>A little depth.<br /><span>A lot of exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with gentle dimensionality</strong> — soft shadows under cards, a timer that hovers politely, and pressure that never shouts.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Dip in →</a>
        <a href="#how" className={styles.btn}>Feel depth</a>
      </div>
    </div>
  );
}
