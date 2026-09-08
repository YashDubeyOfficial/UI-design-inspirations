import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>● ISO 400 · f/2.8 · DEVELOPED IN HALL CHEMISTRY</div>
      <h1>Grain is<br /><span>a feature.</span></h1>
      <p className={styles.sub}>Your <strong>faded PYQs</strong> developed like film — warm grain, sprocket-hole palette, darkroom timer. The exam emerges slowly, then all at once.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Expose PDF →</a>
        <a href="#how" className={styles.btn}>Enter darkroom</a>
      </div>
    </div>
  );
}
