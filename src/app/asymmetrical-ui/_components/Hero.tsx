import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Deliberately off-balance</div>
      <h1>Nothing lines up.<br /><span>Everything works.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> scattered artfully — big type here, a timer wedged there — while the exam underneath stays perfectly rigorous.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Tip it over →</a>
        <a href="#how" className={styles.btn}>Find balance</a>
      </div>
    </div>
  );
}
