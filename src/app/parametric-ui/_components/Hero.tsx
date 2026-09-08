import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>PARAMS: [pages=300] [time=180] [neg=-1] — tune me</div>
      <h1>Every value,<br /><span>tunable.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as parameters</strong> — drag the duration, slide the negatives, dial the sections. The hall rebuilds live around your numbers.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Tune PDF →</a>
        <a href="#how" className={styles.btn}>View defaults</a>
      </div>
    </div>
  );
}
