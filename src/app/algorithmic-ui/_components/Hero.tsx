import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Complexity: O(n) · n = your ambition</div>
      <h1>for exam in papers:<br /><span>yield hall()</span></h1>
      <p className={styles.sub}>Your <strong>PYQs piped through the pipeline</strong> — parsed, vectorized, optimized — into a dashboard-precise CBT with charts where others have vibes.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Run pipeline →</a>
        <a href="#how" className={styles.btn}>Read the logs</a>
      </div>
    </div>
  );
}
