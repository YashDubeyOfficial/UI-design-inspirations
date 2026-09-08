import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Interactive 3D · Tilt · Depth</div>
      <h1>Lean in. <span>The exam has depth.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> on tilting planes — hover to inspect, dive to attempt. A CBT you can feel from every angle.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it tilts</a>
      </div>
      <div className={styles["tilt-hint"]}><i></i> Hover the deck — it tilts toward you</div>
    </div>
  );
}
