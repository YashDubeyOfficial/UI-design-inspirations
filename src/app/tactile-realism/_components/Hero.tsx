import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Tactile realism · Touch me · Real exam</div>
      <h1>Feel the PDF. <span>Press the hall.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> tailored into a touchable CBT — stitched panels, brass buttons, fabric timers. Every pixel has a texture.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>Feel how</a>
      </div>
      <div className={styles["swatch-row"]}><span className={`${styles.swatch} ${styles.s1}`}></span><span className={`${styles.swatch} ${styles.s2}`}></span><span className={`${styles.swatch} ${styles.s3}`}></span><span className={`${styles.swatch} ${styles.s4}`}></span></div>
    </div>
  );
}
