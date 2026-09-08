import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>fn hall(seed=paper) → CBT</div>
      <h1>for q in pdf:<br /><span>yield exam()</span></h1>
      <p className={styles.sub}>Your <strong>PYQs executed as code</strong> — generated line art, procedural palette, deterministic timer. Same seed, same hall, every run.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Run seed →</a>
        <a href="#how" className={styles.btn}>Read source</a>
      </div>
    </div>
  );
}
