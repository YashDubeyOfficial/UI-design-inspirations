import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>PDF → CBT · 40 seconds</div>
      <h1>Turn any PDF<br />into a <span>real exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and coaching PDFs</strong>, rebuilt as a true CBT. Timer, palette, sections. Nothing else on screen.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
    </div>
  );
}
