import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Spatial UI · Floating panels · True depth</div>
      <h1>Your exam,<br /><span>floating in space.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs spread across depth</strong> — near cards for questions, far panels for palette. Reach in, attempt, submit.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Enter space →</a>
        <a href="#how" className={styles.btn}>Adjust depth</a>
      </div>
    </div>
  );
}
