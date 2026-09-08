import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Monochromatic · One hue · Total focus</div>
      <h1>One color.<br />Full <span>exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and coaching PDFs</strong> rebuilt as a calm blue CBT. Timer, palette, sections — every state a shade of one color.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
    </div>
  );
}
