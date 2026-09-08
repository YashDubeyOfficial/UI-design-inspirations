import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>★ ATOMIC AGE · RAYGUNS · ROCKETS · RESULTS ★</div>
      <h1>The future of exams,<br /><span>as promised in 1955.</span></h1>
      <p className={styles.sub}>Your <strong>earthly PYQs</strong> launched aboard chrome rockets — boomerangs, starbursts and a CBT with genuine jet-age optimism.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Blast off →</a>
        <a href="#how" className={styles.btn}>Read the brochure</a>
      </div>
    </div>
  );
}
