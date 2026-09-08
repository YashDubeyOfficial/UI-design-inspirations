import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>wght 100 → 900 · wdth 75 → 125 · opsz auto</div>
      <h1>Weight is<br /><span>meaning.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs in one endlessly adaptable face</strong> — light for skimming, black for deciding — a CBT that modulates emphasis like a voice.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Vary PDF →</a>
        <a href="#how" className={styles.btn}>Test weights</a>
      </div>
    </div>
  );
}
