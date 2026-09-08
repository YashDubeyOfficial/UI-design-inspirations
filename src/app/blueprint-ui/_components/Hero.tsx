import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>DWG NO. PKH-2026 · SCALE 1:1 · SHEET 01</div>
      <h1>Drawn to<br /><span>exam spec.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs drafted in white lines</strong> — dimensioned timer, toleranced palette, sectioned views. If it is not on the drawing, it is not in the hall.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Approve drawing →</a>
        <a href="#how" className={styles.btn}>Check dimensions</a>
      </div>
    </div>
  );
}
