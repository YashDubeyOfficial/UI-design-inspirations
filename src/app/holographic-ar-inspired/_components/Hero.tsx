import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Holographic · Iridescent · AR-ready</div>
      <h1>Light itself<br /><span>takes the test.</span></h1>
      <p className={styles.sub}>Your <strong>flat PYQs</strong> diffracted into rainbows — an iridescent CBT where timer shimmer and palette spectra keep you oriented.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Refract PDF →</a>
        <a href="#how" className={styles.btn}>See spectra</a>
      </div>
    </div>
  );
}
