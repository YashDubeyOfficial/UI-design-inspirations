import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Glanceable · Proactive · Polite — like good lighting</div>
      <h1>Present,<br /><span>never pushy.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs handled ambiently</strong> — the next question pre-read, the timer a gentle glow, results surfacing exactly when relevant.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Glance at PDF →</a>
        <a href="#how" className={styles.btn}>Stay ambient</a>
      </div>
    </div>
  );
}
