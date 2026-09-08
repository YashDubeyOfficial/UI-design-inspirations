import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>FIELD LOG · DAY 42 · TRAIL: EXAM RIDGE</div>
      <h1>Take only mocks.<br /><span>Leave only scores.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs pressed like trail specimens</strong> — stamped, tagged and logged — into a field-station CBT with compass timer and expedition palette.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Hit the trail →</a>
        <a href="#how" className={styles.btn}>Read the log</a>
      </div>
    </div>
  );
}
