import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Liquid metal · Mercury UI · Y2K shine</div>
      <h1>Poured chrome. Real exam.</h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> melt down and recast as a liquid-metal CBT. Timer drips, palette flows, pressure stays solid.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it pours</a>
      </div>
      <div className={styles["blob-row"]}><span className={`${styles.blob} ${styles.b1}`}></span><span className={`${styles.blob} ${styles.b2}`}></span><span className={`${styles.blob} ${styles.b3}`}></span></div>
    </div>
  );
}
