import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>CAL. DUE: NEVER · TOLERANCE: ZERO · REV C</div>
      <h1>Calibrated for<br /><span>toppers.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs measured to three decimals</strong> — instrument-grade timer, reference palette, certified sections. Uncertainty: ±0.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Calibrate PDF →</a>
        <a href="#how" className={styles.btn}>View datasheet</a>
      </div>
    </div>
  );
}
