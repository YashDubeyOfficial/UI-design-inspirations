import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Set in Anton · Body in Inter · Nothing else</div>
      <h1>TYPE IS<br /><span>THE INTERFACE.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs set enormous</strong> — headlines do the explaining, body copy stays out of the way, and the CBT reads like a poster that tests you.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Set my PDF →</a>
        <a href="#how" className={styles.btn}>Read specimen</a>
      </div>
    </div>
  );
}
