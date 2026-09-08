import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>font-family: monospace; /* the whole site */</div>
      <h1>One font.<br /><span>Zero debate.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs set in monospace</strong> — every character the same width, every timer tick aligned, every palette state a text symbol away.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>{'> upload_pdf →'}</a>
        <a href="#how" className={styles.btn}>{'> read_docs'}</a>
      </div>
    </div>
  );
}
