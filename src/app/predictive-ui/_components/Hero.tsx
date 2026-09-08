import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>FORECAST: 97.2 %ILE ±1.4 · CONFIDENCE: HIGH</div>
      <h1>We predict<br /><span>you will pass.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs plus trajectory modeling</strong> — forecasted percentile, weak-topic warnings, optimal next mock. The future, with error bars.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Forecast me →</a>
        <a href="#how" className={styles.btn}>See model</a>
      </div>
    </div>
  );
}
