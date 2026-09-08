import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>01 HOW ─ 02 EXAMS ─ 03 FAQ ─ YOU ARE HERE</div>
      <h1>Navigate<br /><span>the exam itself.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> become waypoints — every section a stop, every timer a signpost. Press 1-9 or just walk the page downward.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Start walking →</a>
        <a href="#how" className={styles.btn}>Read the map</a>
      </div>
    </div>
  );
}
