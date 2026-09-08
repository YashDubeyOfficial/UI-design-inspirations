import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Liquid Glass · Refraction · Flow</div>
      <h1>Exams behind <span>liquid glass.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and coaching PDFs</strong> float up through sheets of glass — refracted into a true CBT with timer, palette and sections.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it flows</a>
      </div>
    </div>
  );
}
