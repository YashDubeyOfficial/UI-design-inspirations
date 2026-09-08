import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>{'/// SIGNAL_INTERRUPTED · EXAM_FOUND'}</div>
      <h1>ERR0R: BORING<br /><span>UI NOT FOUND</span></h1>
      <p className={styles.sub}>Your <strong>corrupted PYQs and glitchy scans</strong> reassembled into a hallucinated CBT. Scanlines included, accuracy guaranteed.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>INJECT PDF →</a>
        <a href="#how" className={styles.btn}>TRACE SIGNAL</a>
      </div>
    </div>
  );
}
