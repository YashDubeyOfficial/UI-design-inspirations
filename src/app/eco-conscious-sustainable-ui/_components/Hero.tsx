import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>♻ 0.12g CO₂ per mock · 100% renewable pixels</div>
      <h1>Light footprint.<br /><span>Heavy exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with minimal watts</strong> — dark text on recycled cream, tiny images, honest stats. The planet grades us too.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Recycle PDF →</a>
        <a href="#how" className={styles.btn}>See footprint</a>
      </div>
    </div>
  );
}
