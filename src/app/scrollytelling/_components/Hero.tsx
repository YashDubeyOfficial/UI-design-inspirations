import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Chapter One of Three · Keep scrolling, hero</div>
      <h1>Once upon<br /><span>a PDF…</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as a three-chapter tale</strong> — the arrival, the transformation, the timed triumph. Scroll slowly; the exam builds as you read.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Begin chapter →</a>
        <a href="#how" className={styles.btn}>Skip to end</a>
      </div>
    </div>
  );
}
