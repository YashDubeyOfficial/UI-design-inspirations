import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Quiet UI · Low volume · High clarity</div>
      <h1>An exam screen that barely speaks.</h1>
      <p className={styles.sub}>Your <strong>PYQs and question banks</strong>, rebuilt as a whisper-quiet CBT. Everything findable, nothing loud.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
    </div>
  );
}
