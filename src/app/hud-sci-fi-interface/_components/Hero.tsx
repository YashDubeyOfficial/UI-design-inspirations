import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>[ HUD ONLINE · ALL SYSTEMS NOMINAL ]</div>
      <h1>HEADS UP.<br /><span>EXAM LOCKED.</span></h1>
      <p className={styles.sub}>Your <strong>mission PDFs</strong> on a combat-grade heads-up display — corner brackets, radar palette, targeting timer. NTA coordinates locked.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>[ ENGAGE → ]</a>
        <a href="#how" className={styles.btn}>[ SCAN ]</a>
      </div>
    </div>
  );
}
