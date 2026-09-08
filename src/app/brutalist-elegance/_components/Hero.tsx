import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Brutalist Elegance · Black tie · Raw walls</div>
      <h1>Brutal walls.<br /><span>Tailored suit.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> in a gallery of concrete and gold. Massive serif headlines, hairline rules, exam pressure in evening wear.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF →</a>
        <a href="#how" className={styles.btn}>View the gallery</a>
      </div>
    </div>
  );
}
