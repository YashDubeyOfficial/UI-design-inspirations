import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Calm UI · Breathe · Focus</div>
      <h1>Exams, <span>without</span> the anxiety of the interface.</h1>
      <p className={styles.sub}>Your <strong>PYQs and coaching PDFs</strong> become a quiet, airy CBT. The pressure stays where it belongs — in the questions.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
    </div>
  );
}
