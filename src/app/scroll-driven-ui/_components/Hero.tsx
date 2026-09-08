import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>PROGRESS 000% ─────── 100% · SCROLL TO FILL</div>
      <h1>Scroll is<br /><span>the progress bar.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as a journey bar</strong> — every section fills it, every answer advances it, the timer races it. Reach 100% before zero.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Start scrolling →</a>
        <a href="#how" className={styles.btn}>Check progress</a>
      </div>
    </div>
  );
}
