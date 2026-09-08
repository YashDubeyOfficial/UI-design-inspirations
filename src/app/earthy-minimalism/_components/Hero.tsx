import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Earthy minimal · Warm soil · Real paper</div>
      <h1>Grown from <em>your PDF,</em> a real exam.</h1>
      <p className={styles.sub}>Your <strong>PYQs and coaching sheets</strong>, composted into a true CBT. Timer, palette, sections — in clay, moss and sand.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it grows</a>
      </div>
    </div>
  );
}
