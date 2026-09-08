import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>▶ PLAY · SP 0:00:00 · HI-FI STEREO</div>
      <h1>Be kind,<br /><span>please rewind.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs on magnetic tape</strong> — tracking adjusted, heads cleaned — playing a true CBT with OSD timer and chunky remote palette.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>▶ PLAY →</a>
        <a href="#how" className={styles.btn}>⏪ REWIND</a>
      </div>
    </div>
  );
}
