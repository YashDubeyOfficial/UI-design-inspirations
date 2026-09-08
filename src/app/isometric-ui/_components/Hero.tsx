import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Isometric UI · 30° · Solid planes</div>
      <h1>Your PDF, <span>raised</span> into an exam.</h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> extruded onto clean axonometric planes — a CBT with real, readable depth.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it stacks</a>
      </div>
      <div className={styles["iso-scene"]}>
        <span className={styles.cube}><i></i><i></i><i></i></span>
        <span className={`${styles.cube} ${styles.c2}`}><i></i><i></i><i></i></span>
        <span className={`${styles.cube} ${styles.c3}`}><i></i><i></i><i></i></span>
      </div>
    </div>
  );
}
