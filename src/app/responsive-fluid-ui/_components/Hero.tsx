import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>320px → 4K · One river, every bank</div>
      <h1>Every screen.<br /><span>Same river.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs that reflow like water</strong> — phone, tablet, desktop, projector — the CBT reshapes instantly while the exam stays identical.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Flow PDF →</a>
        <a href="#how" className={styles.btn}>Resize me</a>
      </div>
    </div>
  );
}
