import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Spatial computing · Your room is the UI</div>
      <h1>The hall appears<br /><span>around you.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as calm glass windows</strong> floating at arm’s length — gaze to select, pinch to submit, blink to breathe.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Look to begin →</a>
        <a href="#how" className={styles.btn}>Adjust windows</a>
      </div>
    </div>
  );
}
