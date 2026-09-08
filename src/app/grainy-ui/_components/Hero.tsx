import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>GRAIN 35MM · PUSHED 2 STOPS · HALL GRADED</div>
      <h1>Beautiful noise,<br /><span>exact signal.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs through expired film</strong> — grain dancing over every pixel — while the CBT underneath stays clinically precise.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Expose PDF →</a>
        <a href="#how" className={styles.btn}>Check grain</a>
      </div>
    </div>
  );
}
