import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Depth 1 · 2 · 3 · 4 · 5 — descend carefully</div>
      <h1>Down we go,<br /><span>layer by layer.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs stacked into strata</strong> — surface instructions, mid-depth questions, bedrock timer. Pressure increases with depth. So do scores.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Descend →</a>
        <a href="#how" className={styles.btn}>Check depth</a>
      </div>
    </div>
  );
}
