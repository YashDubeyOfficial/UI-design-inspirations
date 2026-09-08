import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>❋ biomorphism · soft bodies · squishy logic ❋</div>
      <h1>Squishy outside,<br /><span>strict inside.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs in cellular blobs</strong> — wobbling cards, breathing timer, jelly palette. Strict NTA logic, zero skeleton.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Wobble PDF →</a>
        <a href="#how" className={styles.btn}>Poke around</a>
      </div>
    </div>
  );
}
