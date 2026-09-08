import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>VOL. XLII · NO. 90 · PRICE: THREE FREE MOCKS</div>
      <h1>The Exam Issue:<br /><span>PDFs, Perfected.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs laid out like a feature story</strong> — kicker, deck, pull quotes — with a cover-worthy CBT inside and no ads whatsoever.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Subscribe with PDF →</a>
        <a href="#how" className={styles.btn}>Read sample</a>
      </div>
    </div>
  );
}
