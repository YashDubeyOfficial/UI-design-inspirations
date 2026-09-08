import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Organic · Biomimetic · Grown, not built</div>
      <h1>Form follows<br /><span>forest.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs grown like shells and leaves</strong> — curved CBT chambers where timer ripens and palette blooms.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Grow PDF →</a>
        <a href="#how" className={styles.btn}>Walk the woods</a>
      </div>
    </div>
  );
}
