import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>11:42 PM · 12 DAYS TO JEE · FOCUS MODE SUGGESTED</div>
      <h1>It knows it’s late.<br /><span>It dims itself.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with full situational awareness</strong> — late night dims the page, exam-near sharpens the timer, weak chapters surface first.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Continue →</a>
        <a href="#how" className={styles.btn}>What do you know?</a>
      </div>
    </div>
  );
}
