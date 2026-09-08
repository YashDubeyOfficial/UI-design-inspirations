import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Minimal layout · Real materials</div>
      <h1>Less chrome.<br />More <span>brass.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and question banks</strong> on a quiet page — with toggles that flip, knobs that turn, and panels stitched like a ledger.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
      <div className={styles["toggle-row"]}>
        <span className={`${styles.toggle}`}><i></i></span> Auto-submit on
        <span className={`${styles.toggle} ${styles.off}`}><i></i></span> Distractions off
      </div>
    </div>
  );
}
