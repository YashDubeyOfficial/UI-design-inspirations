import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>HAPTICS: ON · INTENSITY: EXAM-GRADE</div>
      <h1>Press harder.<br /><span>It presses back.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with physical feedback</strong> — buttons with travel, toggles with detents, a timer you feel in your palm. *bzz* — that was Q14 locking in.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Press PDF →</a>
        <a href="#how" className={styles.btn}>Feel demo</a>
      </div>
    </div>
  );
}
