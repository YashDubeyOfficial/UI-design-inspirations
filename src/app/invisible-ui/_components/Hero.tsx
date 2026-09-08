import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Nothing to see. Everything works.</div>
      <h1>Almost<br /><span>nothing here.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with the interface removed</strong> — no chrome, no cards shouting, just questions, a whisper timer and a palette of dots.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Continue →</a>
        <a href="#how" className={styles.btn}>Details</a>
      </div>
    </div>
  );
}
