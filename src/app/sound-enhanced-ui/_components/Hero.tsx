import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>♪ NOW PLAYING: FOCUS_LOFI_180MIN ♪ · VOL 40%</div>
      <h1>Turn it up.<br /><span>Tune it out.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with a soundtrack</strong> — soft ticks for the timer, chimes for locks, a swell on submit. Mute anytime; the exam stays exact.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Play PDF →</a>
        <a href="#how" className={styles.btn}>Sample track</a>
      </div>
    </div>
  );
}
