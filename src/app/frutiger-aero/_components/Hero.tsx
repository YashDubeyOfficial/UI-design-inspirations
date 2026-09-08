import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Frutiger Aero · Dew · Glass · Green</div>
      <h1>Fresh as morning<br /><span>dew on glass.</span></h1>
      <p className={styles.sub}>Your <strong>dusty PYQs</strong> misted into droplets — a dewy glass CBT with lens-flare timer and rain-fresh palette.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Mist PDF →</a>
        <a href="#how" className={styles.btn}>Feel the dew</a>
      </div>
    </div>
  );
}
