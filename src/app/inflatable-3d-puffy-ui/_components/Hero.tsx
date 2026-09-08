import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Inflatable 3D · Puffy UI · So soft</div>
      <h1>Your PDF, <span>inflated</span> into an exam.</h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> get pumped full of air and attention — a balloon-soft CBT with a rock-hard timer.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it puffs</a>
      </div>
      <div className={styles["blob-row"]}><span className={`${styles.puff} ${styles.p1}`}></span><span className={`${styles.puff} ${styles.p2}`}></span><span className={`${styles.puff} ${styles.p3}`}></span></div>
    </div>
  );
}
