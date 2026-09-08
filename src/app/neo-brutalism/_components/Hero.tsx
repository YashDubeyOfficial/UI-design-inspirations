import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Neo-Brutalism · Thick borders · Loud buttons</div>
      <h1>Say it big.<br /><span>Ship the mock.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> slammed into a high-contrast CBT. Borders you can feel, buttons you want to punch — timer included.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF →</a>
        <a href="#how" className={styles.btn}>See the noise</a>
      </div>
    </div>
  );
}
