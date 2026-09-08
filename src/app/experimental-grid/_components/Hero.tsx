import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>COL 01 / 12 — EXPERIMENTAL GRID</div>
      <h1>Span 7.<br /><span>Break 5.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> laid across twelve visible columns — spanning, offsetting, overlapping — while timer and palette hold the baseline.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Occupy cells →</a>
        <a href="#how" className={styles.btn}>Read the grid</a>
      </div>
    </div>
  );
}
