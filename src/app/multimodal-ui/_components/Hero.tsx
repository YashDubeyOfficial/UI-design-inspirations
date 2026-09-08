import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>TEXT · VOICE · IMAGE — ALL INPUTS OPEN</div>
      <h1>Speak, type,<br /><span>or show.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs however they arrive</strong> — typed PDF, photographed page, dictated question — merged into one exact CBT.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Send anything →</a>
        <a href="#how" className={styles.btn}>Switch mode</a>
      </div>
    </div>
  );
}
