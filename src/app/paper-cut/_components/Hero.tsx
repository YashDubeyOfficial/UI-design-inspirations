import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Paper Cut · Layered · Handmade</div>
      <h1>Snip the PDF. <span>Keep the exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong>, cut and pasted into a layered paper CBT. Every sheet sits exactly where the hall puts it.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it cuts</a>
      </div>
      <div className={styles.layers}><span className={`${styles.sheet} ${styles.s1}`}></span><span className={`${styles.sheet} ${styles.s2}`}></span><span className={`${styles.sheet} ${styles.s3}`}></span><span className={`${styles.sheet} ${styles.s4}`}></span></div>
    </div>
  );
}
