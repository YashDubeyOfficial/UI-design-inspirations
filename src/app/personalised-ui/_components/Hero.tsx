import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Good evening, aspirant · Streak: 12 days · Ready when you are</div>
      <h1>Made for<br /><span>exactly you.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs arranged around your habits</strong> — morning person? Light theme at 6 AM. Night owl? We already dimmed it.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Continue journey →</a>
        <a href="#how" className={styles.btn}>Edit profile</a>
      </div>
    </div>
  );
}
