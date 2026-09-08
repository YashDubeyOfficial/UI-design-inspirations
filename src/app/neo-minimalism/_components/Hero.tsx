import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Neo-Minimal · Grid · Contrast</div>
      <h1>PDF in.<br />Exam <span>out.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and question banks</strong>, rebuilt as a stark, grid-locked CBT. Maximum contrast, zero ornament.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.red}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
    </div>
  );
}
