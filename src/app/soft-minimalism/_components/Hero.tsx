import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Soft minimal · Warm · Round</div>
      <h1>Turn any PDF<br />into a <span>soft exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and coaching PDFs</strong>, gently rebuilt as a true CBT. Timer, palette and sections — wrapped in warmth.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
    </div>
  );
}
