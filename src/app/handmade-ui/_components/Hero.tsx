import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>✂ handmade with care · no two mocks alike (they are, actually)</div>
      <h1>Stitched with care,<br /><span>tested with rigor.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs, sewn by hand</strong> (okay, by AI with excellent taste) — blanket-stitch borders, wooden buttons, fabric timer. Cozy outside, NTA inside.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Thread PDF →</a>
        <a href="#how" className={styles.btn}>Feel the fabric</a>
      </div>
    </div>
  );
}
