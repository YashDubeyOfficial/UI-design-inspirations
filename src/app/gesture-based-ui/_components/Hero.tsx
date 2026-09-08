import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>👆 SWIPE · 🤏 PINCH · 👇 TAP — TOUCH REQUIRED</div>
      <h1>Put a finger<br /><span>on the exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs under your thumbs</strong> — swipe through questions, pinch the palette, tap to lock answers. Built thumb-first for hall-like flow.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Swipe PDF →</a>
        <a href="#how" className={styles.btn}>Touch tour</a>
      </div>
    </div>
  );
}
